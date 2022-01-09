/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../[dependancies]/src/utils/Color.ts
const RGB_COLOR_REGEX = /\((\d+),\s*(\d+),\s*(\d+)(,\s*(\d*.\d*))?\)/;
class Color {
    constructor(r, g, b, a) {
        if (typeof r === 'string') {
            r = r.trim();
            if (r.indexOf('#') === 0) {
                r = r.substr(r.indexOf('#') + 1);
                this.r = parseInt(r.substr(0, 2), 16);
                this.g = parseInt(r.substr(2, 2), 16);
                this.b = parseInt(r.substr(4, 2), 16);
            }
            else if (r.indexOf('rgb') === 0) {
                const res = RGB_COLOR_REGEX.exec(r);
                this.r = parseInt(res[1], 10);
                this.g = parseInt(res[2], 10);
                this.b = parseInt(res[3], 10);
                this.a = res[5] ? parseFloat(res[5]) : 1;
            }
        }
        else {
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a || 1;
        }
    }
    toHex() {
        return '#' + this.r.toString(16) + this.g.toString(16) + this.b.toString(16);
    }
    toRgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toRgba() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
}

// CONCATENATED MODULE: ../[dependancies]/src/utils/Vector3.ts
class Vector3 {
    constructor(points = [0, 0, 0]) {
        this.points = points;
    }
    get x() {
        return this.points[0];
    }
    get y() {
        return this.points[1];
    }
    get z() {
        return this.points[2];
    }
    get magnitude() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    get normal() {
        return Math.sqrt(this.magnitude);
    }
    set x(v) {
        this.points[0] = v;
    }
    set y(v) {
        this.points[1] = v;
    }
    set z(v) {
        this.points[2] = v;
    }
    /**
     *
     * @returns Allow you to convert your vector3 to a string and be able to print it : (usefull for debugging)
     */
    toString() {
        return 'vec3:(' + this.points.join(', ') + ')';
    }
    /**
     *
     * @param Vector3 other
     * @returns add your vector by the vector parameter.
     */
    add(other) {
        return new Vector3([
            this.x + other.x,
            this.y + other.y,
            this.z + other.z
        ]);
    }
    /**
     *
     * @param Vector3 other
     * @returns subtract your vector by the vector parameter.
     */
    subtract(other) {
        return new Vector3([
            this.x - other.x,
            this.y - other.y,
            this.z - other.z
        ]);
    }
    /**
     *
     * @param Vector3 other
     * @returns multiply your vector by the vector parameter.
     */
    multiply(other) {
        return new Vector3([
            this.x * other.x,
            this.y * other.y,
            this.z * other.z
        ]);
    }
    /**
     *
     * @param Vector3 other
     * @returns Divides your vector by the vector parameter.
     */
    divide(other) {
        return new Vector3([
            ((this.x === 0 || other.x === 0) ? 0 : this.x / other.x),
            ((this.y === 0 || other.y === 0) ? 0 : this.y / other.y),
            ((this.z === 0 || other.z === 0) ? 0 : this.z / other.z)
        ]);
    }
    /**
     *
     * @param Vector3 otherDistance
     * @returns Returns the distance between your entity and the otherEntity set as parameter.
     */
    distance(otherDistance) {
        let dx = this.x - otherDistance.x, dy = this.y - otherDistance.y, dz = this.z - otherDistance.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    /**
     *
     * @param min number
     * @param max number
     * @returns return a random floor value between your min and max set in parameter.
     */
    static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    /**
     *
     * @param num number
     * @param min number
     * @param max number
     * @returns The float result between the min and max values.
     */
    static clamp(num, min, max) {
        return num <= min ? min : num >= max ? max : num;
    }
    /**
     *
     * @param a number Start value.
     * @param b number End value.
     * @param t number Value used to interpolate between a and b.
     * @returns Interpolated value, equals to a + (b - a) * t.
     */
    static lerp(a, b, t) {
        return a * (1 - t) + b * t;
    }
}

// CONCATENATED MODULE: ../[dependancies]/src/utils/Draw.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

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
/**
 * Show help notification which is visible in top left of your screen.
 * @param string your message.
 */
function displayHelpTextThisFrame(message) {
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
/**
 * @returns Returns a table of all connected players (server ID’s).
 */
function getPlayers() {
    let players = [];
    for (let player of (GetActivePlayers()))
        players[players.length + 1] = player;
    return players;
}
/**
 * show you a marker on top of the entity player target to see which player your are currently targeting :
 */
function showMarkerTarget() {
    const players = getPlayers();
    const ply = PlayerPedId();
    const plyCoords = new Vector3(GetEntityCoords(ply, false));
    let closestDistance = -1;
    let closestPlayer = -1;
    const [hit, entity] = RayCastGamePlayCamera(1000);
    for (const value of players) {
        const target = GetPlayerPed(value);
        if (target != ply) {
            const playerCoord = new Vector3(GetEntityCoords(GetPlayerPed(value), false));
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

// CONCATENATED MODULE: ../[dependancies]/src/utils/weapon_enum.ts
var WeaponHash;
(function (WeaponHash) {
    WeaponHash[WeaponHash["Knife"] = 2578778090] = "Knife";
    WeaponHash[WeaponHash["Nightstick"] = 1737195953] = "Nightstick";
    WeaponHash[WeaponHash["Hammer"] = 1317494643] = "Hammer";
    WeaponHash[WeaponHash["Bat"] = 2508868239] = "Bat";
    WeaponHash[WeaponHash["GolfClub"] = 1141786504] = "GolfClub";
    WeaponHash[WeaponHash["Crowbar"] = 2227010557] = "Crowbar";
    WeaponHash[WeaponHash["Bottle"] = 4192643659] = "Bottle";
    WeaponHash[WeaponHash["SwitchBlade"] = 3756226112] = "SwitchBlade";
    WeaponHash[WeaponHash["Pistol"] = 453432689] = "Pistol";
    WeaponHash[WeaponHash["CombatPistol"] = 1593441988] = "CombatPistol";
    WeaponHash[WeaponHash["APPistol"] = 584646201] = "APPistol";
    WeaponHash[WeaponHash["Pistol50"] = 2578377531] = "Pistol50";
    WeaponHash[WeaponHash["FlareGun"] = 1198879012] = "FlareGun";
    WeaponHash[WeaponHash["MarksmanPistol"] = 3696079510] = "MarksmanPistol";
    WeaponHash[WeaponHash["Revolver"] = 3249783761] = "Revolver";
    WeaponHash[WeaponHash["MicroSMG"] = 324215364] = "MicroSMG";
    WeaponHash[WeaponHash["SMG"] = 736523883] = "SMG";
    WeaponHash[WeaponHash["AssaultSMG"] = 4024951519] = "AssaultSMG";
    WeaponHash[WeaponHash["CombatPDW"] = 171789620] = "CombatPDW";
    WeaponHash[WeaponHash["AssaultRifle"] = 3220176749] = "AssaultRifle";
    WeaponHash[WeaponHash["CarbineRifle"] = 2210333304] = "CarbineRifle";
    WeaponHash[WeaponHash["AdvancedRifle"] = 2937143193] = "AdvancedRifle";
    WeaponHash[WeaponHash["CompactRifle"] = 1649403952] = "CompactRifle";
    WeaponHash[WeaponHash["MG"] = 2634544996] = "MG";
    WeaponHash[WeaponHash["CombatMG"] = 2144741730] = "CombatMG";
    WeaponHash[WeaponHash["PumpShotgun"] = 487013001] = "PumpShotgun";
    WeaponHash[WeaponHash["SawnOffShotgun"] = 2017895192] = "SawnOffShotgun";
    WeaponHash[WeaponHash["AssaultShotgun"] = 3800352039] = "AssaultShotgun";
    WeaponHash[WeaponHash["BullpupShotgun"] = 2640438543] = "BullpupShotgun";
    WeaponHash[WeaponHash["DoubleBarrelShotgun"] = 4019527611] = "DoubleBarrelShotgun";
    WeaponHash[WeaponHash["StunGun"] = 911657153] = "StunGun";
    WeaponHash[WeaponHash["SniperRifle"] = 100416529] = "SniperRifle";
    WeaponHash[WeaponHash["HeavySniper"] = 205991906] = "HeavySniper";
    WeaponHash[WeaponHash["GrenadeLauncher"] = 2726580491] = "GrenadeLauncher";
    WeaponHash[WeaponHash["GrenadeLauncherSmoke"] = 1305664598] = "GrenadeLauncherSmoke";
    WeaponHash[WeaponHash["RPG"] = 2982836145] = "RPG";
    WeaponHash[WeaponHash["Minigun"] = 1119849093] = "Minigun";
    WeaponHash[WeaponHash["Grenade"] = 2481070269] = "Grenade";
    WeaponHash[WeaponHash["StickyBomb"] = 741814745] = "StickyBomb";
    WeaponHash[WeaponHash["SmokeGrenade"] = 4256991824] = "SmokeGrenade";
    WeaponHash[WeaponHash["BZGas"] = 2694266206] = "BZGas";
    WeaponHash[WeaponHash["Molotov"] = 615608432] = "Molotov";
    WeaponHash[WeaponHash["FireExtinguisher"] = 101631238] = "FireExtinguisher";
    WeaponHash[WeaponHash["PetrolCan"] = 883325847] = "PetrolCan";
    WeaponHash[WeaponHash["SNSPistol"] = 3218215474] = "SNSPistol";
    WeaponHash[WeaponHash["SpecialCarbine"] = 3231910285] = "SpecialCarbine";
    WeaponHash[WeaponHash["HeavyPistol"] = 3523564046] = "HeavyPistol";
    WeaponHash[WeaponHash["BullpupRifle"] = 2132975508] = "BullpupRifle";
    WeaponHash[WeaponHash["HomingLauncher"] = 1672152130] = "HomingLauncher";
    WeaponHash[WeaponHash["ProximityMine"] = 2874559379] = "ProximityMine";
    WeaponHash[WeaponHash["Snowball"] = 126349499] = "Snowball";
    WeaponHash[WeaponHash["VintagePistol"] = 137902532] = "VintagePistol";
    WeaponHash[WeaponHash["Dagger"] = 2460120199] = "Dagger";
    WeaponHash[WeaponHash["Firework"] = 2138347493] = "Firework";
    WeaponHash[WeaponHash["Musket"] = 2828843422] = "Musket";
    WeaponHash[WeaponHash["MarksmanRifle"] = 3342088282] = "MarksmanRifle";
    WeaponHash[WeaponHash["HeavyShotgun"] = 984333226] = "HeavyShotgun";
    WeaponHash[WeaponHash["Gusenberg"] = 1627465347] = "Gusenberg";
    WeaponHash[WeaponHash["Hatchet"] = 4191993645] = "Hatchet";
    WeaponHash[WeaponHash["Railgun"] = 1834241177] = "Railgun";
    WeaponHash[WeaponHash["Unarmed"] = 2725352035] = "Unarmed";
    WeaponHash[WeaponHash["KnuckleDuster"] = 3638508604] = "KnuckleDuster";
    WeaponHash[WeaponHash["Machete"] = 3713923289] = "Machete";
    WeaponHash[WeaponHash["MachinePistol"] = 3675956304] = "MachinePistol";
    WeaponHash[WeaponHash["Flashlight"] = 2343591895] = "Flashlight";
    WeaponHash[WeaponHash["Ball"] = 600439132] = "Ball";
    WeaponHash[WeaponHash["Flare"] = 1233104067] = "Flare";
    WeaponHash[WeaponHash["NightVision"] = 2803906140] = "NightVision";
    WeaponHash[WeaponHash["Parachute"] = 4222310262] = "Parachute";
    WeaponHash[WeaponHash["SweeperShotgun"] = 317205821] = "SweeperShotgun";
    WeaponHash[WeaponHash["BattleAxe"] = 3441901897] = "BattleAxe";
    WeaponHash[WeaponHash["CompactGrenadeLauncher"] = 125959754] = "CompactGrenadeLauncher";
    WeaponHash[WeaponHash["MiniSMG"] = 3173288789] = "MiniSMG";
    WeaponHash[WeaponHash["PipeBomb"] = 3125143736] = "PipeBomb";
    WeaponHash[WeaponHash["PoolCue"] = 2484171525] = "PoolCue";
    WeaponHash[WeaponHash["Wrench"] = 419712736] = "Wrench";
    WeaponHash[WeaponHash["PistolMk2"] = 3219281620] = "PistolMk2";
    WeaponHash[WeaponHash["AssaultRifleMk2"] = 961495388] = "AssaultRifleMk2";
    WeaponHash[WeaponHash["CarbineRifleMk2"] = 4208062921] = "CarbineRifleMk2";
    WeaponHash[WeaponHash["CombatMGMk2"] = 3686625920] = "CombatMGMk2";
    WeaponHash[WeaponHash["HeavySniperMk2"] = 177293209] = "HeavySniperMk2";
    WeaponHash[WeaponHash["SMGMk2"] = 2024373456] = "SMGMk2";
})(WeaponHash || (WeaponHash = {}));
var VehicleWeaponHash;
(function (VehicleWeaponHash) {
    VehicleWeaponHash[VehicleWeaponHash["Invalid"] = -1] = "Invalid";
    VehicleWeaponHash[VehicleWeaponHash["Tank"] = 1945616459] = "Tank";
    VehicleWeaponHash[VehicleWeaponHash["SpaceRocket"] = -123497569] = "SpaceRocket";
    VehicleWeaponHash[VehicleWeaponHash["PlaneRocket"] = -821520672] = "PlaneRocket";
    VehicleWeaponHash[VehicleWeaponHash["PlayerLaser"] = -268631733] = "PlayerLaser";
    VehicleWeaponHash[VehicleWeaponHash["PlayerBullet"] = 1259576109] = "PlayerBullet";
    VehicleWeaponHash[VehicleWeaponHash["PlayerBuzzard"] = 1186503822] = "PlayerBuzzard";
    VehicleWeaponHash[VehicleWeaponHash["PlayerHunter"] = -1625648674] = "PlayerHunter";
    VehicleWeaponHash[VehicleWeaponHash["PlayerLazer"] = -494786007] = "PlayerLazer";
    VehicleWeaponHash[VehicleWeaponHash["EnemyLaser"] = 1566990507] = "EnemyLaser";
    VehicleWeaponHash[VehicleWeaponHash["SearchLight"] = -844344963] = "SearchLight";
    VehicleWeaponHash[VehicleWeaponHash["Radar"] = -764006018] = "Radar";
})(VehicleWeaponHash || (VehicleWeaponHash = {}));
var AmmoType;
(function (AmmoType) {
    AmmoType[AmmoType["Melee"] = 0] = "Melee";
    AmmoType[AmmoType["FireExtinguisher"] = 1359393852] = "FireExtinguisher";
    AmmoType[AmmoType["Flare"] = 1808594799] = "Flare";
    AmmoType[AmmoType["FlareGun"] = 1173416293] = "FlareGun";
    AmmoType[AmmoType["PetrolCan"] = 3395492001] = "PetrolCan";
    AmmoType[AmmoType["Shotgun"] = 2416459067] = "Shotgun";
    AmmoType[AmmoType["Pistol"] = 1950175060] = "Pistol";
    AmmoType[AmmoType["Ball"] = 4287981158] = "Ball";
    AmmoType[AmmoType["Snowball"] = 2182627693] = "Snowball";
    AmmoType[AmmoType["Sniper"] = 1285032059] = "Sniper";
    AmmoType[AmmoType["AssaultRifle"] = 218444191] = "AssaultRifle";
    AmmoType[AmmoType["SMG"] = 1820140472] = "SMG";
    AmmoType[AmmoType["Molotov"] = 1446246869] = "Molotov";
    AmmoType[AmmoType["StunGun"] = 2955849184] = "StunGun";
    AmmoType[AmmoType["MG"] = 1788949567] = "MG";
    AmmoType[AmmoType["GrenadeLauncher"] = 1003267566] = "GrenadeLauncher";
    AmmoType[AmmoType["RPG"] = 1742569970] = "RPG";
    AmmoType[AmmoType["Minigun"] = 2680539266] = "Minigun";
    AmmoType[AmmoType["Firework"] = 2938367503] = "Firework";
    AmmoType[AmmoType["Railgun"] = 2034517757] = "Railgun";
    AmmoType[AmmoType["HomingLauncher"] = 2568293933] = "HomingLauncher";
    AmmoType[AmmoType["Grenade"] = 1003688881] = "Grenade";
    AmmoType[AmmoType["StickyBomb"] = 1411692055] = "StickyBomb";
    AmmoType[AmmoType["ProximityMine"] = 2938243239] = "ProximityMine";
    AmmoType[AmmoType["PipeBomb"] = 357983224] = "PipeBomb";
    AmmoType[AmmoType["SmokeGrenade"] = 3859679398] = "SmokeGrenade";
    AmmoType[AmmoType["BZGas"] = 2608103076] = "BZGas";
})(AmmoType || (AmmoType = {}));

// CONCATENATED MODULE: ../[dependancies]/src/utils/ped_enum.ts
var PedHash;
(function (PedHash) {
    PedHash[PedHash["Michael"] = 225514697] = "Michael";
    PedHash[PedHash["Franklin"] = 2602752943] = "Franklin";
    PedHash[PedHash["Trevor"] = 2608926626] = "Trevor";
    PedHash[PedHash["Abigail"] = 1074457665] = "Abigail";
    PedHash[PedHash["Agent"] = 3614493108] = "Agent";
    PedHash[PedHash["Agent14"] = 4227433577] = "Agent14";
    PedHash[PedHash["AmandaTownley"] = 1830688247] = "AmandaTownley";
    PedHash[PedHash["Andreas"] = 1206185632] = "Andreas";
    PedHash[PedHash["Ashley"] = 2129936603] = "Ashley";
    PedHash[PedHash["AviSchwartzman"] = 939183526] = "AviSchwartzman";
    PedHash[PedHash["Ballasog"] = 2802535058] = "Ballasog";
    PedHash[PedHash["Bankman"] = 2426248831] = "Bankman";
    PedHash[PedHash["Barry"] = 797459875] = "Barry";
    PedHash[PedHash["Bestmen"] = 1464257942] = "Bestmen";
    PedHash[PedHash["Beverly"] = 3181518428] = "Beverly";
    PedHash[PedHash["Brad"] = 3183167778] = "Brad";
    PedHash[PedHash["Bride"] = 1633872967] = "Bride";
    PedHash[PedHash["Car3Guy1"] = 2230970679] = "Car3Guy1";
    PedHash[PedHash["Car3Guy2"] = 1975732938] = "Car3Guy2";
    PedHash[PedHash["Casey"] = 3774489940] = "Casey";
    PedHash[PedHash["Chef"] = 1240128502] = "Chef";
    PedHash[PedHash["Chef2"] = 2240322243] = "Chef2";
    PedHash[PedHash["Clay"] = 1825562762] = "Clay";
    PedHash[PedHash["Claypain"] = 2634057640] = "Claypain";
    PedHash[PedHash["Cletus"] = 3865252245] = "Cletus";
    PedHash[PedHash["CrisFormage"] = 678319271] = "CrisFormage";
    PedHash[PedHash["Dale"] = 1182012905] = "Dale";
    PedHash[PedHash["DaveNorton"] = 365775923] = "DaveNorton";
    PedHash[PedHash["Denise"] = 2181772221] = "Denise";
    PedHash[PedHash["Devin"] = 1952555184] = "Devin";
    PedHash[PedHash["DoaMan"] = 1646160893] = "DoaMan";
    PedHash[PedHash["Dom"] = 2620240008] = "Dom";
    PedHash[PedHash["Dreyfuss"] = 3666413874] = "Dreyfuss";
    PedHash[PedHash["DrFriedlander"] = 3422293493] = "DrFriedlander";
    PedHash[PedHash["EdToh"] = 712602007] = "EdToh";
    PedHash[PedHash["Fabien"] = 3499148112] = "Fabien";
    PedHash[PedHash["FbiSuit01"] = 988062523] = "FbiSuit01";
    PedHash[PedHash["Floyd"] = 2981205682] = "Floyd";
    PedHash[PedHash["G"] = 2216405299] = "G";
    PedHash[PedHash["Groom"] = 4274948997] = "Groom";
    PedHash[PedHash["Hao"] = 1704428387] = "Hao";
    PedHash[PedHash["Hunter"] = 3457361118] = "Hunter";
    PedHash[PedHash["Janet"] = 225287241] = "Janet";
    PedHash[PedHash["JayNorris"] = 2050158196] = "JayNorris";
    PedHash[PedHash["Jewelass"] = 257763003] = "Jewelass";
    PedHash[PedHash["JimmyBoston"] = 3986688045] = "JimmyBoston";
    PedHash[PedHash["JimmyDisanto"] = 1459905209] = "JimmyDisanto";
    PedHash[PedHash["JoeMinuteman"] = 3189787803] = "JoeMinuteman";
    PedHash[PedHash["JohnnyKlebitz"] = 2278195374] = "JohnnyKlebitz";
    PedHash[PedHash["Josef"] = 3776618420] = "Josef";
    PedHash[PedHash["Josh"] = 2040438510] = "Josh";
    PedHash[PedHash["KarenDaniels"] = 3948009817] = "KarenDaniels";
    PedHash[PedHash["KerryMcintosh"] = 1530648845] = "KerryMcintosh";
    PedHash[PedHash["LamarDavis"] = 1706635382] = "LamarDavis";
    PedHash[PedHash["Lazlow"] = 3756278757] = "Lazlow";
    PedHash[PedHash["LesterCrest"] = 1302784073] = "LesterCrest";
    PedHash[PedHash["Lifeinvad01"] = 1401530684] = "Lifeinvad01";
    PedHash[PedHash["Lifeinvad02"] = 666718676] = "Lifeinvad02";
    PedHash[PedHash["Magenta"] = 4242313482] = "Magenta";
    PedHash[PedHash["Malc"] = 4055673113] = "Malc";
    PedHash[PedHash["Manuel"] = 4248931856] = "Manuel";
    PedHash[PedHash["Marnie"] = 411185872] = "Marnie";
    PedHash[PedHash["MaryAnn"] = 2741999622] = "MaryAnn";
    PedHash[PedHash["Maude"] = 1005070462] = "Maude";
    PedHash[PedHash["Michelle"] = 3214308084] = "Michelle";
    PedHash[PedHash["Milton"] = 3408943538] = "Milton";
    PedHash[PedHash["Molly"] = 2936266209] = "Molly";
    PedHash[PedHash["MrK"] = 3990661997] = "MrK";
    PedHash[PedHash["MrsPhillips"] = 946007720] = "MrsPhillips";
    PedHash[PedHash["MrsThornhill"] = 503621995] = "MrsThornhill";
    PedHash[PedHash["Natalia"] = 3726105915] = "Natalia";
    PedHash[PedHash["NervousRon"] = 3170921201] = "NervousRon";
    PedHash[PedHash["Nigel"] = 3367442045] = "Nigel";
    PedHash[PedHash["OldMan1a"] = 1906124788] = "OldMan1a";
    PedHash[PedHash["OldMan2"] = 4011150407] = "OldMan2";
    PedHash[PedHash["Omega"] = 1625728984] = "Omega";
    PedHash[PedHash["ONeil"] = 768005095] = "ONeil";
    PedHash[PedHash["Orleans"] = 1641334641] = "Orleans";
    PedHash[PedHash["Ortega"] = 648372919] = "Ortega";
    PedHash[PedHash["Paper"] = 2577072326] = "Paper";
    PedHash[PedHash["Patricia"] = 3312325004] = "Patricia";
    PedHash[PedHash["Popov"] = 645279998] = "Popov";
    PedHash[PedHash["Paige"] = 357551935] = "Paige";
    PedHash[PedHash["Priest"] = 1681385341] = "Priest";
    PedHash[PedHash["PrologueDriver"] = 2237544099] = "PrologueDriver";
    PedHash[PedHash["PrologueSec01"] = 1888624839] = "PrologueSec01";
    PedHash[PedHash["PrologueSec02"] = 666086773] = "PrologueSec02";
    PedHash[PedHash["RampGang"] = 3845001836] = "RampGang";
    PedHash[PedHash["RampHic"] = 1165307954] = "RampHic";
    PedHash[PedHash["RampHipster"] = 3740245870] = "RampHipster";
    PedHash[PedHash["RampMex"] = 3870061732] = "RampMex";
    PedHash[PedHash["Rashkovsky"] = 940326374] = "Rashkovsky";
    PedHash[PedHash["RoccoPelosi"] = 3585757951] = "RoccoPelosi";
    PedHash[PedHash["RussianDrunk"] = 1024089777] = "RussianDrunk";
    PedHash[PedHash["ScreenWriter"] = 4293277303] = "ScreenWriter";
    PedHash[PedHash["SiemonYetarian"] = 1283141381] = "SiemonYetarian";
    PedHash[PedHash["Solomon"] = 2260598310] = "Solomon";
    PedHash[PedHash["SteveHains"] = 941695432] = "SteveHains";
    PedHash[PedHash["Stretch"] = 915948376] = "Stretch";
    PedHash[PedHash["Talina"] = 3885222120] = "Talina";
    PedHash[PedHash["Tanisha"] = 226559113] = "Tanisha";
    PedHash[PedHash["TaoCheng"] = 3697041061] = "TaoCheng";
    PedHash[PedHash["TaosTranslator"] = 2089096292] = "TaosTranslator";
    PedHash[PedHash["TennisCoach"] = 2721800023] = "TennisCoach";
    PedHash[PedHash["Terry"] = 1728056212] = "Terry";
    PedHash[PedHash["TomEpsilon"] = 3447159466] = "TomEpsilon";
    PedHash[PedHash["Tonya"] = 3402126148] = "Tonya";
    PedHash[PedHash["TracyDisanto"] = 3728026165] = "TracyDisanto";
    PedHash[PedHash["TrafficWarden"] = 1461287021] = "TrafficWarden";
    PedHash[PedHash["TylerDixon"] = 1382414087] = "TylerDixon";
    PedHash[PedHash["VagosSpeak"] = 4194109068] = "VagosSpeak";
    PedHash[PedHash["Wade"] = 2459507570] = "Wade";
    PedHash[PedHash["WeiCheng"] = 2867128955] = "WeiCheng";
    PedHash[PedHash["Zimbor"] = 188012277] = "Zimbor";
    PedHash[PedHash["AbigailCutscene"] = 2306246977] = "AbigailCutscene";
    PedHash[PedHash["AgentCutscene"] = 3614493108] = "AgentCutscene";
    PedHash[PedHash["Agent14Cutscene"] = 1841036427] = "Agent14Cutscene";
    PedHash[PedHash["AmandaTownleyCutscene"] = 2515474659] = "AmandaTownleyCutscene";
    PedHash[PedHash["AndreasCutscene"] = 3881194279] = "AndreasCutscene";
    PedHash[PedHash["AnitaCutscene"] = 117698822] = "AnitaCutscene";
    PedHash[PedHash["AntonCutscene"] = 2781317046] = "AntonCutscene";
    PedHash[PedHash["AshleyCutscene"] = 650367097] = "AshleyCutscene";
    PedHash[PedHash["AviSchwartzmanCutscene"] = 2560490906] = "AviSchwartzmanCutscene";
    PedHash[PedHash["BallasogCutscene"] = 2884567044] = "BallasogCutscene";
    PedHash[PedHash["BankmanCutscene"] = 2539657518] = "BankmanCutscene";
    PedHash[PedHash["BarryCutscene"] = 1767447799] = "BarryCutscene";
    PedHash[PedHash["BeverlyCutscene"] = 3027157846] = "BeverlyCutscene";
    PedHash[PedHash["BradCutscene"] = 4024807398] = "BradCutscene";
    PedHash[PedHash["BradCadaverCutscene"] = 1915268960] = "BradCadaverCutscene";
    PedHash[PedHash["BrideCutscene"] = 2193587873] = "BrideCutscene";
    PedHash[PedHash["BurgerDrugCutscene"] = 2363277399] = "BurgerDrugCutscene";
    PedHash[PedHash["Car3Guy1Cutscene"] = 71501447] = "Car3Guy1Cutscene";
    PedHash[PedHash["Car3Guy2Cutscene"] = 327394568] = "Car3Guy2Cutscene";
    PedHash[PedHash["CarBuyerCutscene"] = 2362341647] = "CarBuyerCutscene";
    PedHash[PedHash["CaseyCutscene"] = 3935738944] = "CaseyCutscene";
    PedHash[PedHash["ChefCutscene"] = 2739391114] = "ChefCutscene";
    PedHash[PedHash["Chef2Cutscene"] = 2925257274] = "Chef2Cutscene";
    PedHash[PedHash["ChinGoonCutscene"] = 2831296918] = "ChinGoonCutscene";
    PedHash[PedHash["ClayCutscene"] = 3687553076] = "ClayCutscene";
    PedHash[PedHash["CletusCutscene"] = 3404326357] = "CletusCutscene";
    PedHash[PedHash["CopCutscene"] = 2595446627] = "CopCutscene";
    PedHash[PedHash["CrisFormageCutscene"] = 3253960934] = "CrisFormageCutscene";
    PedHash[PedHash["CustomerCutscene"] = 2756669323] = "CustomerCutscene";
    PedHash[PedHash["DaleCutscene"] = 216536661] = "DaleCutscene";
    PedHash[PedHash["DaveNortonCutscene"] = 2240226444] = "DaveNortonCutscene";
    PedHash[PedHash["DebraCutscene"] = 3973074921] = "DebraCutscene";
    PedHash[PedHash["DeniseCutscene"] = 1870669624] = "DeniseCutscene";
    PedHash[PedHash["DeniseFriendCutscene"] = 3045926185] = "DeniseFriendCutscene";
    PedHash[PedHash["DevinCutscene"] = 788622594] = "DevinCutscene";
    PedHash[PedHash["DomCutscene"] = 1198698306] = "DomCutscene";
    PedHash[PedHash["DreyfussCutscene"] = 1012965715] = "DreyfussCutscene";
    PedHash[PedHash["DrFriedlanderCutscene"] = 2745392175] = "DrFriedlanderCutscene";
    PedHash[PedHash["FabienCutscene"] = 1191403201] = "FabienCutscene";
    PedHash[PedHash["FbiSuit01Cutscene"] = 1482427218] = "FbiSuit01Cutscene";
    PedHash[PedHash["FloydCutscene"] = 103106535] = "FloydCutscene";
    PedHash[PedHash["FosRepCutscene"] = 466359675] = "FosRepCutscene";
    PedHash[PedHash["GCutscene"] = 2727244247] = "GCutscene";
    PedHash[PedHash["GroomCutscene"] = 2058033618] = "GroomCutscene";
    PedHash[PedHash["GroveStrDlrCutscene"] = 3898166818] = "GroveStrDlrCutscene";
    PedHash[PedHash["GuadalopeCutscene"] = 261428209] = "GuadalopeCutscene";
    PedHash[PedHash["GurkCutscene"] = 3272931111] = "GurkCutscene";
    PedHash[PedHash["HaoCutscene"] = 3969814300] = "HaoCutscene";
    PedHash[PedHash["HughCutscene"] = 1863555924] = "HughCutscene";
    PedHash[PedHash["HunterCutscene"] = 1531218220] = "HunterCutscene";
    PedHash[PedHash["ImranCutscene"] = 3812756443] = "ImranCutscene";
    PedHash[PedHash["JackHowitzerCutscene"] = 1153203121] = "JackHowitzerCutscene";
    PedHash[PedHash["JanetCutscene"] = 808778210] = "JanetCutscene";
    PedHash[PedHash["JanitorCutscene"] = 3254803008] = "JanitorCutscene";
    PedHash[PedHash["JewelassCutscene"] = 1145088004] = "JewelassCutscene";
    PedHash[PedHash["JimmyBostonCutscene"] = 60192701] = "JimmyBostonCutscene";
    PedHash[PedHash["JimmyDisantoCutscene"] = 3100414644] = "JimmyDisantoCutscene";
    PedHash[PedHash["JoeMinutemanCutscene"] = 4036845097] = "JoeMinutemanCutscene";
    PedHash[PedHash["JohnnyKlebitzCutscene"] = 4203395201] = "JohnnyKlebitzCutscene";
    PedHash[PedHash["JosefCutscene"] = 1167549130] = "JosefCutscene";
    PedHash[PedHash["JoshCutscene"] = 1158606749] = "JoshCutscene";
    PedHash[PedHash["KarenDanielsCutscene"] = 1269774364] = "KarenDanielsCutscene";
    PedHash[PedHash["LamarDavisCutscene"] = 1162230285] = "LamarDavisCutscene";
    PedHash[PedHash["LazlowCutscene"] = 949295643] = "LazlowCutscene";
    PedHash[PedHash["LesterCrestCutscene"] = 3046438339] = "LesterCrestCutscene";
    PedHash[PedHash["Lifeinvad01Cutscene"] = 1918178165] = "Lifeinvad01Cutscene";
    PedHash[PedHash["MagentaCutscene"] = 1477887514] = "MagentaCutscene";
    PedHash[PedHash["ManuelCutscene"] = 4222842058] = "ManuelCutscene";
    PedHash[PedHash["MarnieCutscene"] = 1464721716] = "MarnieCutscene";
    PedHash[PedHash["MartinMadrazoCutscene"] = 1129928304] = "MartinMadrazoCutscene";
    PedHash[PedHash["MaryannCutscene"] = 161007533] = "MaryannCutscene";
    PedHash[PedHash["MaudeCutscene"] = 3166991819] = "MaudeCutscene";
    PedHash[PedHash["MerryWeatherCutscene"] = 1631478380] = "MerryWeatherCutscene";
    PedHash[PedHash["MichelleCutscene"] = 1890499016] = "MichelleCutscene";
    PedHash[PedHash["MiltonCutscene"] = 3077190415] = "MiltonCutscene";
    PedHash[PedHash["MollyCutscene"] = 1167167044] = "MollyCutscene";
    PedHash[PedHash["MoviePremFemaleCutscene"] = 1270514905] = "MoviePremFemaleCutscene";
    PedHash[PedHash["MoviePremMaleCutscene"] = 2372398717] = "MoviePremMaleCutscene";
    PedHash[PedHash["MrKCutscene"] = 3284966005] = "MrKCutscene";
    PedHash[PedHash["MrsPhillipsCutscene"] = 3422397391] = "MrsPhillipsCutscene";
    PedHash[PedHash["MrsThornhillCutscene"] = 1334976110] = "MrsThornhillCutscene";
    PedHash[PedHash["NataliaCutscene"] = 1325314544] = "NataliaCutscene";
    PedHash[PedHash["NervousRonCutscene"] = 2023152276] = "NervousRonCutscene";
    PedHash[PedHash["NigelCutscene"] = 3779566603] = "NigelCutscene";
    PedHash[PedHash["OldMan1aCutscene"] = 518814684] = "OldMan1aCutscene";
    PedHash[PedHash["OldMan2Cutscene"] = 2566514544] = "OldMan2Cutscene";
    PedHash[PedHash["OmegaCutscene"] = 2339419141] = "OmegaCutscene";
    PedHash[PedHash["OrleansCutscene"] = 2905870170] = "OrleansCutscene";
    PedHash[PedHash["OrtegaCutscene"] = 3235579087] = "OrtegaCutscene";
    PedHash[PedHash["OscarCutscene"] = 4095687067] = "OscarCutscene";
    PedHash[PedHash["PaigeCutscene"] = 1528799427] = "PaigeCutscene";
    PedHash[PedHash["PaperCutscene"] = 1798879480] = "PaperCutscene";
    PedHash[PedHash["PopovCutscene"] = 1635617250] = "PopovCutscene";
    PedHash[PedHash["PatriciaCutscene"] = 3750433537] = "PatriciaCutscene";
    PedHash[PedHash["PornDudesCutscene"] = 793443893] = "PornDudesCutscene";
    PedHash[PedHash["PriestCutscene"] = 1299047806] = "PriestCutscene";
    PedHash[PedHash["PrologueDriverCutscene"] = 4027271643] = "PrologueDriverCutscene";
    PedHash[PedHash["PrologueSec01Cutscene"] = 2141384740] = "PrologueSec01Cutscene";
    PedHash[PedHash["PrologueSec02Cutscene"] = 512955554] = "PrologueSec02Cutscene";
    PedHash[PedHash["RampGangCutscene"] = 3263172030] = "RampGangCutscene";
    PedHash[PedHash["RampHicCutscene"] = 2240582840] = "RampHicCutscene";
    PedHash[PedHash["RampHipsterCutscene"] = 569740212] = "RampHipsterCutscene";
    PedHash[PedHash["RampMarineCutscene"] = 1634506681] = "RampMarineCutscene";
    PedHash[PedHash["RampMexCutscene"] = 4132362192] = "RampMexCutscene";
    PedHash[PedHash["RashkovskyCutscene"] = 411081129] = "RashkovskyCutscene";
    PedHash[PedHash["ReporterCutscene"] = 776079908] = "ReporterCutscene";
    PedHash[PedHash["RoccoPelosiCutscene"] = 2858686092] = "RoccoPelosiCutscene";
    PedHash[PedHash["RussianDrunkCutscene"] = 1179785778] = "RussianDrunkCutscene";
    PedHash[PedHash["ScreenWriterCutscene"] = 2346790124] = "ScreenWriterCutscene";
    PedHash[PedHash["SiemonYetarianCutscene"] = 3230888450] = "SiemonYetarianCutscene";
    PedHash[PedHash["SolomonCutscene"] = 4140949582] = "SolomonCutscene";
    PedHash[PedHash["SteveHainsCutscene"] = 2766184958] = "SteveHainsCutscene";
    PedHash[PedHash["StretchCutscene"] = 2302502917] = "StretchCutscene";
    PedHash[PedHash["Stripper01Cutscene"] = 2934601397] = "Stripper01Cutscene";
    PedHash[PedHash["Stripper02Cutscene"] = 2168724337] = "Stripper02Cutscene";
    PedHash[PedHash["TanishaCutscene"] = 1123963760] = "TanishaCutscene";
    PedHash[PedHash["TaoChengCutscene"] = 2288257085] = "TaoChengCutscene";
    PedHash[PedHash["TaosTranslatorCutscene"] = 1397974313] = "TaosTranslatorCutscene";
    PedHash[PedHash["TennisCoachCutscene"] = 1545995274] = "TennisCoachCutscene";
    PedHash[PedHash["TerryCutscene"] = 978452933] = "TerryCutscene";
    PedHash[PedHash["TomCutscene"] = 1776856003] = "TomCutscene";
    PedHash[PedHash["TomEpsilonCutscene"] = 2349847778] = "TomEpsilonCutscene";
    PedHash[PedHash["TonyaCutscene"] = 1665391897] = "TonyaCutscene";
    PedHash[PedHash["TracyDisantoCutscene"] = 101298480] = "TracyDisantoCutscene";
    PedHash[PedHash["TrafficWardenCutscene"] = 3727243251] = "TrafficWardenCutscene";
    PedHash[PedHash["UndercoverCopCutscene"] = 4017642090] = "UndercoverCopCutscene";
    PedHash[PedHash["VagosSpeakCutscene"] = 1224690857] = "VagosSpeakCutscene";
    PedHash[PedHash["WadeCutscene"] = 3529955798] = "WadeCutscene";
    PedHash[PedHash["WeiChengCutscene"] = 819699067] = "WeiChengCutscene";
    PedHash[PedHash["ZimborCutscene"] = 3937184496] = "ZimborCutscene";
    PedHash[PedHash["Boar"] = 3462393972] = "Boar";
    PedHash[PedHash["Cat"] = 1462895032] = "Cat";
    PedHash[PedHash["ChickenHawk"] = 2864127842] = "ChickenHawk";
    PedHash[PedHash["Chimp"] = 2825402133] = "Chimp";
    PedHash[PedHash["Chop"] = 351016938] = "Chop";
    PedHash[PedHash["Cormorant"] = 1457690978] = "Cormorant";
    PedHash[PedHash["Cow"] = 4244282910] = "Cow";
    PedHash[PedHash["Coyote"] = 1682622302] = "Coyote";
    PedHash[PedHash["Crow"] = 402729631] = "Crow";
    PedHash[PedHash["Deer"] = 3630914197] = "Deer";
    PedHash[PedHash["Dolphin"] = 2344268885] = "Dolphin";
    PedHash[PedHash["Fish"] = 802685111] = "Fish";
    PedHash[PedHash["Hen"] = 1794449327] = "Hen";
    PedHash[PedHash["HammerShark"] = 1015224100] = "HammerShark";
    PedHash[PedHash["Humpback"] = 1193010354] = "Humpback";
    PedHash[PedHash["Husky"] = 1318032802] = "Husky";
    PedHash[PedHash["KillerWhale"] = 2374682809] = "KillerWhale";
    PedHash[PedHash["MountainLion"] = 307287994] = "MountainLion";
    PedHash[PedHash["Pig"] = 2971380566] = "Pig";
    PedHash[PedHash["Pigeon"] = 111281960] = "Pigeon";
    PedHash[PedHash["Poodle"] = 1125994524] = "Poodle";
    PedHash[PedHash["Pug"] = 1832265812] = "Pug";
    PedHash[PedHash["Rabbit"] = 3753204865] = "Rabbit";
    PedHash[PedHash["Rat"] = 3283429734] = "Rat";
    PedHash[PedHash["Retriever"] = 882848737] = "Retriever";
    PedHash[PedHash["Rhesus"] = 3268439891] = "Rhesus";
    PedHash[PedHash["Rottweiler"] = 2506301981] = "Rottweiler";
    PedHash[PedHash["Seagull"] = 3549666813] = "Seagull";
    PedHash[PedHash["Shepherd"] = 1126154828] = "Shepherd";
    PedHash[PedHash["Stingray"] = 2705875277] = "Stingray";
    PedHash[PedHash["TigerShark"] = 113504370] = "TigerShark";
    PedHash[PedHash["Westy"] = 2910340283] = "Westy";
    PedHash[PedHash["Abner"] = 4037813798] = "Abner";
    PedHash[PedHash["AlDiNapoli"] = 4042020578] = "AlDiNapoli";
    PedHash[PedHash["Antonb"] = 3479321132] = "Antonb";
    PedHash[PedHash["Armoured01"] = 3455013896] = "Armoured01";
    PedHash[PedHash["Babyd"] = 3658575486] = "Babyd";
    PedHash[PedHash["Bankman01"] = 3272005365] = "Bankman01";
    PedHash[PedHash["Baygor"] = 1380197501] = "Baygor";
    PedHash[PedHash["Benny"] = 3300333010] = "Benny";
    PedHash[PedHash["BikeHire01"] = 1984382277] = "BikeHire01";
    PedHash[PedHash["BikerChic"] = 4198014287] = "BikerChic";
    PedHash[PedHash["BoatStaff01M"] = 3361671816] = "BoatStaff01M";
    PedHash[PedHash["BoatStaff01F"] = 848542878] = "BoatStaff01F";
    PedHash[PedHash["BurgerDrug"] = 2340239206] = "BurgerDrug";
    PedHash[PedHash["Chip"] = 610290475] = "Chip";
    PedHash[PedHash["Claude01"] = 3237179831] = "Claude01";
    PedHash[PedHash["ClubHouseBar01"] = 1914945105] = "ClubHouseBar01";
    PedHash[PedHash["CocaineFemale01"] = 1897303236] = "CocaineFemale01";
    PedHash[PedHash["CocaineMale01"] = 3455927962] = "CocaineMale01";
    PedHash[PedHash["ComJane"] = 3064628686] = "ComJane";
    PedHash[PedHash["Corpse01"] = 773063444] = "Corpse01";
    PedHash[PedHash["Corpse02"] = 228356856] = "Corpse02";
    PedHash[PedHash["CounterfeitFemale01"] = 1074385436] = "CounterfeitFemale01";
    PedHash[PedHash["CounterfeitMale01"] = 2625926338] = "CounterfeitMale01";
    PedHash[PedHash["Cyclist01"] = 755956971] = "Cyclist01";
    PedHash[PedHash["DeadHooker"] = 1943971979] = "DeadHooker";
    PedHash[PedHash["Drowned"] = 1943971979] = "Drowned";
    PedHash[PedHash["ExArmy01"] = 1161072059] = "ExArmy01";
    PedHash[PedHash["ExecutivePAMale01"] = 983887149] = "ExecutivePAMale01";
    PedHash[PedHash["ExecutivePAFemale01"] = 2913175640] = "ExecutivePAFemale01";
    PedHash[PedHash["Famdd01"] = 866411749] = "Famdd01";
    PedHash[PedHash["FibArchitect"] = 874722259] = "FibArchitect";
    PedHash[PedHash["FibMugger01"] = 2243544680] = "FibMugger01";
    PedHash[PedHash["FibSec01"] = 1558115333] = "FibSec01";
    PedHash[PedHash["FilmDirector"] = 728636342] = "FilmDirector";
    PedHash[PedHash["FilmNoir"] = 732742363] = "FilmNoir";
    PedHash[PedHash["Finguru01"] = 1189322339] = "Finguru01";
    PedHash[PedHash["ForgeryFemale01"] = 3691903615] = "ForgeryFemale01";
    PedHash[PedHash["ForgeryMale01"] = 325317957] = "ForgeryMale01";
    PedHash[PedHash["FreemodeFemale01"] = 2627665880] = "FreemodeFemale01";
    PedHash[PedHash["FreemodeMale01"] = 1885233650] = "FreemodeMale01";
    PedHash[PedHash["Glenstank01"] = 1169888870] = "Glenstank01";
    PedHash[PedHash["Griff01"] = 3293887675] = "Griff01";
    PedHash[PedHash["Guido01"] = 3333724719] = "Guido01";
    PedHash[PedHash["GunVend01"] = 3005388626] = "GunVend01";
    PedHash[PedHash["Hacker"] = 2579169528] = "Hacker";
    PedHash[PedHash["HeliStaff01"] = 431423238] = "HeliStaff01";
    PedHash[PedHash["Hippie01"] = 4030826507] = "Hippie01";
    PedHash[PedHash["Hotposh01"] = 2526768638] = "Hotposh01";
    PedHash[PedHash["Imporage"] = 880829941] = "Imporage";
    PedHash[PedHash["Jesus01"] = 3459037009] = "Jesus01";
    PedHash[PedHash["Jewelass01"] = 4040474158] = "Jewelass01";
    PedHash[PedHash["JewelSec01"] = 2899099062] = "JewelSec01";
    PedHash[PedHash["JewelThief"] = 3872144604] = "JewelThief";
    PedHash[PedHash["Justin"] = 2109968527] = "Justin";
    PedHash[PedHash["Mani"] = 3367706194] = "Mani";
    PedHash[PedHash["Markfost"] = 479578891] = "Markfost";
    PedHash[PedHash["Marston01"] = 943915367] = "Marston01";
    PedHash[PedHash["MethFemale01"] = 3778572496] = "MethFemale01";
    PedHash[PedHash["MethMale01"] = 1293671805] = "MethMale01";
    PedHash[PedHash["MilitaryBum"] = 1191548746] = "MilitaryBum";
    PedHash[PedHash["Miranda"] = 1095737979] = "Miranda";
    PedHash[PedHash["Mistress"] = 1573528872] = "Mistress";
    PedHash[PedHash["Misty01"] = 3509125021] = "Misty01";
    PedHash[PedHash["MovieStar"] = 894928436] = "MovieStar";
    PedHash[PedHash["MPros01"] = 1822283721] = "MPros01";
    PedHash[PedHash["Niko01"] = 4007317449] = "Niko01";
    PedHash[PedHash["Paparazzi"] = 1346941736] = "Paparazzi";
    PedHash[PedHash["Party01"] = 921110016] = "Party01";
    PedHash[PedHash["PartyTarget"] = 2180468199] = "PartyTarget";
    PedHash[PedHash["PestContDriver"] = 994527967] = "PestContDriver";
    PedHash[PedHash["PestContGunman"] = 193469166] = "PestContGunman";
    PedHash[PedHash["Pogo01"] = 3696858125] = "Pogo01";
    PedHash[PedHash["Poppymich"] = 602513566] = "Poppymich";
    PedHash[PedHash["Princess"] = 3538133636] = "Princess";
    PedHash[PedHash["Prisoner01"] = 2073775040] = "Prisoner01";
    PedHash[PedHash["PrologueHostage01"] = 3306347811] = "PrologueHostage01";
    PedHash[PedHash["PrologueMournFemale01"] = 2718472679] = "PrologueMournFemale01";
    PedHash[PedHash["PrologueMournMale01"] = 3465937675] = "PrologueMournMale01";
    PedHash[PedHash["RivalPaparazzi"] = 1624626906] = "RivalPaparazzi";
    PedHash[PedHash["ShopKeep01"] = 416176080] = "ShopKeep01";
    PedHash[PedHash["SpyActor"] = 2886641112] = "SpyActor";
    PedHash[PedHash["SpyActress"] = 1535236204] = "SpyActress";
    PedHash[PedHash["StripperLite"] = 695248020] = "StripperLite";
    PedHash[PedHash["Taphillbilly"] = 2585681490] = "Taphillbilly";
    PedHash[PedHash["Tramp01"] = 1787764635] = "Tramp01";
    PedHash[PedHash["VagosFun01"] = 3299219389] = "VagosFun01";
    PedHash[PedHash["WillyFist"] = 2423691919] = "WillyFist";
    PedHash[PedHash["WeedFemale01"] = 1596374223] = "WeedFemale01";
    PedHash[PedHash["WeedMale01"] = 2648833641] = "WeedMale01";
    PedHash[PedHash["Zombie01"] = 2890614022] = "Zombie01";
    PedHash[PedHash["Acult01AMM"] = 1413662315] = "Acult01AMM";
    PedHash[PedHash["Acult01AMO"] = 1430544400] = "Acult01AMO";
    PedHash[PedHash["Acult01AMY"] = 3043264555] = "Acult01AMY";
    PedHash[PedHash["Acult02AMO"] = 1268862154] = "Acult02AMO";
    PedHash[PedHash["Acult02AMY"] = 2162532142] = "Acult02AMY";
    PedHash[PedHash["AfriAmer01AMM"] = 3513928062] = "AfriAmer01AMM";
    PedHash[PedHash["Airhostess01SFY"] = 1567728751] = "Airhostess01SFY";
    PedHash[PedHash["AirworkerSMY"] = 1644266841] = "AirworkerSMY";
    PedHash[PedHash["Ammucity01SMY"] = 2651349821] = "Ammucity01SMY";
    PedHash[PedHash["AmmuCountrySMM"] = 233415434] = "AmmuCountrySMM";
    PedHash[PedHash["ArmBoss01GMM"] = 4058522530] = "ArmBoss01GMM";
    PedHash[PedHash["ArmGoon01GMM"] = 4255728232] = "ArmGoon01GMM";
    PedHash[PedHash["ArmGoon02GMY"] = 3310258058] = "ArmGoon02GMY";
    PedHash[PedHash["ArmLieut01GMM"] = 3882958867] = "ArmLieut01GMM";
    PedHash[PedHash["Armoured01SMM"] = 2512875213] = "Armoured01SMM";
    PedHash[PedHash["Armoured02SMM"] = 1669696074] = "Armoured02SMM";
    PedHash[PedHash["Armymech01SMY"] = 1657546978] = "Armymech01SMY";
    PedHash[PedHash["Autopsy01SMY"] = 2988916046] = "Autopsy01SMY";
    PedHash[PedHash["Autoshop01SMM"] = 68070371] = "Autoshop01SMM";
    PedHash[PedHash["Autoshop02SMM"] = 4033578141] = "Autoshop02SMM";
    PedHash[PedHash["Azteca01GMY"] = 1752208920] = "Azteca01GMY";
    PedHash[PedHash["BallaEast01GMY"] = 4096714883] = "BallaEast01GMY";
    PedHash[PedHash["BallaOrig01GMY"] = 588969535] = "BallaOrig01GMY";
    PedHash[PedHash["Ballas01GFY"] = 361513884] = "Ballas01GFY";
    PedHash[PedHash["BallaSout01GMY"] = 599294057] = "BallaSout01GMY";
    PedHash[PedHash["Barman01SMY"] = 3852538118] = "Barman01SMY";
    PedHash[PedHash["Bartender01SFY"] = 2014052797] = "Bartender01SFY";
    PedHash[PedHash["Baywatch01SFY"] = 1250841910] = "Baywatch01SFY";
    PedHash[PedHash["Baywatch01SMY"] = 189425762] = "Baywatch01SMY";
    PedHash[PedHash["Beach01AFM"] = 808859815] = "Beach01AFM";
    PedHash[PedHash["Beach01AFY"] = 3349113128] = "Beach01AFY";
    PedHash[PedHash["Beach01AMM"] = 1077785853] = "Beach01AMM";
    PedHash[PedHash["Beach01AMO"] = 2217202584] = "Beach01AMO";
    PedHash[PedHash["Beach01AMY"] = 3523131524] = "Beach01AMY";
    PedHash[PedHash["Beach02AMM"] = 2021631368] = "Beach02AMM";
    PedHash[PedHash["Beach02AMY"] = 600300561] = "Beach02AMY";
    PedHash[PedHash["Beach03AMY"] = 3886638041] = "Beach03AMY";
    PedHash[PedHash["Beachvesp01AMY"] = 2114544056] = "Beachvesp01AMY";
    PedHash[PedHash["Beachvesp02AMY"] = 3394697810] = "Beachvesp02AMY";
    PedHash[PedHash["Bevhills01AFM"] = 3188223741] = "Bevhills01AFM";
    PedHash[PedHash["Bevhills01AFY"] = 1146800212] = "Bevhills01AFY";
    PedHash[PedHash["Bevhills01AMM"] = 1423699487] = "Bevhills01AMM";
    PedHash[PedHash["Bevhills01AMY"] = 1982350912] = "Bevhills01AMY";
    PedHash[PedHash["Bevhills02AFM"] = 2688103263] = "Bevhills02AFM";
    PedHash[PedHash["Bevhills02AFY"] = 1546450936] = "Bevhills02AFY";
    PedHash[PedHash["Bevhills02AMM"] = 1068876755] = "Bevhills02AMM";
    PedHash[PedHash["Bevhills02AMY"] = 1720428295] = "Bevhills02AMY";
    PedHash[PedHash["Bevhills03AFY"] = 549978415] = "Bevhills03AFY";
    PedHash[PedHash["Bevhills04AFY"] = 920595805] = "Bevhills04AFY";
    PedHash[PedHash["Blackops01SMY"] = 3019107892] = "Blackops01SMY";
    PedHash[PedHash["Blackops02SMY"] = 2047212121] = "Blackops02SMY";
    PedHash[PedHash["Blackops03SMY"] = 1349953339] = "Blackops03SMY";
    PedHash[PedHash["Bodybuild01AFM"] = 1004114196] = "Bodybuild01AFM";
    PedHash[PedHash["Bouncer01SMM"] = 2681481517] = "Bouncer01SMM";
    PedHash[PedHash["Breakdance01AMY"] = 933205398] = "Breakdance01AMY";
    PedHash[PedHash["Busboy01SMY"] = 3640249671] = "Busboy01SMY";
    PedHash[PedHash["Busicas01AMY"] = 2597531625] = "Busicas01AMY";
    PedHash[PedHash["Business01AFY"] = 664399832] = "Business01AFY";
    PedHash[PedHash["Business01AMM"] = 2120901815] = "Business01AMM";
    PedHash[PedHash["Business01AMY"] = 3382649284] = "Business01AMY";
    PedHash[PedHash["Business02AFM"] = 532905404] = "Business02AFM";
    PedHash[PedHash["Business02AFY"] = 826475330] = "Business02AFY";
    PedHash[PedHash["Business02AMY"] = 3014915558] = "Business02AMY";
    PedHash[PedHash["Business03AFY"] = 2928082356] = "Business03AFY";
    PedHash[PedHash["Business03AMY"] = 2705543429] = "Business03AMY";
    PedHash[PedHash["Business04AFY"] = 3083210802] = "Business04AFY";
    PedHash[PedHash["Busker01SMO"] = 2912874939] = "Busker01SMO";
    PedHash[PedHash["CCrew01SMM"] = 3387290987] = "CCrew01SMM";
    PedHash[PedHash["Chef01SMY"] = 261586155] = "Chef01SMY";
    PedHash[PedHash["ChemSec01SMM"] = 788443093] = "ChemSec01SMM";
    PedHash[PedHash["ChemWork01GMM"] = 4128603535] = "ChemWork01GMM";
    PedHash[PedHash["ChiBoss01GMM"] = 3118269184] = "ChiBoss01GMM";
    PedHash[PedHash["ChiCold01GMM"] = 275618457] = "ChiCold01GMM";
    PedHash[PedHash["ChiGoon01GMM"] = 2119136831] = "ChiGoon01GMM";
    PedHash[PedHash["ChiGoon02GMM"] = 4285659174] = "ChiGoon02GMM";
    PedHash[PedHash["CiaSec01SMM"] = 1650288984] = "CiaSec01SMM";
    PedHash[PedHash["Clown01SMY"] = 71929310] = "Clown01SMY";
    PedHash[PedHash["Cntrybar01SMM"] = 436345731] = "Cntrybar01SMM";
    PedHash[PedHash["Construct01SMY"] = 3621428889] = "Construct01SMY";
    PedHash[PedHash["Construct02SMY"] = 3321821918] = "Construct02SMY";
    PedHash[PedHash["Cop01SFY"] = 368603149] = "Cop01SFY";
    PedHash[PedHash["Cop01SMY"] = 1581098148] = "Cop01SMY";
    PedHash[PedHash["Cyclist01AMY"] = 4257633223] = "Cyclist01AMY";
    PedHash[PedHash["Dealer01SMY"] = 3835149295] = "Dealer01SMY";
    PedHash[PedHash["Devinsec01SMY"] = 2606068340] = "Devinsec01SMY";
    PedHash[PedHash["Dhill01AMY"] = 4282288299] = "Dhill01AMY";
    PedHash[PedHash["Dockwork01SMM"] = 349680864] = "Dockwork01SMM";
    PedHash[PedHash["Dockwork01SMY"] = 2255894993] = "Dockwork01SMY";
    PedHash[PedHash["Doctor01SMM"] = 3564307372] = "Doctor01SMM";
    PedHash[PedHash["Doorman01SMY"] = 579932932] = "Doorman01SMY";
    PedHash[PedHash["Downtown01AFM"] = 1699403886] = "Downtown01AFM";
    PedHash[PedHash["Downtown01AMY"] = 766375082] = "Downtown01AMY";
    PedHash[PedHash["DwService01SMY"] = 1976765073] = "DwService01SMY";
    PedHash[PedHash["DwService02SMY"] = 4119890438] = "DwService02SMY";
    PedHash[PedHash["Eastsa01AFM"] = 2638072698] = "Eastsa01AFM";
    PedHash[PedHash["Eastsa01AFY"] = 4121954205] = "Eastsa01AFY";
    PedHash[PedHash["Eastsa01AMM"] = 4188468543] = "Eastsa01AMM";
    PedHash[PedHash["Eastsa01AMY"] = 2756120947] = "Eastsa01AMY";
    PedHash[PedHash["Eastsa02AFM"] = 1674107025] = "Eastsa02AFM";
    PedHash[PedHash["Eastsa02AFY"] = 70821038] = "Eastsa02AFY";
    PedHash[PedHash["Eastsa02AMM"] = 131961260] = "Eastsa02AMM";
    PedHash[PedHash["Eastsa02AMY"] = 377976310] = "Eastsa02AMY";
    PedHash[PedHash["Eastsa03AFY"] = 1371553700] = "Eastsa03AFY";
    PedHash[PedHash["Epsilon01AFY"] = 1755064960] = "Epsilon01AFY";
    PedHash[PedHash["Epsilon01AMY"] = 2010389054] = "Epsilon01AMY";
    PedHash[PedHash["Epsilon02AMY"] = 2860711835] = "Epsilon02AMY";
    PedHash[PedHash["Factory01SFY"] = 1777626099] = "Factory01SFY";
    PedHash[PedHash["Factory01SMY"] = 1097048408] = "Factory01SMY";
    PedHash[PedHash["Famca01GMY"] = 3896218551] = "Famca01GMY";
    PedHash[PedHash["Famdnf01GMY"] = 3681718840] = "Famdnf01GMY";
    PedHash[PedHash["Famfor01GMY"] = 2217749257] = "Famfor01GMY";
    PedHash[PedHash["Families01GFY"] = 1309468115] = "Families01GFY";
    PedHash[PedHash["Farmer01AMM"] = 2488675799] = "Farmer01AMM";
    PedHash[PedHash["FatBla01AFM"] = 4206136267] = "FatBla01AFM";
    PedHash[PedHash["FatCult01AFM"] = 3050275044] = "FatCult01AFM";
    PedHash[PedHash["Fatlatin01AMM"] = 1641152947] = "Fatlatin01AMM";
    PedHash[PedHash["FatWhite01AFM"] = 951767867] = "FatWhite01AFM";
    PedHash[PedHash["FemBarberSFM"] = 373000027] = "FemBarberSFM";
    PedHash[PedHash["FibOffice01SMM"] = 3988550982] = "FibOffice01SMM";
    PedHash[PedHash["FibOffice02SMM"] = 653289389] = "FibOffice02SMM";
    PedHash[PedHash["FibSec01SMM"] = 2072724299] = "FibSec01SMM";
    PedHash[PedHash["Fireman01SMY"] = 3065114024] = "Fireman01SMY";
    PedHash[PedHash["Fitness01AFY"] = 1165780219] = "Fitness01AFY";
    PedHash[PedHash["Fitness02AFY"] = 331645324] = "Fitness02AFY";
    PedHash[PedHash["Gaffer01SMM"] = 2841034142] = "Gaffer01SMM";
    PedHash[PedHash["GarbageSMY"] = 4000686095] = "GarbageSMY";
    PedHash[PedHash["Gardener01SMM"] = 1240094341] = "Gardener01SMM";
    PedHash[PedHash["Gay01AMY"] = 3519864886] = "Gay01AMY";
    PedHash[PedHash["Gay02AMY"] = 2775713665] = "Gay02AMY";
    PedHash[PedHash["Genfat01AMM"] = 115168927] = "Genfat01AMM";
    PedHash[PedHash["Genfat02AMM"] = 330231874] = "Genfat02AMM";
    PedHash[PedHash["Genhot01AFY"] = 793439294] = "Genhot01AFY";
    PedHash[PedHash["Genstreet01AFO"] = 1640504453] = "Genstreet01AFO";
    PedHash[PedHash["Genstreet01AMO"] = 2908022696] = "Genstreet01AMO";
    PedHash[PedHash["Genstreet01AMY"] = 2557996913] = "Genstreet01AMY";
    PedHash[PedHash["Genstreet02AMY"] = 891398354] = "Genstreet02AMY";
    PedHash[PedHash["GentransportSMM"] = 411102470] = "GentransportSMM";
    PedHash[PedHash["Golfer01AFY"] = 2111372120] = "Golfer01AFY";
    PedHash[PedHash["Golfer01AMM"] = 2850754114] = "Golfer01AMM";
    PedHash[PedHash["Golfer01AMY"] = 3609190705] = "Golfer01AMY";
    PedHash[PedHash["Grip01SMY"] = 815693290] = "Grip01SMY";
    PedHash[PedHash["Hairdress01SMM"] = 1099825042] = "Hairdress01SMM";
    PedHash[PedHash["Hasjew01AMM"] = 1809430156] = "Hasjew01AMM";
    PedHash[PedHash["Hasjew01AMY"] = 3782053633] = "Hasjew01AMY";
    PedHash[PedHash["Highsec01SMM"] = 4049719826] = "Highsec01SMM";
    PedHash[PedHash["Highsec02SMM"] = 691061163] = "Highsec02SMM";
    PedHash[PedHash["Hiker01AFY"] = 813893651] = "Hiker01AFY";
    PedHash[PedHash["Hiker01AMY"] = 1358380044] = "Hiker01AMY";
    PedHash[PedHash["Hillbilly01AMM"] = 1822107721] = "Hillbilly01AMM";
    PedHash[PedHash["Hillbilly02AMM"] = 2064532783] = "Hillbilly02AMM";
    PedHash[PedHash["Hippie01AFY"] = 343259175] = "Hippie01AFY";
    PedHash[PedHash["Hippy01AMY"] = 2097407511] = "Hippy01AMY";
    PedHash[PedHash["Hipster01AFY"] = 2185745201] = "Hipster01AFY";
    PedHash[PedHash["Hipster01AMY"] = 587703123] = "Hipster01AMY";
    PedHash[PedHash["Hipster02AFY"] = 2549481101] = "Hipster02AFY";
    PedHash[PedHash["Hipster02AMY"] = 349505262] = "Hipster02AMY";
    PedHash[PedHash["Hipster03AFY"] = 2780469782] = "Hipster03AFY";
    PedHash[PedHash["Hipster03AMY"] = 1312913862] = "Hipster03AMY";
    PedHash[PedHash["Hipster04AFY"] = 429425116] = "Hipster04AFY";
    PedHash[PedHash["Hooker01SFY"] = 42647445] = "Hooker01SFY";
    PedHash[PedHash["Hooker02SFY"] = 348382215] = "Hooker02SFY";
    PedHash[PedHash["Hooker03SFY"] = 51789996] = "Hooker03SFY";
    PedHash[PedHash["Hwaycop01SMY"] = 1939545845] = "Hwaycop01SMY";
    PedHash[PedHash["Indian01AFO"] = 3134700416] = "Indian01AFO";
    PedHash[PedHash["Indian01AFY"] = 153984193] = "Indian01AFY";
    PedHash[PedHash["Indian01AMM"] = 3721046572] = "Indian01AMM";
    PedHash[PedHash["Indian01AMY"] = 706935758] = "Indian01AMY";
    PedHash[PedHash["JanitorSMM"] = 2842417644] = "JanitorSMM";
    PedHash[PedHash["Jetski01AMY"] = 767028979] = "Jetski01AMY";
    PedHash[PedHash["Juggalo01AFY"] = 3675473203] = "Juggalo01AFY";
    PedHash[PedHash["Juggalo01AMY"] = 2445950508] = "Juggalo01AMY";
    PedHash[PedHash["KorBoss01GMM"] = 891945583] = "KorBoss01GMM";
    PedHash[PedHash["Korean01GMY"] = 611648169] = "Korean01GMY";
    PedHash[PedHash["Korean02GMY"] = 2414729609] = "Korean02GMY";
    PedHash[PedHash["KorLieut01GMY"] = 2093736314] = "KorLieut01GMY";
    PedHash[PedHash["Ktown01AFM"] = 1388848350] = "Ktown01AFM";
    PedHash[PedHash["Ktown01AFO"] = 1204772502] = "Ktown01AFO";
    PedHash[PedHash["Ktown01AMM"] = 3512565361] = "Ktown01AMM";
    PedHash[PedHash["Ktown01AMO"] = 355916122] = "Ktown01AMO";
    PedHash[PedHash["Ktown01AMY"] = 452351020] = "Ktown01AMY";
    PedHash[PedHash["Ktown02AFM"] = 1090617681] = "Ktown02AFM";
    PedHash[PedHash["Ktown02AMY"] = 696250687] = "Ktown02AMY";
    PedHash[PedHash["Lathandy01SMM"] = 2659242702] = "Lathandy01SMM";
    PedHash[PedHash["Latino01AMY"] = 321657486] = "Latino01AMY";
    PedHash[PedHash["Lifeinvad01SMM"] = 3724572669] = "Lifeinvad01SMM";
    PedHash[PedHash["LinecookSMM"] = 3684436375] = "LinecookSMM";
    PedHash[PedHash["Lost01GFY"] = 4250220510] = "Lost01GFY";
    PedHash[PedHash["Lost01GMY"] = 1330042375] = "Lost01GMY";
    PedHash[PedHash["Lost02GMY"] = 1032073858] = "Lost02GMY";
    PedHash[PedHash["Lost03GMY"] = 850468060] = "Lost03GMY";
    PedHash[PedHash["Lsmetro01SMM"] = 1985653476] = "Lsmetro01SMM";
    PedHash[PedHash["Maid01SFM"] = 3767780806] = "Maid01SFM";
    PedHash[PedHash["Malibu01AMM"] = 803106487] = "Malibu01AMM";
    PedHash[PedHash["Mariachi01SMM"] = 2124742566] = "Mariachi01SMM";
    PedHash[PedHash["Marine01SMM"] = 4074414829] = "Marine01SMM";
    PedHash[PedHash["Marine01SMY"] = 1702441027] = "Marine01SMY";
    PedHash[PedHash["Marine02SMM"] = 4028996995] = "Marine02SMM";
    PedHash[PedHash["Marine02SMY"] = 1490458366] = "Marine02SMY";
    PedHash[PedHash["Marine03SMY"] = 1925237458] = "Marine03SMY";
    PedHash[PedHash["Methhead01AMY"] = 1768677545] = "Methhead01AMY";
    PedHash[PedHash["MexBoss01GMM"] = 1466037421] = "MexBoss01GMM";
    PedHash[PedHash["MexBoss02GMM"] = 1226102803] = "MexBoss02GMM";
    PedHash[PedHash["MexCntry01AMM"] = 3716251309] = "MexCntry01AMM";
    PedHash[PedHash["MexGang01GMY"] = 3185399110] = "MexGang01GMY";
    PedHash[PedHash["MexGoon01GMY"] = 653210662] = "MexGoon01GMY";
    PedHash[PedHash["MexGoon02GMY"] = 832784782] = "MexGoon02GMY";
    PedHash[PedHash["MexGoon03GMY"] = 2521633500] = "MexGoon03GMY";
    PedHash[PedHash["MexLabor01AMM"] = 2992445106] = "MexLabor01AMM";
    PedHash[PedHash["MexThug01AMY"] = 810804565] = "MexThug01AMY";
    PedHash[PedHash["Migrant01SFY"] = 3579522037] = "Migrant01SFY";
    PedHash[PedHash["Migrant01SMM"] = 3977045190] = "Migrant01SMM";
    PedHash[PedHash["MimeSMY"] = 1021093698] = "MimeSMY";
    PedHash[PedHash["Motox01AMY"] = 1694362237] = "Motox01AMY";
    PedHash[PedHash["Motox02AMY"] = 2007797722] = "Motox02AMY";
    PedHash[PedHash["MovAlien01"] = 1684083350] = "MovAlien01";
    PedHash[PedHash["MovPrem01SFY"] = 587253782] = "MovPrem01SFY";
    PedHash[PedHash["Movprem01SMM"] = 3630066984] = "Movprem01SMM";
    PedHash[PedHash["Movspace01SMM"] = 3887273010] = "Movspace01SMM";
    PedHash[PedHash["Musclbeac01AMY"] = 1264920838] = "Musclbeac01AMY";
    PedHash[PedHash["Musclbeac02AMY"] = 3374523516] = "Musclbeac02AMY";
    PedHash[PedHash["OgBoss01AMM"] = 1746653202] = "OgBoss01AMM";
    PedHash[PedHash["Paparazzi01AMM"] = 3972697109] = "Paparazzi01AMM";
    PedHash[PedHash["Paramedic01SMM"] = 3008586398] = "Paramedic01SMM";
    PedHash[PedHash["PestCont01SMY"] = 1209091352] = "PestCont01SMY";
    PedHash[PedHash["Pilot01SMM"] = 3881519900] = "Pilot01SMM";
    PedHash[PedHash["Pilot01SMY"] = 2872052743] = "Pilot01SMY";
    PedHash[PedHash["Pilot02SMM"] = 4131252449] = "Pilot02SMM";
    PedHash[PedHash["PoloGoon01GMY"] = 1329576454] = "PoloGoon01GMY";
    PedHash[PedHash["PoloGoon02GMY"] = 2733138262] = "PoloGoon02GMY";
    PedHash[PedHash["Polynesian01AMM"] = 2849617566] = "Polynesian01AMM";
    PedHash[PedHash["Polynesian01AMY"] = 2206530719] = "Polynesian01AMY";
    PedHash[PedHash["Postal01SMM"] = 1650036788] = "Postal01SMM";
    PedHash[PedHash["Postal02SMM"] = 1936142927] = "Postal02SMM";
    PedHash[PedHash["Prisguard01SMM"] = 1456041926] = "Prisguard01SMM";
    PedHash[PedHash["PrisMuscl01SMY"] = 1596003233] = "PrisMuscl01SMY";
    PedHash[PedHash["Prisoner01SMY"] = 2981862233] = "Prisoner01SMY";
    PedHash[PedHash["PrologueHostage01AFM"] = 379310561] = "PrologueHostage01AFM";
    PedHash[PedHash["PrologueHostage01AMM"] = 2534589327] = "PrologueHostage01AMM";
    PedHash[PedHash["Ranger01SFY"] = 2680682039] = "Ranger01SFY";
    PedHash[PedHash["Ranger01SMY"] = 4017173934] = "Ranger01SMY";
    PedHash[PedHash["Roadcyc01AMY"] = 4116817094] = "Roadcyc01AMY";
    PedHash[PedHash["Robber01SMY"] = 3227390873] = "Robber01SMY";
    PedHash[PedHash["RsRanger01AMO"] = 1011059922] = "RsRanger01AMO";
    PedHash[PedHash["Runner01AFY"] = 3343476521] = "Runner01AFY";
    PedHash[PedHash["Runner01AMY"] = 623927022] = "Runner01AMY";
    PedHash[PedHash["Runner02AMY"] = 2218630415] = "Runner02AMY";
    PedHash[PedHash["Rurmeth01AFY"] = 1064866854] = "Rurmeth01AFY";
    PedHash[PedHash["Rurmeth01AMM"] = 1001210244] = "Rurmeth01AMM";
    PedHash[PedHash["Salton01AFM"] = 3725461865] = "Salton01AFM";
    PedHash[PedHash["Salton01AFO"] = 3439295882] = "Salton01AFO";
    PedHash[PedHash["Salton01AMM"] = 1328415626] = "Salton01AMM";
    PedHash[PedHash["Salton01AMO"] = 539004493] = "Salton01AMO";
    PedHash[PedHash["Salton01AMY"] = 3613420592] = "Salton01AMY";
    PedHash[PedHash["Salton02AMM"] = 1626646295] = "Salton02AMM";
    PedHash[PedHash["Salton03AMM"] = 2995538501] = "Salton03AMM";
    PedHash[PedHash["Salton04AMM"] = 2521108919] = "Salton04AMM";
    PedHash[PedHash["SalvaBoss01GMY"] = 2422005962] = "SalvaBoss01GMY";
    PedHash[PedHash["SalvaGoon01GMY"] = 663522487] = "SalvaGoon01GMY";
    PedHash[PedHash["SalvaGoon02GMY"] = 846439045] = "SalvaGoon02GMY";
    PedHash[PedHash["SalvaGoon03GMY"] = 62440720] = "SalvaGoon03GMY";
    PedHash[PedHash["SbikeAMO"] = 1794381917] = "SbikeAMO";
    PedHash[PedHash["Scdressy01AFY"] = 3680420864] = "Scdressy01AFY";
    PedHash[PedHash["Scientist01SMM"] = 1092080539] = "Scientist01SMM";
    PedHash[PedHash["Scrubs01SFY"] = 2874755766] = "Scrubs01SFY";
    PedHash[PedHash["Security01SMM"] = 3613962792] = "Security01SMM";
    PedHash[PedHash["Sheriff01SFY"] = 1096929346] = "Sheriff01SFY";
    PedHash[PedHash["Sheriff01SMY"] = 2974087609] = "Sheriff01SMY";
    PedHash[PedHash["ShopHighSFM"] = 2923947184] = "ShopHighSFM";
    PedHash[PedHash["ShopLowSFY"] = 2842568196] = "ShopLowSFY";
    PedHash[PedHash["ShopMaskSMY"] = 1846684678] = "ShopMaskSMY";
    PedHash[PedHash["ShopMidSFY"] = 1055701597] = "ShopMidSFY";
    PedHash[PedHash["Skater01AFY"] = 1767892582] = "Skater01AFY";
    PedHash[PedHash["Skater01AMM"] = 3654768780] = "Skater01AMM";
    PedHash[PedHash["Skater01AMY"] = 3250873975] = "Skater01AMY";
    PedHash[PedHash["Skater02AMY"] = 2952446692] = "Skater02AMY";
    PedHash[PedHash["Skidrow01AFM"] = 2962707003] = "Skidrow01AFM";
    PedHash[PedHash["Skidrow01AMM"] = 32417469] = "Skidrow01AMM";
    PedHash[PedHash["Snowcop01SMM"] = 451459928] = "Snowcop01SMM";
    PedHash[PedHash["Socenlat01AMM"] = 193817059] = "Socenlat01AMM";
    PedHash[PedHash["Soucent01AFM"] = 1951946145] = "Soucent01AFM";
    PedHash[PedHash["Soucent01AFO"] = 1039800368] = "Soucent01AFO";
    PedHash[PedHash["Soucent01AFY"] = 744758650] = "Soucent01AFY";
    PedHash[PedHash["Soucent01AMM"] = 1750583735] = "Soucent01AMM";
    PedHash[PedHash["Soucent01AMO"] = 718836251] = "Soucent01AMO";
    PedHash[PedHash["Soucent01AMY"] = 3877027275] = "Soucent01AMY";
    PedHash[PedHash["Soucent02AFM"] = 4079145784] = "Soucent02AFM";
    PedHash[PedHash["Soucent02AFO"] = 2775443222] = "Soucent02AFO";
    PedHash[PedHash["Soucent02AFY"] = 1519319503] = "Soucent02AFY";
    PedHash[PedHash["Soucent02AMM"] = 2674735073] = "Soucent02AMM";
    PedHash[PedHash["Soucent02AMO"] = 1082572151] = "Soucent02AMO";
    PedHash[PedHash["Soucent02AMY"] = 2896414922] = "Soucent02AMY";
    PedHash[PedHash["Soucent03AFY"] = 2276611093] = "Soucent03AFY";
    PedHash[PedHash["Soucent03AMM"] = 2346291386] = "Soucent03AMM";
    PedHash[PedHash["Soucent03AMO"] = 238213328] = "Soucent03AMO";
    PedHash[PedHash["Soucent03AMY"] = 3287349092] = "Soucent03AMY";
    PedHash[PedHash["Soucent04AMM"] = 3271294718] = "Soucent04AMM";
    PedHash[PedHash["Soucent04AMY"] = 2318861297] = "Soucent04AMY";
    PedHash[PedHash["Soucentmc01AFM"] = 3454621138] = "Soucentmc01AFM";
    PedHash[PedHash["Staggrm01AMO"] = 2442448387] = "Staggrm01AMO";
    PedHash[PedHash["Stbla01AMY"] = 3482496489] = "Stbla01AMY";
    PedHash[PedHash["Stbla02AMY"] = 2563194959] = "Stbla02AMY";
    PedHash[PedHash["Stlat01AMY"] = 2255803900] = "Stlat01AMY";
    PedHash[PedHash["Stlat02AMM"] = 3265820418] = "Stlat02AMM";
    PedHash[PedHash["Stripper01SFY"] = 1381498905] = "Stripper01SFY";
    PedHash[PedHash["Stripper02SFY"] = 1846523796] = "Stripper02SFY";
    PedHash[PedHash["StripperLiteSFY"] = 1544875514] = "StripperLiteSFY";
    PedHash[PedHash["Strperf01SMM"] = 2035992488] = "Strperf01SMM";
    PedHash[PedHash["Strpreach01SMM"] = 469792763] = "Strpreach01SMM";
    PedHash[PedHash["StrPunk01GMY"] = 4246489531] = "StrPunk01GMY";
    PedHash[PedHash["StrPunk02GMY"] = 228715206] = "StrPunk02GMY";
    PedHash[PedHash["Strvend01SMM"] = 3465614249] = "Strvend01SMM";
    PedHash[PedHash["Strvend01SMY"] = 2457805603] = "Strvend01SMY";
    PedHash[PedHash["Stwhi01AMY"] = 605602864] = "Stwhi01AMY";
    PedHash[PedHash["Stwhi02AMY"] = 919005580] = "Stwhi02AMY";
    PedHash[PedHash["Sunbathe01AMY"] = 3072929548] = "Sunbathe01AMY";
    PedHash[PedHash["Surfer01AMY"] = 3938633710] = "Surfer01AMY";
    PedHash[PedHash["Swat01SMY"] = 2374966032] = "Swat01SMY";
    PedHash[PedHash["Sweatshop01SFM"] = 824925120] = "Sweatshop01SFM";
    PedHash[PedHash["Sweatshop01SFY"] = 2231547570] = "Sweatshop01SFY";
    PedHash[PedHash["Tattoo01AMO"] = 2494442380] = "Tattoo01AMO";
    PedHash[PedHash["Tennis01AFY"] = 1426880966] = "Tennis01AFY";
    PedHash[PedHash["Tennis01AMM"] = 1416254276] = "Tennis01AMM";
    PedHash[PedHash["Topless01AFY"] = 2633130371] = "Topless01AFY";
    PedHash[PedHash["Tourist01AFM"] = 1347814329] = "Tourist01AFM";
    PedHash[PedHash["Tourist01AFY"] = 1446741360] = "Tourist01AFY";
    PedHash[PedHash["Tourist01AMM"] = 3365863812] = "Tourist01AMM";
    PedHash[PedHash["Tourist02AFY"] = 2435054400] = "Tourist02AFY";
    PedHash[PedHash["Tramp01AFM"] = 1224306523] = "Tramp01AFM";
    PedHash[PedHash["Tramp01AMM"] = 516505552] = "Tramp01AMM";
    PedHash[PedHash["Tramp01AMO"] = 390939205] = "Tramp01AMO";
    PedHash[PedHash["TrampBeac01AFM"] = 2359345766] = "TrampBeac01AFM";
    PedHash[PedHash["TrampBeac01AMM"] = 1404403376] = "TrampBeac01AMM";
    PedHash[PedHash["Tranvest01AMM"] = 3773208948] = "Tranvest01AMM";
    PedHash[PedHash["Tranvest02AMM"] = 4144940484] = "Tranvest02AMM";
    PedHash[PedHash["Trucker01SMM"] = 1498487404] = "Trucker01SMM";
    PedHash[PedHash["Ups01SMM"] = 2680389410] = "Ups01SMM";
    PedHash[PedHash["Ups02SMM"] = 3502104854] = "Ups02SMM";
    PedHash[PedHash["Uscg01SMY"] = 3389018345] = "Uscg01SMY";
    PedHash[PedHash["Vagos01GFY"] = 1520708641] = "Vagos01GFY";
    PedHash[PedHash["Valet01SMY"] = 999748158] = "Valet01SMY";
    PedHash[PedHash["Vindouche01AMY"] = 3247667175] = "Vindouche01AMY";
    PedHash[PedHash["Vinewood01AFY"] = 435429221] = "Vinewood01AFY";
    PedHash[PedHash["Vinewood01AMY"] = 1264851357] = "Vinewood01AMY";
    PedHash[PedHash["Vinewood02AFY"] = 3669401835] = "Vinewood02AFY";
    PedHash[PedHash["Vinewood02AMY"] = 1561705728] = "Vinewood02AMY";
    PedHash[PedHash["Vinewood03AFY"] = 933092024] = "Vinewood03AFY";
    PedHash[PedHash["Vinewood03AMY"] = 534725268] = "Vinewood03AMY";
    PedHash[PedHash["Vinewood04AFY"] = 4209271110] = "Vinewood04AFY";
    PedHash[PedHash["Vinewood04AMY"] = 835315305] = "Vinewood04AMY";
    PedHash[PedHash["Waiter01SMY"] = 2907468364] = "Waiter01SMY";
    PedHash[PedHash["WinClean01SMY"] = 1426951581] = "WinClean01SMY";
    PedHash[PedHash["Xmech01SMY"] = 1142162924] = "Xmech01SMY";
    PedHash[PedHash["Xmech02SMY"] = 3189832196] = "Xmech02SMY";
    PedHash[PedHash["Xmech02SMYMP"] = 1755203590] = "Xmech02SMYMP";
    PedHash[PedHash["Yoga01AFY"] = 3290105390] = "Yoga01AFY";
    PedHash[PedHash["Yoga01AMY"] = 2869588309] = "Yoga01AMY";
})(PedHash || (PedHash = {}));

// CONCATENATED MODULE: ../[dependancies]/src/utils/marker_enum.ts
var MarkerType;
(function (MarkerType) {
    MarkerType[MarkerType["UpsideDownCone"] = 0] = "UpsideDownCone";
    MarkerType[MarkerType["VerticalCylinder"] = 1] = "VerticalCylinder";
    MarkerType[MarkerType["ThickChevronUp"] = 2] = "ThickChevronUp";
    MarkerType[MarkerType["ThinChevronUp"] = 3] = "ThinChevronUp";
    MarkerType[MarkerType["CheckeredFlagRect"] = 4] = "CheckeredFlagRect";
    MarkerType[MarkerType["CheckeredFlagCircle"] = 5] = "CheckeredFlagCircle";
    MarkerType[MarkerType["VerticleCircle"] = 6] = "VerticleCircle";
    MarkerType[MarkerType["PlaneModel"] = 7] = "PlaneModel";
    MarkerType[MarkerType["LostMCDark"] = 8] = "LostMCDark";
    MarkerType[MarkerType["LostMCLight"] = 9] = "LostMCLight";
    MarkerType[MarkerType["Number0"] = 10] = "Number0";
    MarkerType[MarkerType["Number1"] = 11] = "Number1";
    MarkerType[MarkerType["Number2"] = 12] = "Number2";
    MarkerType[MarkerType["Number3"] = 13] = "Number3";
    MarkerType[MarkerType["Number4"] = 14] = "Number4";
    MarkerType[MarkerType["Number5"] = 15] = "Number5";
    MarkerType[MarkerType["Number6"] = 16] = "Number6";
    MarkerType[MarkerType["Number7"] = 17] = "Number7";
    MarkerType[MarkerType["Number8"] = 18] = "Number8";
    MarkerType[MarkerType["Number9"] = 19] = "Number9";
    MarkerType[MarkerType["ChevronUpx1"] = 20] = "ChevronUpx1";
    MarkerType[MarkerType["ChevronUpx2"] = 21] = "ChevronUpx2";
    MarkerType[MarkerType["ChevronUpx3"] = 22] = "ChevronUpx3";
    MarkerType[MarkerType["HorizontalCircleFat"] = 23] = "HorizontalCircleFat";
    MarkerType[MarkerType["ReplayIcon"] = 24] = "ReplayIcon";
    MarkerType[MarkerType["HorizontalCircleSkinny"] = 25] = "HorizontalCircleSkinny";
    MarkerType[MarkerType["HorizontalCircleSkinnyArrow"] = 26] = "HorizontalCircleSkinnyArrow";
    MarkerType[MarkerType["HorizontalSplitArrowCircle"] = 27] = "HorizontalSplitArrowCircle";
    MarkerType[MarkerType["DebugSphere"] = 28] = "DebugSphere";
    MarkerType[MarkerType["DollarSign"] = 29] = "DollarSign";
    MarkerType[MarkerType["HorizontalBars"] = 30] = "HorizontalBars";
    MarkerType[MarkerType["WolfHead"] = 31] = "WolfHead";
    MarkerType[MarkerType["QuestionMark"] = 32] = "QuestionMark";
    MarkerType[MarkerType["PlaneSymbol"] = 33] = "PlaneSymbol";
    MarkerType[MarkerType["HelicopterSymbol"] = 34] = "HelicopterSymbol";
    MarkerType[MarkerType["BoatSymbol"] = 35] = "BoatSymbol";
    MarkerType[MarkerType["CarSymbol"] = 36] = "CarSymbol";
    MarkerType[MarkerType["MotorcycleSymbol"] = 37] = "MotorcycleSymbol";
    MarkerType[MarkerType["BikeSymbol"] = 38] = "BikeSymbol";
    MarkerType[MarkerType["TruckSymbol"] = 39] = "TruckSymbol";
    MarkerType[MarkerType["ParachuteSymbol"] = 40] = "ParachuteSymbol";
    MarkerType[MarkerType["SawbladeSymbol"] = 41] = "SawbladeSymbol";
})(MarkerType || (MarkerType = {}));

// CONCATENATED MODULE: ../[dependancies]/src/utils/relationShip_enum.ts
var Relationship;
(function (Relationship) {
    Relationship[Relationship["Hate"] = 5] = "Hate";
    Relationship[Relationship["Dislike"] = 4] = "Dislike";
    Relationship[Relationship["Neutral"] = 3] = "Neutral";
    Relationship[Relationship["Like"] = 2] = "Like";
    Relationship[Relationship["Respect"] = 1] = "Respect";
    Relationship[Relationship["Companion"] = 0] = "Companion";
    Relationship[Relationship["Pedestrians"] = 255] = "Pedestrians";
})(Relationship || (Relationship = {}));

// CONCATENATED MODULE: ../[dependancies]/src/utils/blips_enum.ts
var BlipColor;
(function (BlipColor) {
    BlipColor[BlipColor["White"] = 0] = "White";
    BlipColor[BlipColor["Red"] = 1] = "Red";
    BlipColor[BlipColor["Green"] = 2] = "Green";
    BlipColor[BlipColor["Blue"] = 3] = "Blue";
    BlipColor[BlipColor["MichaelBlue"] = 42] = "MichaelBlue";
    BlipColor[BlipColor["FranklinGreen"] = 43] = "FranklinGreen";
    BlipColor[BlipColor["TrevorOrange"] = 44] = "TrevorOrange";
    BlipColor[BlipColor["Yellow"] = 66] = "Yellow";
})(BlipColor || (BlipColor = {}));
var BlipSprite;
(function (BlipSprite) {
    BlipSprite[BlipSprite["Standard"] = 1] = "Standard";
    BlipSprite[BlipSprite["BigBlip"] = 2] = "BigBlip";
    BlipSprite[BlipSprite["PoliceOfficer"] = 3] = "PoliceOfficer";
    BlipSprite[BlipSprite["PoliceArea"] = 4] = "PoliceArea";
    BlipSprite[BlipSprite["Square"] = 5] = "Square";
    BlipSprite[BlipSprite["Player"] = 6] = "Player";
    BlipSprite[BlipSprite["North"] = 7] = "North";
    BlipSprite[BlipSprite["Waypoint"] = 8] = "Waypoint";
    BlipSprite[BlipSprite["BigCircle"] = 9] = "BigCircle";
    BlipSprite[BlipSprite["BigCircleOutline"] = 10] = "BigCircleOutline";
    BlipSprite[BlipSprite["ArrowUpOutlined"] = 11] = "ArrowUpOutlined";
    BlipSprite[BlipSprite["ArrowDownOutlined"] = 12] = "ArrowDownOutlined";
    BlipSprite[BlipSprite["ArrowUp"] = 13] = "ArrowUp";
    BlipSprite[BlipSprite["ArrowDown"] = 14] = "ArrowDown";
    BlipSprite[BlipSprite["PoliceHelicopterAnimated"] = 15] = "PoliceHelicopterAnimated";
    BlipSprite[BlipSprite["Jet"] = 16] = "Jet";
    BlipSprite[BlipSprite["Number1"] = 17] = "Number1";
    BlipSprite[BlipSprite["Number2"] = 18] = "Number2";
    BlipSprite[BlipSprite["Number3"] = 19] = "Number3";
    BlipSprite[BlipSprite["Number4"] = 20] = "Number4";
    BlipSprite[BlipSprite["Number5"] = 21] = "Number5";
    BlipSprite[BlipSprite["Number6"] = 22] = "Number6";
    BlipSprite[BlipSprite["Number7"] = 23] = "Number7";
    BlipSprite[BlipSprite["Number8"] = 24] = "Number8";
    BlipSprite[BlipSprite["Number9"] = 25] = "Number9";
    BlipSprite[BlipSprite["Number10"] = 26] = "Number10";
    BlipSprite[BlipSprite["GTAOCrew"] = 27] = "GTAOCrew";
    BlipSprite[BlipSprite["GTAOFriendly"] = 28] = "GTAOFriendly";
    BlipSprite[BlipSprite["Lift"] = 36] = "Lift";
    BlipSprite[BlipSprite["RaceFinish"] = 38] = "RaceFinish";
    BlipSprite[BlipSprite["Safehouse"] = 40] = "Safehouse";
    BlipSprite[BlipSprite["PoliceOfficer2"] = 41] = "PoliceOfficer2";
    BlipSprite[BlipSprite["PoliceCarDot"] = 42] = "PoliceCarDot";
    BlipSprite[BlipSprite["PoliceHelicopter"] = 43] = "PoliceHelicopter";
    BlipSprite[BlipSprite["ChatBubble"] = 47] = "ChatBubble";
    BlipSprite[BlipSprite["Garage2"] = 50] = "Garage2";
    BlipSprite[BlipSprite["Drugs"] = 51] = "Drugs";
    BlipSprite[BlipSprite["Store"] = 52] = "Store";
    BlipSprite[BlipSprite["PoliceCar"] = 56] = "PoliceCar";
    BlipSprite[BlipSprite["PolicePlayer"] = 58] = "PolicePlayer";
    BlipSprite[BlipSprite["PoliceStation"] = 60] = "PoliceStation";
    BlipSprite[BlipSprite["Hospital"] = 61] = "Hospital";
    BlipSprite[BlipSprite["Helicopter"] = 64] = "Helicopter";
    BlipSprite[BlipSprite["StrangersAndFreaks"] = 65] = "StrangersAndFreaks";
    BlipSprite[BlipSprite["ArmoredTruck"] = 66] = "ArmoredTruck";
    BlipSprite[BlipSprite["TowTruck"] = 68] = "TowTruck";
    BlipSprite[BlipSprite["Barber"] = 71] = "Barber";
    BlipSprite[BlipSprite["LosSantosCustoms"] = 72] = "LosSantosCustoms";
    BlipSprite[BlipSprite["Clothes"] = 73] = "Clothes";
    BlipSprite[BlipSprite["TattooParlor"] = 75] = "TattooParlor";
    BlipSprite[BlipSprite["Simeon"] = 76] = "Simeon";
    BlipSprite[BlipSprite["Lester"] = 77] = "Lester";
    BlipSprite[BlipSprite["Michael"] = 78] = "Michael";
    BlipSprite[BlipSprite["Trevor"] = 79] = "Trevor";
    BlipSprite[BlipSprite["Rampage"] = 84] = "Rampage";
    BlipSprite[BlipSprite["VinewoodTours"] = 85] = "VinewoodTours";
    BlipSprite[BlipSprite["Lamar"] = 86] = "Lamar";
    BlipSprite[BlipSprite["Franklin"] = 88] = "Franklin";
    BlipSprite[BlipSprite["Chinese"] = 89] = "Chinese";
    BlipSprite[BlipSprite["Airport"] = 90] = "Airport";
    BlipSprite[BlipSprite["Bar"] = 93] = "Bar";
    BlipSprite[BlipSprite["BaseJump"] = 94] = "BaseJump";
    BlipSprite[BlipSprite["CarWash"] = 100] = "CarWash";
    BlipSprite[BlipSprite["ComedyClub"] = 102] = "ComedyClub";
    BlipSprite[BlipSprite["Dart"] = 103] = "Dart";
    BlipSprite[BlipSprite["FIB"] = 106] = "FIB";
    BlipSprite[BlipSprite["DollarSign"] = 108] = "DollarSign";
    BlipSprite[BlipSprite["Golf"] = 109] = "Golf";
    BlipSprite[BlipSprite["AmmuNation"] = 110] = "AmmuNation";
    BlipSprite[BlipSprite["Exile"] = 112] = "Exile";
    BlipSprite[BlipSprite["ShootingRange"] = 119] = "ShootingRange";
    BlipSprite[BlipSprite["Solomon"] = 120] = "Solomon";
    BlipSprite[BlipSprite["StripClub"] = 121] = "StripClub";
    BlipSprite[BlipSprite["Tennis"] = 122] = "Tennis";
    BlipSprite[BlipSprite["Triathlon"] = 126] = "Triathlon";
    BlipSprite[BlipSprite["OffRoadRaceFinish"] = 127] = "OffRoadRaceFinish";
    BlipSprite[BlipSprite["Key"] = 134] = "Key";
    BlipSprite[BlipSprite["MovieTheater"] = 135] = "MovieTheater";
    BlipSprite[BlipSprite["Music"] = 136] = "Music";
    BlipSprite[BlipSprite["Marijuana"] = 140] = "Marijuana";
    BlipSprite[BlipSprite["Hunting"] = 141] = "Hunting";
    BlipSprite[BlipSprite["ArmsTraffickingGround"] = 147] = "ArmsTraffickingGround";
    BlipSprite[BlipSprite["Nigel"] = 149] = "Nigel";
    BlipSprite[BlipSprite["AssaultRifle"] = 150] = "AssaultRifle";
    BlipSprite[BlipSprite["Bat"] = 151] = "Bat";
    BlipSprite[BlipSprite["Grenade"] = 152] = "Grenade";
    BlipSprite[BlipSprite["Health"] = 153] = "Health";
    BlipSprite[BlipSprite["Knife"] = 154] = "Knife";
    BlipSprite[BlipSprite["Molotov"] = 155] = "Molotov";
    BlipSprite[BlipSprite["Pistol"] = 156] = "Pistol";
    BlipSprite[BlipSprite["RPG"] = 157] = "RPG";
    BlipSprite[BlipSprite["Shotgun"] = 158] = "Shotgun";
    BlipSprite[BlipSprite["SMG"] = 159] = "SMG";
    BlipSprite[BlipSprite["Sniper"] = 160] = "Sniper";
    BlipSprite[BlipSprite["SonicWave"] = 161] = "SonicWave";
    BlipSprite[BlipSprite["PointOfInterest"] = 162] = "PointOfInterest";
    BlipSprite[BlipSprite["GTAOPassive"] = 163] = "GTAOPassive";
    BlipSprite[BlipSprite["GTAOUsingMenu"] = 164] = "GTAOUsingMenu";
    BlipSprite[BlipSprite["Link"] = 171] = "Link";
    BlipSprite[BlipSprite["Minigun"] = 173] = "Minigun";
    BlipSprite[BlipSprite["GrenadeLauncher"] = 174] = "GrenadeLauncher";
    BlipSprite[BlipSprite["Armor"] = 175] = "Armor";
    BlipSprite[BlipSprite["Castle"] = 176] = "Castle";
    BlipSprite[BlipSprite["Camera"] = 184] = "Camera";
    BlipSprite[BlipSprite["Handcuffs"] = 188] = "Handcuffs";
    BlipSprite[BlipSprite["Yoga"] = 197] = "Yoga";
    BlipSprite[BlipSprite["Cab"] = 198] = "Cab";
    BlipSprite[BlipSprite["Number11"] = 199] = "Number11";
    BlipSprite[BlipSprite["Number12"] = 200] = "Number12";
    BlipSprite[BlipSprite["Number13"] = 201] = "Number13";
    BlipSprite[BlipSprite["Number14"] = 202] = "Number14";
    BlipSprite[BlipSprite["Number15"] = 203] = "Number15";
    BlipSprite[BlipSprite["Number16"] = 204] = "Number16";
    BlipSprite[BlipSprite["Shrink"] = 205] = "Shrink";
    BlipSprite[BlipSprite["Epsilon"] = 206] = "Epsilon";
    BlipSprite[BlipSprite["PersonalVehicleCar"] = 225] = "PersonalVehicleCar";
    BlipSprite[BlipSprite["PersonalVehicleBike"] = 226] = "PersonalVehicleBike";
    BlipSprite[BlipSprite["Custody"] = 237] = "Custody";
    BlipSprite[BlipSprite["ArmsTraffickingAir"] = 251] = "ArmsTraffickingAir";
    BlipSprite[BlipSprite["Fairground"] = 266] = "Fairground";
    BlipSprite[BlipSprite["PropertyManagement"] = 267] = "PropertyManagement";
    BlipSprite[BlipSprite["Altruist"] = 269] = "Altruist";
    BlipSprite[BlipSprite["Enemy"] = 270] = "Enemy";
    BlipSprite[BlipSprite["Chop"] = 273] = "Chop";
    BlipSprite[BlipSprite["Dead"] = 274] = "Dead";
    BlipSprite[BlipSprite["Hooker"] = 279] = "Hooker";
    BlipSprite[BlipSprite["Friend"] = 280] = "Friend";
    BlipSprite[BlipSprite["BountyHit"] = 303] = "BountyHit";
    BlipSprite[BlipSprite["GTAOMission"] = 304] = "GTAOMission";
    BlipSprite[BlipSprite["GTAOSurvival"] = 305] = "GTAOSurvival";
    BlipSprite[BlipSprite["CrateDrop"] = 306] = "CrateDrop";
    BlipSprite[BlipSprite["PlaneDrop"] = 307] = "PlaneDrop";
    BlipSprite[BlipSprite["Sub"] = 308] = "Sub";
    BlipSprite[BlipSprite["Race"] = 309] = "Race";
    BlipSprite[BlipSprite["Deathmatch"] = 310] = "Deathmatch";
    BlipSprite[BlipSprite["ArmWrestling"] = 311] = "ArmWrestling";
    BlipSprite[BlipSprite["AmmuNationShootingRange"] = 313] = "AmmuNationShootingRange";
    BlipSprite[BlipSprite["RaceAir"] = 314] = "RaceAir";
    BlipSprite[BlipSprite["RaceCar"] = 315] = "RaceCar";
    BlipSprite[BlipSprite["RaceSea"] = 316] = "RaceSea";
    BlipSprite[BlipSprite["GarbageTruck"] = 318] = "GarbageTruck";
    BlipSprite[BlipSprite["SafehouseForSale"] = 350] = "SafehouseForSale";
    BlipSprite[BlipSprite["Package"] = 351] = "Package";
    BlipSprite[BlipSprite["MartinMadrazo"] = 352] = "MartinMadrazo";
    BlipSprite[BlipSprite["EnemyHelicopter"] = 353] = "EnemyHelicopter";
    BlipSprite[BlipSprite["Boost"] = 354] = "Boost";
    BlipSprite[BlipSprite["Devin"] = 355] = "Devin";
    BlipSprite[BlipSprite["Marina"] = 356] = "Marina";
    BlipSprite[BlipSprite["Garage"] = 357] = "Garage";
    BlipSprite[BlipSprite["GolfFlag"] = 358] = "GolfFlag";
    BlipSprite[BlipSprite["Hangar"] = 359] = "Hangar";
    BlipSprite[BlipSprite["Helipad"] = 360] = "Helipad";
    BlipSprite[BlipSprite["JerryCan"] = 361] = "JerryCan";
    BlipSprite[BlipSprite["Masks"] = 362] = "Masks";
    BlipSprite[BlipSprite["HeistSetup"] = 363] = "HeistSetup";
    BlipSprite[BlipSprite["Incapacitated"] = 364] = "Incapacitated";
    BlipSprite[BlipSprite["PickupSpawn"] = 365] = "PickupSpawn";
    BlipSprite[BlipSprite["BoilerSuit"] = 366] = "BoilerSuit";
    BlipSprite[BlipSprite["Completed"] = 367] = "Completed";
    BlipSprite[BlipSprite["Rockets"] = 368] = "Rockets";
    BlipSprite[BlipSprite["GarageForSale"] = 369] = "GarageForSale";
    BlipSprite[BlipSprite["HelipadForSale"] = 370] = "HelipadForSale";
    BlipSprite[BlipSprite["MarinaForSale"] = 371] = "MarinaForSale";
    BlipSprite[BlipSprite["HangarForSale"] = 372] = "HangarForSale";
    BlipSprite[BlipSprite["Business"] = 374] = "Business";
    BlipSprite[BlipSprite["BusinessForSale"] = 375] = "BusinessForSale";
    BlipSprite[BlipSprite["RaceBike"] = 376] = "RaceBike";
    BlipSprite[BlipSprite["Parachute"] = 377] = "Parachute";
    BlipSprite[BlipSprite["TeamDeathmatch"] = 378] = "TeamDeathmatch";
    BlipSprite[BlipSprite["RaceFoot"] = 379] = "RaceFoot";
    BlipSprite[BlipSprite["VehicleDeathmatch"] = 380] = "VehicleDeathmatch";
    BlipSprite[BlipSprite["Barry"] = 381] = "Barry";
    BlipSprite[BlipSprite["Dom"] = 382] = "Dom";
    BlipSprite[BlipSprite["MaryAnn"] = 383] = "MaryAnn";
    BlipSprite[BlipSprite["Cletus"] = 384] = "Cletus";
    BlipSprite[BlipSprite["Josh"] = 385] = "Josh";
    BlipSprite[BlipSprite["Minute"] = 386] = "Minute";
    BlipSprite[BlipSprite["Omega"] = 387] = "Omega";
    BlipSprite[BlipSprite["Tonya"] = 388] = "Tonya";
    BlipSprite[BlipSprite["Paparazzo"] = 389] = "Paparazzo";
    BlipSprite[BlipSprite["Crosshair"] = 390] = "Crosshair";
    BlipSprite[BlipSprite["Creator"] = 398] = "Creator";
    BlipSprite[BlipSprite["CreatorDirection"] = 399] = "CreatorDirection";
    BlipSprite[BlipSprite["Abigail"] = 400] = "Abigail";
    BlipSprite[BlipSprite["Blimp"] = 401] = "Blimp";
    BlipSprite[BlipSprite["Repair"] = 402] = "Repair";
    BlipSprite[BlipSprite["Testosterone"] = 403] = "Testosterone";
    BlipSprite[BlipSprite["Dinghy"] = 404] = "Dinghy";
    BlipSprite[BlipSprite["Fanatic"] = 405] = "Fanatic";
    BlipSprite[BlipSprite["Information"] = 407] = "Information";
    BlipSprite[BlipSprite["CaptureBriefcase"] = 408] = "CaptureBriefcase";
    BlipSprite[BlipSprite["LastTeamStanding"] = 409] = "LastTeamStanding";
    BlipSprite[BlipSprite["Boat"] = 410] = "Boat";
    BlipSprite[BlipSprite["CaptureHouse"] = 411] = "CaptureHouse";
    BlipSprite[BlipSprite["JerryCan2"] = 415] = "JerryCan2";
    BlipSprite[BlipSprite["RP"] = 416] = "RP";
    BlipSprite[BlipSprite["GTAOPlayerSafehouse"] = 417] = "GTAOPlayerSafehouse";
    BlipSprite[BlipSprite["GTAOPlayerSafehouseDead"] = 418] = "GTAOPlayerSafehouseDead";
    BlipSprite[BlipSprite["CaptureAmericanFlag"] = 419] = "CaptureAmericanFlag";
    BlipSprite[BlipSprite["CaptureFlag"] = 420] = "CaptureFlag";
    BlipSprite[BlipSprite["Tank"] = 421] = "Tank";
    BlipSprite[BlipSprite["HelicopterAnimated"] = 422] = "HelicopterAnimated";
    BlipSprite[BlipSprite["Plane"] = 423] = "Plane";
    BlipSprite[BlipSprite["PlayerNoColor"] = 425] = "PlayerNoColor";
    BlipSprite[BlipSprite["GunCar"] = 426] = "GunCar";
    BlipSprite[BlipSprite["Speedboat"] = 427] = "Speedboat";
    BlipSprite[BlipSprite["Heist"] = 428] = "Heist";
    BlipSprite[BlipSprite["Stopwatch"] = 430] = "Stopwatch";
    BlipSprite[BlipSprite["DollarSignCircled"] = 431] = "DollarSignCircled";
    BlipSprite[BlipSprite["Crosshair2"] = 432] = "Crosshair2";
    BlipSprite[BlipSprite["DollarSignSquared"] = 434] = "DollarSignSquared";
})(BlipSprite || (BlipSprite = {}));

// CONCATENATED MODULE: ../[dependancies]/src/utils/vehicle_enum.ts
var CargobobHook;
(function (CargobobHook) {
    CargobobHook[CargobobHook["Hook"] = 0] = "Hook";
    CargobobHook[CargobobHook["Magnet"] = 1] = "Magnet";
})(CargobobHook || (CargobobHook = {}));
var LicensePlateStyle;
(function (LicensePlateStyle) {
    LicensePlateStyle[LicensePlateStyle["BlueOnWhite1"] = 3] = "BlueOnWhite1";
    LicensePlateStyle[LicensePlateStyle["BlueOnWhite2"] = 0] = "BlueOnWhite2";
    LicensePlateStyle[LicensePlateStyle["BlueOnWhite3"] = 4] = "BlueOnWhite3";
    LicensePlateStyle[LicensePlateStyle["YellowOnBlack"] = 1] = "YellowOnBlack";
    LicensePlateStyle[LicensePlateStyle["YellowOnBlue"] = 2] = "YellowOnBlue";
    LicensePlateStyle[LicensePlateStyle["NorthYankton"] = 5] = "NorthYankton";
})(LicensePlateStyle || (LicensePlateStyle = {}));
var LicensePlateType;
(function (LicensePlateType) {
    LicensePlateType[LicensePlateType["FrontAndRearPlates"] = 0] = "FrontAndRearPlates";
    LicensePlateType[LicensePlateType["FrontPlate"] = 1] = "FrontPlate";
    LicensePlateType[LicensePlateType["RearPlate"] = 2] = "RearPlate";
    LicensePlateType[LicensePlateType["None"] = 3] = "None";
})(LicensePlateType || (LicensePlateType = {}));
var VehicleClass;
(function (VehicleClass) {
    VehicleClass[VehicleClass["Compacts"] = 0] = "Compacts";
    VehicleClass[VehicleClass["Sedans"] = 1] = "Sedans";
    VehicleClass[VehicleClass["SUVs"] = 2] = "SUVs";
    VehicleClass[VehicleClass["Coupes"] = 3] = "Coupes";
    VehicleClass[VehicleClass["Muscle"] = 4] = "Muscle";
    VehicleClass[VehicleClass["SportsClassics"] = 5] = "SportsClassics";
    VehicleClass[VehicleClass["Sports"] = 6] = "Sports";
    VehicleClass[VehicleClass["Super"] = 7] = "Super";
    VehicleClass[VehicleClass["Motorcycles"] = 8] = "Motorcycles";
    VehicleClass[VehicleClass["OffRoad"] = 9] = "OffRoad";
    VehicleClass[VehicleClass["Industrial"] = 10] = "Industrial";
    VehicleClass[VehicleClass["Utility"] = 11] = "Utility";
    VehicleClass[VehicleClass["Vans"] = 12] = "Vans";
    VehicleClass[VehicleClass["Cycles"] = 13] = "Cycles";
    VehicleClass[VehicleClass["Boats"] = 14] = "Boats";
    VehicleClass[VehicleClass["Helicopters"] = 15] = "Helicopters";
    VehicleClass[VehicleClass["Planes"] = 16] = "Planes";
    VehicleClass[VehicleClass["Service"] = 17] = "Service";
    VehicleClass[VehicleClass["Emergency"] = 18] = "Emergency";
    VehicleClass[VehicleClass["Military"] = 19] = "Military";
    VehicleClass[VehicleClass["Commercial"] = 20] = "Commercial";
    VehicleClass[VehicleClass["Trains"] = 21] = "Trains";
})(VehicleClass || (VehicleClass = {}));
var VehicleColor;
(function (VehicleColor) {
    VehicleColor[VehicleColor["MetallicBlack"] = 0] = "MetallicBlack";
    VehicleColor[VehicleColor["MetallicGraphiteBlack"] = 1] = "MetallicGraphiteBlack";
    VehicleColor[VehicleColor["MetallicBlackSteel"] = 2] = "MetallicBlackSteel";
    VehicleColor[VehicleColor["MetallicDarkSilver"] = 3] = "MetallicDarkSilver";
    VehicleColor[VehicleColor["MetallicSilver"] = 4] = "MetallicSilver";
    VehicleColor[VehicleColor["MetallicBlueSilver"] = 5] = "MetallicBlueSilver";
    VehicleColor[VehicleColor["MetallicSteelGray"] = 6] = "MetallicSteelGray";
    VehicleColor[VehicleColor["MetallicShadowSilver"] = 7] = "MetallicShadowSilver";
    VehicleColor[VehicleColor["MetallicStoneSilver"] = 8] = "MetallicStoneSilver";
    VehicleColor[VehicleColor["MetallicMidnightSilver"] = 9] = "MetallicMidnightSilver";
    VehicleColor[VehicleColor["MetallicGunMetal"] = 10] = "MetallicGunMetal";
    VehicleColor[VehicleColor["MetallicAnthraciteGray"] = 11] = "MetallicAnthraciteGray";
    VehicleColor[VehicleColor["MatteBlack"] = 12] = "MatteBlack";
    VehicleColor[VehicleColor["MatteGray"] = 13] = "MatteGray";
    VehicleColor[VehicleColor["MatteLightGray"] = 14] = "MatteLightGray";
    VehicleColor[VehicleColor["UtilBlack"] = 15] = "UtilBlack";
    VehicleColor[VehicleColor["UtilBlackPoly"] = 16] = "UtilBlackPoly";
    VehicleColor[VehicleColor["UtilDarksilver"] = 17] = "UtilDarksilver";
    VehicleColor[VehicleColor["UtilSilver"] = 18] = "UtilSilver";
    VehicleColor[VehicleColor["UtilGunMetal"] = 19] = "UtilGunMetal";
    VehicleColor[VehicleColor["UtilShadowSilver"] = 20] = "UtilShadowSilver";
    VehicleColor[VehicleColor["WornBlack"] = 21] = "WornBlack";
    VehicleColor[VehicleColor["WornGraphite"] = 22] = "WornGraphite";
    VehicleColor[VehicleColor["WornSilverGray"] = 23] = "WornSilverGray";
    VehicleColor[VehicleColor["WornSilver"] = 24] = "WornSilver";
    VehicleColor[VehicleColor["WornBlueSilver"] = 25] = "WornBlueSilver";
    VehicleColor[VehicleColor["WornShadowSilver"] = 26] = "WornShadowSilver";
    VehicleColor[VehicleColor["MetallicRed"] = 27] = "MetallicRed";
    VehicleColor[VehicleColor["MetallicTorinoRed"] = 28] = "MetallicTorinoRed";
    VehicleColor[VehicleColor["MetallicFormulaRed"] = 29] = "MetallicFormulaRed";
    VehicleColor[VehicleColor["MetallicBlazeRed"] = 30] = "MetallicBlazeRed";
    VehicleColor[VehicleColor["MetallicGracefulRed"] = 31] = "MetallicGracefulRed";
    VehicleColor[VehicleColor["MetallicGarnetRed"] = 32] = "MetallicGarnetRed";
    VehicleColor[VehicleColor["MetallicDesertRed"] = 33] = "MetallicDesertRed";
    VehicleColor[VehicleColor["MetallicCabernetRed"] = 34] = "MetallicCabernetRed";
    VehicleColor[VehicleColor["MetallicCandyRed"] = 35] = "MetallicCandyRed";
    VehicleColor[VehicleColor["MetallicSunriseOrange"] = 36] = "MetallicSunriseOrange";
    VehicleColor[VehicleColor["MetallicClassicGold"] = 37] = "MetallicClassicGold";
    VehicleColor[VehicleColor["MetallicOrange"] = 38] = "MetallicOrange";
    VehicleColor[VehicleColor["MatteRed"] = 39] = "MatteRed";
    VehicleColor[VehicleColor["MatteDarkRed"] = 40] = "MatteDarkRed";
    VehicleColor[VehicleColor["MatteOrange"] = 41] = "MatteOrange";
    VehicleColor[VehicleColor["MatteYellow"] = 42] = "MatteYellow";
    VehicleColor[VehicleColor["UtilRed"] = 43] = "UtilRed";
    VehicleColor[VehicleColor["UtilBrightRed"] = 44] = "UtilBrightRed";
    VehicleColor[VehicleColor["UtilGarnetRed"] = 45] = "UtilGarnetRed";
    VehicleColor[VehicleColor["WornRed"] = 46] = "WornRed";
    VehicleColor[VehicleColor["WornGoldenRed"] = 47] = "WornGoldenRed";
    VehicleColor[VehicleColor["WornDarkRed"] = 48] = "WornDarkRed";
    VehicleColor[VehicleColor["MetallicDarkGreen"] = 49] = "MetallicDarkGreen";
    VehicleColor[VehicleColor["MetallicRacingGreen"] = 50] = "MetallicRacingGreen";
    VehicleColor[VehicleColor["MetallicSeaGreen"] = 51] = "MetallicSeaGreen";
    VehicleColor[VehicleColor["MetallicOliveGreen"] = 52] = "MetallicOliveGreen";
    VehicleColor[VehicleColor["MetallicGreen"] = 53] = "MetallicGreen";
    VehicleColor[VehicleColor["MetallicGasolineBlueGreen"] = 54] = "MetallicGasolineBlueGreen";
    VehicleColor[VehicleColor["MatteLimeGreen"] = 55] = "MatteLimeGreen";
    VehicleColor[VehicleColor["UtilDarkGreen"] = 56] = "UtilDarkGreen";
    VehicleColor[VehicleColor["UtilGreen"] = 57] = "UtilGreen";
    VehicleColor[VehicleColor["WornDarkGreen"] = 58] = "WornDarkGreen";
    VehicleColor[VehicleColor["WornGreen"] = 59] = "WornGreen";
    VehicleColor[VehicleColor["WornSeaWash"] = 60] = "WornSeaWash";
    VehicleColor[VehicleColor["MetallicMidnightBlue"] = 61] = "MetallicMidnightBlue";
    VehicleColor[VehicleColor["MetallicDarkBlue"] = 62] = "MetallicDarkBlue";
    VehicleColor[VehicleColor["MetallicSaxonyBlue"] = 63] = "MetallicSaxonyBlue";
    VehicleColor[VehicleColor["MetallicBlue"] = 64] = "MetallicBlue";
    VehicleColor[VehicleColor["MetallicMarinerBlue"] = 65] = "MetallicMarinerBlue";
    VehicleColor[VehicleColor["MetallicHarborBlue"] = 66] = "MetallicHarborBlue";
    VehicleColor[VehicleColor["MetallicDiamondBlue"] = 67] = "MetallicDiamondBlue";
    VehicleColor[VehicleColor["MetallicSurfBlue"] = 68] = "MetallicSurfBlue";
    VehicleColor[VehicleColor["MetallicNauticalBlue"] = 69] = "MetallicNauticalBlue";
    VehicleColor[VehicleColor["MetallicBrightBlue"] = 70] = "MetallicBrightBlue";
    VehicleColor[VehicleColor["MetallicPurpleBlue"] = 71] = "MetallicPurpleBlue";
    VehicleColor[VehicleColor["MetallicSpinnakerBlue"] = 72] = "MetallicSpinnakerBlue";
    VehicleColor[VehicleColor["MetallicUltraBlue"] = 73] = "MetallicUltraBlue";
    VehicleColor[VehicleColor["UtilDarkBlue"] = 75] = "UtilDarkBlue";
    VehicleColor[VehicleColor["UtilMidnightBlue"] = 76] = "UtilMidnightBlue";
    VehicleColor[VehicleColor["UtilBlue"] = 77] = "UtilBlue";
    VehicleColor[VehicleColor["UtilSeaFoamBlue"] = 78] = "UtilSeaFoamBlue";
    VehicleColor[VehicleColor["UtilLightningBlue"] = 79] = "UtilLightningBlue";
    VehicleColor[VehicleColor["UtilMauiBluePoly"] = 80] = "UtilMauiBluePoly";
    VehicleColor[VehicleColor["UtilBrightBlue"] = 81] = "UtilBrightBlue";
    VehicleColor[VehicleColor["MatteDarkBlue"] = 82] = "MatteDarkBlue";
    VehicleColor[VehicleColor["MatteBlue"] = 83] = "MatteBlue";
    VehicleColor[VehicleColor["MatteMidnightBlue"] = 84] = "MatteMidnightBlue";
    VehicleColor[VehicleColor["WornDarkBlue"] = 85] = "WornDarkBlue";
    VehicleColor[VehicleColor["WornBlue"] = 86] = "WornBlue";
    VehicleColor[VehicleColor["WornLightBlue"] = 87] = "WornLightBlue";
    VehicleColor[VehicleColor["MetallicTaxiYellow"] = 88] = "MetallicTaxiYellow";
    VehicleColor[VehicleColor["MetallicRaceYellow"] = 89] = "MetallicRaceYellow";
    VehicleColor[VehicleColor["MetallicBronze"] = 90] = "MetallicBronze";
    VehicleColor[VehicleColor["MetallicYellowBird"] = 91] = "MetallicYellowBird";
    VehicleColor[VehicleColor["MetallicLime"] = 92] = "MetallicLime";
    VehicleColor[VehicleColor["MetallicChampagne"] = 93] = "MetallicChampagne";
    VehicleColor[VehicleColor["MetallicPuebloBeige"] = 94] = "MetallicPuebloBeige";
    VehicleColor[VehicleColor["MetallicDarkIvory"] = 95] = "MetallicDarkIvory";
    VehicleColor[VehicleColor["MetallicChocoBrown"] = 96] = "MetallicChocoBrown";
    VehicleColor[VehicleColor["MetallicGoldenBrown"] = 97] = "MetallicGoldenBrown";
    VehicleColor[VehicleColor["MetallicLightBrown"] = 98] = "MetallicLightBrown";
    VehicleColor[VehicleColor["MetallicStrawBeige"] = 99] = "MetallicStrawBeige";
    VehicleColor[VehicleColor["MetallicMossBrown"] = 100] = "MetallicMossBrown";
    VehicleColor[VehicleColor["MetallicBistonBrown"] = 101] = "MetallicBistonBrown";
    VehicleColor[VehicleColor["MetallicBeechwood"] = 102] = "MetallicBeechwood";
    VehicleColor[VehicleColor["MetallicDarkBeechwood"] = 103] = "MetallicDarkBeechwood";
    VehicleColor[VehicleColor["MetallicChocoOrange"] = 104] = "MetallicChocoOrange";
    VehicleColor[VehicleColor["MetallicBeachSand"] = 105] = "MetallicBeachSand";
    VehicleColor[VehicleColor["MetallicSunBleechedSand"] = 106] = "MetallicSunBleechedSand";
    VehicleColor[VehicleColor["MetallicCream"] = 107] = "MetallicCream";
    VehicleColor[VehicleColor["UtilBrown"] = 108] = "UtilBrown";
    VehicleColor[VehicleColor["UtilMediumBrown"] = 109] = "UtilMediumBrown";
    VehicleColor[VehicleColor["UtilLightBrown"] = 110] = "UtilLightBrown";
    VehicleColor[VehicleColor["MetallicWhite"] = 111] = "MetallicWhite";
    VehicleColor[VehicleColor["MetallicFrostWhite"] = 112] = "MetallicFrostWhite";
    VehicleColor[VehicleColor["WornHoneyBeige"] = 113] = "WornHoneyBeige";
    VehicleColor[VehicleColor["WornBrown"] = 114] = "WornBrown";
    VehicleColor[VehicleColor["WornDarkBrown"] = 115] = "WornDarkBrown";
    VehicleColor[VehicleColor["WornStrawBeige"] = 116] = "WornStrawBeige";
    VehicleColor[VehicleColor["BrushedSteel"] = 117] = "BrushedSteel";
    VehicleColor[VehicleColor["BrushedBlackSteel"] = 118] = "BrushedBlackSteel";
    VehicleColor[VehicleColor["BrushedAluminium"] = 119] = "BrushedAluminium";
    VehicleColor[VehicleColor["Chrome"] = 120] = "Chrome";
    VehicleColor[VehicleColor["WornOffWhite"] = 121] = "WornOffWhite";
    VehicleColor[VehicleColor["UtilOffWhite"] = 122] = "UtilOffWhite";
    VehicleColor[VehicleColor["WornOrange"] = 123] = "WornOrange";
    VehicleColor[VehicleColor["WornLightOrange"] = 124] = "WornLightOrange";
    VehicleColor[VehicleColor["MetallicSecuricorGreen"] = 125] = "MetallicSecuricorGreen";
    VehicleColor[VehicleColor["WornTaxiYellow"] = 126] = "WornTaxiYellow";
    VehicleColor[VehicleColor["PoliceCarBlue"] = 127] = "PoliceCarBlue";
    VehicleColor[VehicleColor["MatteGreen"] = 128] = "MatteGreen";
    VehicleColor[VehicleColor["MatteBrown"] = 129] = "MatteBrown";
    VehicleColor[VehicleColor["MatteWhite"] = 131] = "MatteWhite";
    VehicleColor[VehicleColor["WornWhite"] = 132] = "WornWhite";
    VehicleColor[VehicleColor["WornOliveArmyGreen"] = 133] = "WornOliveArmyGreen";
    VehicleColor[VehicleColor["PureWhite"] = 134] = "PureWhite";
    VehicleColor[VehicleColor["HotPink"] = 135] = "HotPink";
    VehicleColor[VehicleColor["Salmonpink"] = 136] = "Salmonpink";
    VehicleColor[VehicleColor["MetallicVermillionPink"] = 137] = "MetallicVermillionPink";
    VehicleColor[VehicleColor["Orange"] = 138] = "Orange";
    VehicleColor[VehicleColor["Green"] = 139] = "Green";
    VehicleColor[VehicleColor["Blue"] = 140] = "Blue";
    VehicleColor[VehicleColor["MettalicBlackBlue"] = 141] = "MettalicBlackBlue";
    VehicleColor[VehicleColor["MetallicBlackPurple"] = 142] = "MetallicBlackPurple";
    VehicleColor[VehicleColor["MetallicBlackRed"] = 143] = "MetallicBlackRed";
    VehicleColor[VehicleColor["HunterGreen"] = 144] = "HunterGreen";
    VehicleColor[VehicleColor["MetallicPurple"] = 145] = "MetallicPurple";
    VehicleColor[VehicleColor["MetaillicVDarkBlue"] = 146] = "MetaillicVDarkBlue";
    VehicleColor[VehicleColor["ModshopBlack1"] = 147] = "ModshopBlack1";
    VehicleColor[VehicleColor["MattePurple"] = 148] = "MattePurple";
    VehicleColor[VehicleColor["MatteDarkPurple"] = 149] = "MatteDarkPurple";
    VehicleColor[VehicleColor["MetallicLavaRed"] = 150] = "MetallicLavaRed";
    VehicleColor[VehicleColor["MatteForestGreen"] = 151] = "MatteForestGreen";
    VehicleColor[VehicleColor["MatteOliveDrab"] = 152] = "MatteOliveDrab";
    VehicleColor[VehicleColor["MatteDesertBrown"] = 153] = "MatteDesertBrown";
    VehicleColor[VehicleColor["MatteDesertTan"] = 154] = "MatteDesertTan";
    VehicleColor[VehicleColor["MatteFoliageGreen"] = 155] = "MatteFoliageGreen";
    VehicleColor[VehicleColor["DefaultAlloyColor"] = 156] = "DefaultAlloyColor";
    VehicleColor[VehicleColor["EpsilonBlue"] = 157] = "EpsilonBlue";
    VehicleColor[VehicleColor["PureGold"] = 158] = "PureGold";
    VehicleColor[VehicleColor["BrushedGold"] = 159] = "BrushedGold";
})(VehicleColor || (VehicleColor = {}));
var VehicleLandingGearState;
(function (VehicleLandingGearState) {
    VehicleLandingGearState[VehicleLandingGearState["Deployed"] = 0] = "Deployed";
    VehicleLandingGearState[VehicleLandingGearState["Closing"] = 1] = "Closing";
    VehicleLandingGearState[VehicleLandingGearState["Opening"] = 2] = "Opening";
    VehicleLandingGearState[VehicleLandingGearState["Retracted"] = 3] = "Retracted";
})(VehicleLandingGearState || (VehicleLandingGearState = {}));
var VehicleLockStatus;
(function (VehicleLockStatus) {
    VehicleLockStatus[VehicleLockStatus["None"] = 0] = "None";
    VehicleLockStatus[VehicleLockStatus["Unlocked"] = 1] = "Unlocked";
    VehicleLockStatus[VehicleLockStatus["Locked"] = 2] = "Locked";
    VehicleLockStatus[VehicleLockStatus["LockedForPlayer"] = 3] = "LockedForPlayer";
    VehicleLockStatus[VehicleLockStatus["StickPlayerInside"] = 4] = "StickPlayerInside";
    VehicleLockStatus[VehicleLockStatus["CanBeBrokenInto"] = 7] = "CanBeBrokenInto";
    VehicleLockStatus[VehicleLockStatus["CanBeBrokenIntoPersist"] = 8] = "CanBeBrokenIntoPersist";
    VehicleLockStatus[VehicleLockStatus["CannotBeTriedToEnter"] = 10] = "CannotBeTriedToEnter";
})(VehicleLockStatus || (VehicleLockStatus = {}));
var VehicleNeonLight;
(function (VehicleNeonLight) {
    VehicleNeonLight[VehicleNeonLight["Left"] = 0] = "Left";
    VehicleNeonLight[VehicleNeonLight["Right"] = 1] = "Right";
    VehicleNeonLight[VehicleNeonLight["Front"] = 2] = "Front";
    VehicleNeonLight[VehicleNeonLight["Back"] = 3] = "Back";
})(VehicleNeonLight || (VehicleNeonLight = {}));
var VehicleRoofState;
(function (VehicleRoofState) {
    VehicleRoofState[VehicleRoofState["Closed"] = 0] = "Closed";
    VehicleRoofState[VehicleRoofState["Opening"] = 1] = "Opening";
    VehicleRoofState[VehicleRoofState["Opened"] = 2] = "Opened";
    VehicleRoofState[VehicleRoofState["Closing"] = 3] = "Closing";
})(VehicleRoofState || (VehicleRoofState = {}));
var VehicleSeat;
(function (VehicleSeat) {
    VehicleSeat[VehicleSeat["None"] = -3] = "None";
    VehicleSeat[VehicleSeat["Any"] = -2] = "Any";
    VehicleSeat[VehicleSeat["Driver"] = -1] = "Driver";
    VehicleSeat[VehicleSeat["Passenger"] = 0] = "Passenger";
    VehicleSeat[VehicleSeat["LeftFront"] = -1] = "LeftFront";
    VehicleSeat[VehicleSeat["RightFront"] = 0] = "RightFront";
    VehicleSeat[VehicleSeat["LeftRear"] = 1] = "LeftRear";
    VehicleSeat[VehicleSeat["RightRear"] = 2] = "RightRear";
    VehicleSeat[VehicleSeat["ExtraSeat1"] = 3] = "ExtraSeat1";
    VehicleSeat[VehicleSeat["ExtraSeat2"] = 4] = "ExtraSeat2";
    VehicleSeat[VehicleSeat["ExtraSeat3"] = 5] = "ExtraSeat3";
    VehicleSeat[VehicleSeat["ExtraSeat4"] = 6] = "ExtraSeat4";
    VehicleSeat[VehicleSeat["ExtraSeat5"] = 7] = "ExtraSeat5";
    VehicleSeat[VehicleSeat["ExtraSeat6"] = 8] = "ExtraSeat6";
    VehicleSeat[VehicleSeat["ExtraSeat7"] = 9] = "ExtraSeat7";
    VehicleSeat[VehicleSeat["ExtraSeat8"] = 10] = "ExtraSeat8";
    VehicleSeat[VehicleSeat["ExtraSeat9"] = 11] = "ExtraSeat9";
    VehicleSeat[VehicleSeat["ExtraSeat10"] = 12] = "ExtraSeat10";
    VehicleSeat[VehicleSeat["ExtraSeat11"] = 13] = "ExtraSeat11";
    VehicleSeat[VehicleSeat["ExtraSeat12"] = 14] = "ExtraSeat12";
})(VehicleSeat || (VehicleSeat = {}));
var VehicleWindowTint;
(function (VehicleWindowTint) {
    VehicleWindowTint[VehicleWindowTint["None"] = 0] = "None";
    VehicleWindowTint[VehicleWindowTint["PureBlack"] = 1] = "PureBlack";
    VehicleWindowTint[VehicleWindowTint["DarkSmoke"] = 2] = "DarkSmoke";
    VehicleWindowTint[VehicleWindowTint["LightSmoke"] = 3] = "LightSmoke";
    VehicleWindowTint[VehicleWindowTint["Stock"] = 4] = "Stock";
    VehicleWindowTint[VehicleWindowTint["Limo"] = 5] = "Limo";
    VehicleWindowTint[VehicleWindowTint["Green"] = 6] = "Green";
})(VehicleWindowTint || (VehicleWindowTint = {}));
var VehicleWindowIndex;
(function (VehicleWindowIndex) {
    VehicleWindowIndex[VehicleWindowIndex["FrontRightWindow"] = 1] = "FrontRightWindow";
    VehicleWindowIndex[VehicleWindowIndex["FrontLeftWindow"] = 0] = "FrontLeftWindow";
    VehicleWindowIndex[VehicleWindowIndex["BackRightWindow"] = 3] = "BackRightWindow";
    VehicleWindowIndex[VehicleWindowIndex["BackLeftWindow"] = 2] = "BackLeftWindow";
    VehicleWindowIndex[VehicleWindowIndex["ExtraWindow1"] = 4] = "ExtraWindow1";
    VehicleWindowIndex[VehicleWindowIndex["ExtraWindow2"] = 5] = "ExtraWindow2";
    VehicleWindowIndex[VehicleWindowIndex["ExtraWindow3"] = 6] = "ExtraWindow3";
    VehicleWindowIndex[VehicleWindowIndex["ExtraWindow4"] = 7] = "ExtraWindow4";
})(VehicleWindowIndex || (VehicleWindowIndex = {}));
var VehicleModType;
(function (VehicleModType) {
    VehicleModType[VehicleModType["Spoilers"] = 0] = "Spoilers";
    VehicleModType[VehicleModType["FrontBumper"] = 1] = "FrontBumper";
    VehicleModType[VehicleModType["RearBumper"] = 2] = "RearBumper";
    VehicleModType[VehicleModType["SideSkirt"] = 3] = "SideSkirt";
    VehicleModType[VehicleModType["Exhaust"] = 4] = "Exhaust";
    VehicleModType[VehicleModType["Frame"] = 5] = "Frame";
    VehicleModType[VehicleModType["Grille"] = 6] = "Grille";
    VehicleModType[VehicleModType["Hood"] = 7] = "Hood";
    VehicleModType[VehicleModType["Fender"] = 8] = "Fender";
    VehicleModType[VehicleModType["RightFender"] = 9] = "RightFender";
    VehicleModType[VehicleModType["Roof"] = 10] = "Roof";
    VehicleModType[VehicleModType["Engine"] = 11] = "Engine";
    VehicleModType[VehicleModType["Brakes"] = 12] = "Brakes";
    VehicleModType[VehicleModType["Transmission"] = 13] = "Transmission";
    VehicleModType[VehicleModType["Horns"] = 14] = "Horns";
    VehicleModType[VehicleModType["Suspension"] = 15] = "Suspension";
    VehicleModType[VehicleModType["Armor"] = 16] = "Armor";
    VehicleModType[VehicleModType["FrontWheel"] = 23] = "FrontWheel";
    VehicleModType[VehicleModType["RearWheel"] = 24] = "RearWheel";
    VehicleModType[VehicleModType["PlateHolder"] = 25] = "PlateHolder";
    VehicleModType[VehicleModType["VanityPlates"] = 26] = "VanityPlates";
    VehicleModType[VehicleModType["TrimDesign"] = 27] = "TrimDesign";
    VehicleModType[VehicleModType["Ornaments"] = 28] = "Ornaments";
    VehicleModType[VehicleModType["Dashboard"] = 29] = "Dashboard";
    VehicleModType[VehicleModType["DialDesign"] = 30] = "DialDesign";
    VehicleModType[VehicleModType["DoorSpeakers"] = 31] = "DoorSpeakers";
    VehicleModType[VehicleModType["Seats"] = 32] = "Seats";
    VehicleModType[VehicleModType["SteeringWheels"] = 33] = "SteeringWheels";
    VehicleModType[VehicleModType["ColumnShifterLevers"] = 34] = "ColumnShifterLevers";
    VehicleModType[VehicleModType["Plaques"] = 35] = "Plaques";
    VehicleModType[VehicleModType["Speakers"] = 36] = "Speakers";
    VehicleModType[VehicleModType["Trunk"] = 37] = "Trunk";
    VehicleModType[VehicleModType["Hydraulics"] = 38] = "Hydraulics";
    VehicleModType[VehicleModType["EngineBlock"] = 39] = "EngineBlock";
    VehicleModType[VehicleModType["AirFilter"] = 40] = "AirFilter";
    VehicleModType[VehicleModType["Struts"] = 41] = "Struts";
    VehicleModType[VehicleModType["ArchCover"] = 42] = "ArchCover";
    VehicleModType[VehicleModType["Aerials"] = 43] = "Aerials";
    VehicleModType[VehicleModType["Trim"] = 44] = "Trim";
    VehicleModType[VehicleModType["Tank"] = 45] = "Tank";
    VehicleModType[VehicleModType["Windows"] = 46] = "Windows";
    VehicleModType[VehicleModType["Livery"] = 48] = "Livery";
})(VehicleModType || (VehicleModType = {}));
var VehicleToggleModType;
(function (VehicleToggleModType) {
    VehicleToggleModType[VehicleToggleModType["Turbo"] = 18] = "Turbo";
    VehicleToggleModType[VehicleToggleModType["TireSmoke"] = 20] = "TireSmoke";
    VehicleToggleModType[VehicleToggleModType["XenonHeadlights"] = 22] = "XenonHeadlights";
})(VehicleToggleModType || (VehicleToggleModType = {}));
var VehiclePaintType;
(function (VehiclePaintType) {
    VehiclePaintType[VehiclePaintType["Normal"] = 0] = "Normal";
    VehiclePaintType[VehiclePaintType["Metallic"] = 1] = "Metallic";
    VehiclePaintType[VehiclePaintType["Pearl"] = 2] = "Pearl";
    VehiclePaintType[VehiclePaintType["Matte"] = 3] = "Matte";
    VehiclePaintType[VehiclePaintType["Metal"] = 4] = "Metal";
    VehiclePaintType[VehiclePaintType["Chrome"] = 5] = "Chrome";
})(VehiclePaintType || (VehiclePaintType = {}));
var VehicleDoorIndex;
(function (VehicleDoorIndex) {
    VehicleDoorIndex[VehicleDoorIndex["FrontRightDoor"] = 1] = "FrontRightDoor";
    VehicleDoorIndex[VehicleDoorIndex["FrontLeftDoor"] = 0] = "FrontLeftDoor";
    VehicleDoorIndex[VehicleDoorIndex["BackRightDoor"] = 3] = "BackRightDoor";
    VehicleDoorIndex[VehicleDoorIndex["BackLeftDoor"] = 2] = "BackLeftDoor";
    VehicleDoorIndex[VehicleDoorIndex["Hood"] = 4] = "Hood";
    VehicleDoorIndex[VehicleDoorIndex["Trunk"] = 5] = "Trunk";
})(VehicleDoorIndex || (VehicleDoorIndex = {}));
var VehicleWheelType;
(function (VehicleWheelType) {
    VehicleWheelType[VehicleWheelType["Sport"] = 0] = "Sport";
    VehicleWheelType[VehicleWheelType["Muscle"] = 1] = "Muscle";
    VehicleWheelType[VehicleWheelType["Lowrider"] = 2] = "Lowrider";
    VehicleWheelType[VehicleWheelType["SUV"] = 3] = "SUV";
    VehicleWheelType[VehicleWheelType["Offroad"] = 4] = "Offroad";
    VehicleWheelType[VehicleWheelType["Tuner"] = 5] = "Tuner";
    VehicleWheelType[VehicleWheelType["BikeWheels"] = 6] = "BikeWheels";
    VehicleWheelType[VehicleWheelType["HighEnd"] = 7] = "HighEnd";
    VehicleWheelType[VehicleWheelType["BennysOriginals"] = 8] = "BennysOriginals";
    VehicleWheelType[VehicleWheelType["BennysBespoke"] = 9] = "BennysBespoke";
})(VehicleWheelType || (VehicleWheelType = {}));
var VehicleWheelIndex;
(function (VehicleWheelIndex) {
    VehicleWheelIndex[VehicleWheelIndex["FrontLeftWheel"] = 0] = "FrontLeftWheel";
    VehicleWheelIndex[VehicleWheelIndex["FrontRightWheel"] = 1] = "FrontRightWheel";
    VehicleWheelIndex[VehicleWheelIndex["MidLeftWheel"] = 2] = "MidLeftWheel";
    VehicleWheelIndex[VehicleWheelIndex["MidRightWheel"] = 3] = "MidRightWheel";
    VehicleWheelIndex[VehicleWheelIndex["RearLeftWheel"] = 4] = "RearLeftWheel";
    VehicleWheelIndex[VehicleWheelIndex["RearRightWheel"] = 5] = "RearRightWheel";
    VehicleWheelIndex[VehicleWheelIndex["TrailerMidLeftWheel"] = 45] = "TrailerMidLeftWheel";
    VehicleWheelIndex[VehicleWheelIndex["TrailerMidRightWheel"] = 47] = "TrailerMidRightWheel";
})(VehicleWheelIndex || (VehicleWheelIndex = {}));

// CONCATENATED MODULE: ../[dependancies]/src/utils/Raycast.ts
/**
 *
 * @param number rotation
 * @returns return the direction of the player where is looking at :
 */
function RotationToDirection(rotation) {
    const adjustedRotation = {
        'x': (Math.PI / 180) * rotation.x,
        'y': (Math.PI / 180) * rotation.y,
        'z': (Math.PI / 180) * rotation.z
    };
    const direction = {
        'x': -Math.sin(adjustedRotation.z) * Math.abs(Math.cos(adjustedRotation.x)),
        'y': Math.cos(adjustedRotation.z) * Math.abs(Math.cos(adjustedRotation.x)),
        'z': Math.sin(adjustedRotation.x)
    };
    return direction;
}
/**
 *
 * @param number distance
 * @returns return an array that contain a boolean hit and the current entity hit number :
 */
function RayCastGamePlayCamera(distance) {
    const [rotX, rotY, rotZ] = GetGameplayCamRot(0);
    const [camX, camY, camZ] = GetGameplayCamCoord();
    const direction = RotationToDirection({ 'x': rotX, 'y': rotY, 'z': rotZ });
    const destination = {
        'x': camX + direction.x * distance,
        'y': camY + direction.y * distance,
        'z': camZ + direction.z * distance
    };
    const [retval, hit, endCoords, surfaceNormal, entityHit] = GetShapeTestResult(StartShapeTestRay(camX, camY, camZ, destination.x, destination.y, destination.z, -1, -1, 1));
    return [hit, entityHit];
}

// CONCATENATED MODULE: ../[dependancies]/src/utils/index.ts











// CONCATENATED MODULE: ../[dependancies]/src/index.ts


// CONCATENATED MODULE: ./src/index.ts
var src_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

//Function which return nothing (void) called to draw a 3d text basing on your marker distance :
function showMarkerDistance() {
    const waypoint = GetFirstBlipInfoId(8);
    if (DoesBlipExist(waypoint)) {
        const playerCoord = new Vector3(GetEntityCoords(PlayerPedId(), true));
        const blipVector = new Vector3(GetBlipInfoIdCoord(waypoint));
        const dist = playerCoord.distance(blipVector);
        const tempRoundOverKm = Math.floor(dist) * Math.pow(10, -3);
        if (dist > 999)
            DrawText3D(blipVector.x, blipVector.y, playerCoord.z, `V\n  ${Math.floor(tempRoundOverKm)} kilometres`);
        else if (dist > 0.1 && dist <= 999)
            DrawText3D(blipVector.x, blipVector.y, playerCoord.z, `V\n  ${Math.round(dist)} m`);
    }
}
//Thread used for the marker example : 
setTick(() => src_awaiter(void 0, void 0, void 0, function* () {
    showMarkerDistance();
    showMarkerTarget();
    yield Wait(0);
}));


/***/ })
/******/ ]);