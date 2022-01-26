on("onResourceStart", (resourceName) => {
    if(GetCurrentResourceName() != resourceName) return;
        emitNet("player:init");
});


let firstspawn = false;
on("playerSpawned", (spawn) => {
    if (firstspawn == false) 
    {
        emitNet("player:init");
        firstspawn = true;
    }
});

onNet("RegisterPlayer", () => 
{
    SendNuiMessage(JSON.stringify({isOpen : true}))
    SetNuiFocus(true, true);
});


RegisterNuiCallbackType('onValidateIdentity')
on('__cfx_nui:onValidateIdentity', (data) => {
    SetNuiFocus(false, false);
    SendNuiMessage(JSON.stringify({isOpen: false}));

    const identity = {name : data.name, surname : data.surname, birthday : data.birthday, model :data.model}
    emitNet("RegisterPlayer:InsertData", identity);
});