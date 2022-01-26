"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HidAllHudFrame = exports.showMarkerTarget = exports.getPlayers = exports.KeyboardAmount = exports.displayHelpTextThisFrame = exports.showSubtitle = exports.DrawText3D = void 0;
const _1 = require(".");
/**
 *
 * @param number x world coordinate number
 * @param number y world coordinate number
 * @param number z world coordinate number
 * @param string text Your text
 */
function DrawText3D(x, y, z, text) {
    const [onScreen, _x, _y] = World3dToScreen2d(x, y, z);
    if (onScreen) {
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
        DrawText(_x, _y);
    }
}
exports.DrawText3D = DrawText3D;
/**
 * Show a notification above the map.
 * @param string your message.
 * @param number default duration is set to 2500.
 */
function showSubtitle(message, duration = 2500) {
    BeginTextCommandPrint('CELL_EMAIL_BCON');
    AddTextComponentSubstringPlayerName(message);
    EndTextCommandPrint(duration, true);
}
exports.showSubtitle = showSubtitle;
/**
 * Show help notification which is visible in top left of your screen.
 * @param string your message.
 */
function displayHelpTextThisFrame(message) {
    BeginTextCommandDisplayHelp('CELL_EMAIL_BCON');
    AddTextComponentSubstringPlayerName(message);
    EndTextCommandDisplayHelp(0, false, false, -1);
}
exports.displayHelpTextThisFrame = displayHelpTextThisFrame;
/**
 *
 * @param number maxInputLength default set to 1.
 * @param string title.
 * @returns return your value entered on the keyboard input.
 */
function KeyboardAmount(title, maxInputLength = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        let amount = "";
        AddTextEntry("CUSTOM_AMOUNT", title);
        DisplayOnscreenKeyboard(1, "CUSTOM_AMOUNT", '', "", '', '', '', maxInputLength);
        while (UpdateOnscreenKeyboard() != 1 && UpdateOnscreenKeyboard() != 2) {
            yield Wait(0);
        }
        if (UpdateOnscreenKeyboard() != 2) {
            amount = GetOnscreenKeyboardResult();
            yield Wait(1);
        }
        else {
            yield Wait(1);
        }
        return parseInt(amount);
    });
}
exports.KeyboardAmount = KeyboardAmount;
/**
 * @returns Returns a table of all connected players (server ID’s).
 */
function getPlayers() {
    let players = [];
    for (let player of (GetActivePlayers()))
        players[players.length + 1] = player;
    return players;
}
exports.getPlayers = getPlayers;
/**
 * show you a marker on top of the entity player target to see which player your are currently targeting :
 */
function showMarkerTarget() {
    const players = getPlayers();
    const ply = PlayerPedId();
    const plyCoords = new _1.Vector3(GetEntityCoords(ply, false));
    let closestDistance = -1;
    let closestPlayer = -1;
    const [hit, entity] = (0, _1.RayCastGamePlayCamera)(1000);
    for (const value of players) {
        const target = GetPlayerPed(value);
        if (target != ply) {
            const playerCoord = new _1.Vector3(GetEntityCoords(GetPlayerPed(value), false));
            const dist = playerCoord.distance(plyCoords);
            if (dist < 5) {
                if (closestDistance == -1 || closestDistance > dist) {
                    if (hit && entity == GetPlayerPed(value)) {
                        closestPlayer = value;
                        closestDistance = dist;
                        DrawMarker(0, playerCoord.x, playerCoord.y, playerCoord.z + 1, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1, 255, 255, 255, 200, true, false, 2, false, null, null, false);
                    }
                }
            }
        }
    }
}
exports.showMarkerTarget = showMarkerTarget;
function HidAllHudFrame() {
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
exports.HidAllHudFrame = HidAllHudFrame;
