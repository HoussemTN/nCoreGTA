import * as MySQL from 'fivem-mysql-async-js'


//Will be used for a whitelist system can be good :
// on('playerConnecting', (name, setKickReason, deferrals) => {
//     deferrals.defer()
//     const player = global.source;

//     setTimeout(() => {
//         deferrals.update(`Hello ${name}. Your LicenseID is being checked.`);
//         const licenseID = GetPlayerIdentifier(player, 2);

//         if (licenseID === null) 
//             deferrals.done("Please restart your fivem, we can't find your licenseID.");
//         else 
//             deferrals.done()
//     }, 0)
// })

onNet('player:init', async () => 
{
    const player            = global.source;
    const licenseID         = GetPlayerIdentifier(player, 2);
    const requestIdentity   = 'SELECT * FROM users WHERE license = (?)';
    const userData          = await MySQL.fetchAll(requestIdentity, [licenseID]);

    //If the player already exist then we can skip the register identity
    if(userData[0])
    {
        // ${userData[0].identity}
       //console.log(`Player found !`);
    }
    else 
    {
        //console.log("Player not found !");
        emitNet("RegisterPlayer", player);
    }
})


onNet('RegisterPlayer:InsertData', async (identity) => 
{
    const player       = global.source;
    const licenseID    = GetPlayerIdentifier(player, 2);
    const identityData = `INSERT INTO users (license, identity) VALUES (?, ?)`;
    MySQL.execute(identityData, [licenseID, JSON.stringify(identity)]);
    //console.log(`New Player added ${JSON.stringify(identity)}`);
})