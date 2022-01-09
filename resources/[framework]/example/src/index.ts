import {Vector3, DrawText3D, showMarkerTarget} from '../../[dependancies]/src';

//Function which return nothing (void) called to draw a 3d text basing on your marker distance :
function showMarkerDistance() : void
{
    const waypoint : number = GetFirstBlipInfoId(8);
    if (DoesBlipExist(waypoint))
    {
        const playerCoord       = new Vector3(GetEntityCoords(PlayerPedId(), true));
        const blipVector        = new Vector3(GetBlipInfoIdCoord(waypoint));
        const dist              = playerCoord.distance(blipVector);
        const tempRoundOverKm   = Math.floor(dist) * Math.pow(10, -3);
        
        if (dist > 999) 
            DrawText3D(blipVector.x, blipVector.y, playerCoord.z, `V\n  ${Math.floor(tempRoundOverKm)} kilometres`);
        else if(dist > 0.1 && dist <= 999 ) 
            DrawText3D(blipVector.x, blipVector.y, playerCoord.z, `V\n  ${Math.round(dist)} m`);
    }
}

//Thread used for the marker example : 
setTick(async () => 
{
    showMarkerDistance();
    await Wait(0);
})