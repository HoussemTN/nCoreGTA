import { Vector3, RayCastGamePlayCamera } from ".";


/**
 * 
 * @param number x world coordinate number
 * @param number y world coordinate number
 * @param number z world coordinate number
 * @param string text Your text
 */
export function DrawText3D(x : number, y :number, z : number, text : string) : void
{
    const [onScreen, _x, _y] = World3dToScreen2d(x, y, z);
    if (onScreen) 
    {
        SetTextScale(0.3 + 0.03, 0.3 + 0.03);
        SetTextFont(0);
        SetTextProportional(true);
        SetTextColour(255, 255, 255, 255);
        SetTextDropshadow(0, 0, 0, 0, 55);
        SetTextEdge(2, 0, 0, 0, 150);
        SetTextDropShadow();
        SetTextOutline();
        SetTextEntry("STRING");
        SetTextCentre(true);
        AddTextComponentString(text);
        DrawText(_x,_y);
    }
}

/**
 * Show a notification above the map.
 * @param string your message.
 * @param number default duration is set to 2500.
 */
export function showSubtitle(message: string, duration : number = 2500): void {
    BeginTextCommandPrint('CELL_EMAIL_BCON');
    AddTextComponentSubstringPlayerName(message);
    EndTextCommandPrint(duration, true);
}

/**
 * Show help notification which is visible in top left of your screen.
 * @param string your message.
 */
export function displayHelpTextThisFrame(message: string): void 
{
    BeginTextCommandDisplayHelp('CELL_EMAIL_BCON');
    AddTextComponentSubstringPlayerName(message);
    EndTextCommandDisplayHelp(0, false, false, -1);
}


/**
 * 
 * @param number maxInputLength default set to 1.
 * @param string title.
 * @returns return your value entered on the keyboard input.
 */
export async function KeyboardAmount(title : string, maxInputLength = 1) : Promise<number>
{
    let amount = "";
    AddTextEntry("CUSTOM_AMOUNT", title);
    DisplayOnscreenKeyboard(1, "CUSTOM_AMOUNT", '', "", '', '', '', maxInputLength);

    while (UpdateOnscreenKeyboard() != 1 && UpdateOnscreenKeyboard() != 2) 
    {
        await Wait(0)
    }

    if (UpdateOnscreenKeyboard() != 2) 
    {
        amount = GetOnscreenKeyboardResult()
        await Wait(1)
    }
    else
    {
        await Wait(1)
    }

    return parseInt(amount)
}
 

/**
 * @returns Returns a table of all connected players (server ID’s).
 */
export function getPlayers() : number[]
{
    let players : number[] = [];
	for(let player of (GetActivePlayers()))
		players[players.length + 1] = player;
    return players;
}

/**
 * show you a marker on top of the entity player target to see which player your are currently targeting : 
 */
export function showMarkerTarget() : void
{
	const players         : number[] = getPlayers();
	const ply             : number   = PlayerPedId();
	const plyCoords       : Vector3  = new Vector3(GetEntityCoords(ply, false));
	let closestDistance   : number   = -1;
	let closestPlayer     : number   = -1;
    const [hit, entity] = RayCastGamePlayCamera(1000);

	for (const value of players)
    {
        const target = GetPlayerPed(value)
		if(target != ply) 
        {
            const playerCoord  = new Vector3(GetEntityCoords(GetPlayerPed(value), false));
            const dist         = playerCoord.distance(plyCoords);
			if (dist < 5) 
            {
				if(closestDistance == -1 || closestDistance > dist) 
                {
                    if(hit && entity == GetPlayerPed(value))
                    {
                        closestPlayer   = value;
                        closestDistance = dist;
                        DrawMarker(0, playerCoord.x, playerCoord.y, playerCoord.z + 1, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1, 255, 255, 255, 200, true, false, 2, false, null, null, false);
                    }
                }
            }
        }
    }
}

export function HidAllHudFrame() : void 
{
    HideHelpTextThisFrame();
	HideHudAndRadarThisFrame();
	HideHudComponentThisFrame(1);
	HideHudComponentThisFrame(2);
	HideHudComponentThisFrame(3);
	HideHudComponentThisFrame(4);
	HideHudComponentThisFrame(6);
	HideHudComponentThisFrame(7);
	HideHudComponentThisFrame(8);
	HideHudComponentThisFrame(9);
	HideHudComponentThisFrame(13);
	HideHudComponentThisFrame(17);
	HideHudComponentThisFrame(20);
}