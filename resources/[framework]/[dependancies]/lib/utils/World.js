"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = exports.WeatherTypeHash = exports.CloudHat = void 0;
const Vector3_1 = require("./Vector3");
var CloudHat;
(function (CloudHat) {
    CloudHat[CloudHat["Unknown"] = 1] = "Unknown";
    CloudHat[CloudHat["Altostratus"] = 2] = "Altostratus";
    CloudHat[CloudHat["Cirrus"] = 3] = "Cirrus";
    CloudHat[CloudHat["Cirrocumulus"] = 4] = "Cirrocumulus";
    CloudHat[CloudHat["Clear"] = 5] = "Clear";
    CloudHat[CloudHat["Cloudy"] = 6] = "Cloudy";
    CloudHat[CloudHat["Contrails"] = 7] = "Contrails";
    CloudHat[CloudHat["Horizon"] = 8] = "Horizon";
    CloudHat[CloudHat["HorizonBand1"] = 9] = "HorizonBand1";
    CloudHat[CloudHat["HorizonBand2"] = 10] = "HorizonBand2";
    CloudHat[CloudHat["HorizonBand3"] = 11] = "HorizonBand3";
    CloudHat[CloudHat["Horsey"] = 12] = "Horsey";
    CloudHat[CloudHat["Nimbus"] = 13] = "Nimbus";
    CloudHat[CloudHat["Puffs"] = 14] = "Puffs";
    CloudHat[CloudHat["Rain"] = 15] = "Rain";
    CloudHat[CloudHat["Snowy"] = 16] = "Snowy";
    CloudHat[CloudHat["Stormy"] = 17] = "Stormy";
    CloudHat[CloudHat["Stratoscumulus"] = 18] = "Stratoscumulus";
    CloudHat[CloudHat["Stripey"] = 19] = "Stripey";
    CloudHat[CloudHat["Shower"] = 20] = "Shower";
    CloudHat[CloudHat["Wispy"] = 21] = "Wispy";
})(CloudHat = exports.CloudHat || (exports.CloudHat = {}));
var WeatherTypeHash;
(function (WeatherTypeHash) {
    WeatherTypeHash[WeatherTypeHash["Unknown"] = -1] = "Unknown";
    WeatherTypeHash[WeatherTypeHash["ExtraSunny"] = -1750463879] = "ExtraSunny";
    WeatherTypeHash[WeatherTypeHash["Clear"] = 916995460] = "Clear";
    WeatherTypeHash[WeatherTypeHash["Neutral"] = -1530260698] = "Neutral";
    WeatherTypeHash[WeatherTypeHash["Smog"] = 282916021] = "Smog";
    WeatherTypeHash[WeatherTypeHash["Foggy"] = -1368164796] = "Foggy";
    WeatherTypeHash[WeatherTypeHash["Clouds"] = 821931868] = "Clouds";
    WeatherTypeHash[WeatherTypeHash["Overcast"] = -1148613331] = "Overcast";
    WeatherTypeHash[WeatherTypeHash["Clearing"] = 1840358669] = "Clearing";
    WeatherTypeHash[WeatherTypeHash["Raining"] = 1420204096] = "Raining";
    WeatherTypeHash[WeatherTypeHash["ThunderStorm"] = -1233681761] = "ThunderStorm";
    WeatherTypeHash[WeatherTypeHash["Blizzard"] = 669657108] = "Blizzard";
    WeatherTypeHash[WeatherTypeHash["Snowing"] = -273223690] = "Snowing";
    WeatherTypeHash[WeatherTypeHash["Snowlight"] = 603685163] = "Snowlight";
    WeatherTypeHash[WeatherTypeHash["Christmas"] = -1429616491] = "Christmas";
    WeatherTypeHash[WeatherTypeHash["Halloween"] = -921030142] = "Halloween";
})(WeatherTypeHash = exports.WeatherTypeHash || (exports.WeatherTypeHash = {}));
class World {
    /**
     * Load a model by hash name.
     * @param string model
     */
    LoadModel(model) {
        RequestModel(GetHashKey(model));
        while (!HasModelLoaded(GetHashKey(model)))
            Wait(1);
    }
    /**
     *
     * @param string model
     * @param number[] coords
     * @param boolean frozen
     * @param boolean isNetwork
     * @param boolean netMissionEntity
     * @returns handle (fwScriptGuid index) for the object, or 0 if the object failed to be created.
     */
    SpawnProp(model, coords, frozen, isNetwork, netMissionEntity) {
        this.LoadModel(model);
        const entity = CreateObject(GetHashKey(model), coords[0], coords[1], coords[2], isNetwork, netMissionEntity, false);
        FreezeEntityPosition(entity, frozen);
        PlaceObjectOnGroundProperly(entity);
        return entity;
    }
    /**
    * Get the current date in the world.
    *
    * @returns The current date.
    */
    static get CurrentDate() {
        const year = GetClockYear();
        const month = GetClockMonth();
        const day = GetClockDayOfMonth();
        const hour = GetClockHours();
        const minutes = GetClockMinutes();
        const seconds = GetClockSeconds();
        return new Date(year, month, day, hour, minutes, seconds);
    }
    /**
     * Set the current date of the world.
     */
    static set CurrentDate(date) {
        SetClockDate(date.getDate(), date.getMonth(), date.getFullYear());
        SetClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
    }
    /**
    * True turns off all artificial light sources in the map: buildings, street lights, car lights, etc. False turns them back on.
    * @param bool True or False.
    */
    static set Blackout(bool) {
        SetBlackout(bool);
    }
    /**
   * Get the current cloud hat.
   *
   * @returns The current cloud hat type.
   */
    static get CloudHat() {
        return this.currentCloudHat;
    }
    /**
     * Set the current cloud hat.
     *
     * @param value The type of cloud hat.
     */
    static set CloudHat(value) {
        this.currentCloudHat = value;
        if (this.currentCloudHat === CloudHat.Unknown) {
            this.currentCloudHat = CloudHat.Clear;
            ClearCloudHat();
            return;
        }
        SetCloudHatTransition(this.cloudHatDict.has(this.currentCloudHat)
            ? this.cloudHatDict.get(this.currentCloudHat)
            : '', 3);
    }
    /**
     * Get the opacity of current cloud hat. Value is between 0-1.
     *
     * @returns The current cloud opacity between 0.0 and 1.0
     */
    static get CloudHatOpacity() {
        return GetCloudHatOpacity();
    }
    /**
     * Set opacity of current cloud hat between 0-1.
     *
     * @param value Opacity between 0.0 and 1.0
     */
    static set CloudHatOpacity(value) {
        SetCloudHatOpacity(Vector3_1.Vector3.clamp(value, 0, 1));
    }
}
exports.World = World;
World.currentCloudHat = CloudHat.Clear;
World.cloudHatDict = new Map([
    [CloudHat.Unknown, 'Unknown'],
    [CloudHat.Altostratus, 'altostratus'],
    [CloudHat.Cirrus, 'Cirrus'],
    [CloudHat.Cirrocumulus, 'cirrocumulus'],
    [CloudHat.Clear, 'Clear 01'],
    [CloudHat.Cloudy, 'Cloudy 01'],
    [CloudHat.Contrails, 'Contrails'],
    [CloudHat.Horizon, 'Horizon'],
    [CloudHat.HorizonBand1, 'horizonband1'],
    [CloudHat.HorizonBand2, 'horizonband2'],
    [CloudHat.HorizonBand3, 'horizonband3'],
    [CloudHat.Horsey, 'horsey'],
    [CloudHat.Nimbus, 'Nimbus'],
    [CloudHat.Puffs, 'Puffs'],
    [CloudHat.Rain, 'RAIN'],
    [CloudHat.Snowy, 'Snowy 01'],
    [CloudHat.Stormy, 'Stormy 01'],
    [CloudHat.Stratoscumulus, 'stratoscumulus'],
    [CloudHat.Stripey, 'Stripey'],
    [CloudHat.Shower, 'shower'],
    [CloudHat.Wispy, 'Wispy'],
]);
World.weatherDict = [
    'EXTRASUNNY',
    'CLEAR',
    'CLOUDS',
    'SMOG',
    'FOGGY',
    'OVERCAST',
    'RAIN',
    'THUNDER',
    'CLEARING',
    'NEUTRAL',
    'SNOW',
    'BLIZZARD',
    'SNOWLIGHT',
    'XMAS',
];
