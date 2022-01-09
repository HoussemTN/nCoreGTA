import { Vector3 } from "./Vector3";

export enum CloudHat {
    Unknown = 1,
    Altostratus,
    Cirrus,
    Cirrocumulus,
    Clear,
    Cloudy,
    Contrails,
    Horizon,
    HorizonBand1,
    HorizonBand2,
    HorizonBand3,
    Horsey,
    Nimbus,
    Puffs,
    Rain,
    Snowy,
    Stormy,
    Stratoscumulus,
    Stripey,
    Shower,
    Wispy,
}

export enum WeatherTypeHash {
    Unknown = -1,
    ExtraSunny = -1750463879,
    Clear = 916995460,
    Neutral = -1530260698,
    Smog = 282916021,
    Foggy = -1368164796,
    Clouds = 821931868,
    Overcast = -1148613331,
    Clearing = 1840358669,
    Raining = 1420204096,
    ThunderStorm = -1233681761,
    Blizzard = 669657108,
    Snowing = -273223690,
    Snowlight = 603685163,
    Christmas = -1429616491,
    Halloween = -921030142,
}

export abstract class World 
{
    /**
     * Load a model by hash name.
     * @param string model 
     */
    LoadModel(model : string) : void
    {
        RequestModel(GetHashKey(model))
        while (!HasModelLoaded(GetHashKey(model))) Wait(1);
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
    SpawnProp(model : string, coords : number[], frozen : boolean, isNetwork : boolean, netMissionEntity : boolean) : number
    {
        this.LoadModel(model)
        const entity = CreateObject(GetHashKey(model), coords[0], coords[1], coords[2], isNetwork, netMissionEntity, false);
        FreezeEntityPosition(entity, frozen)
        PlaceObjectOnGroundProperly(entity)
        return entity
    }

   /**
   * Get the current date in the world.
   *
   * @returns The current date.
   */
    public static get CurrentDate(): Date 
    {
        const year      = GetClockYear();
        const month     = GetClockMonth();
        const day       = GetClockDayOfMonth();
        const hour      = GetClockHours();
        const minutes   = GetClockMinutes();
        const seconds   = GetClockSeconds();
        return new Date(year, month, day, hour, minutes, seconds);
    }

    /**
     * Set the current date of the world.
     */
    public static set CurrentDate(date: Date) 
    {
        SetClockDate(date.getDate(), date.getMonth(), date.getFullYear());
        SetClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
    }
	
     /**
     * True turns off all artificial light sources in the map: buildings, street lights, car lights, etc. False turns them back on.
     * @param bool True or False.
     */
    public static set Blackout(bool: boolean) {
        SetBlackout(bool);
    }

      /**
     * Get the current cloud hat.
     *
     * @returns The current cloud hat type.
     */
    public static get CloudHat(): CloudHat {
        return this.currentCloudHat;
    }

    /**
     * Set the current cloud hat.
     *
     * @param value The type of cloud hat.
     */
    public static set CloudHat(value: CloudHat) {
        this.currentCloudHat = value;
        if (this.currentCloudHat === CloudHat.Unknown) {
        this.currentCloudHat = CloudHat.Clear;
        ClearCloudHat();
        return;
        }

        SetCloudHatTransition(
        this.cloudHatDict.has(this.currentCloudHat)
            ? this.cloudHatDict.get(this.currentCloudHat)
            : '',
        3,
        );
    }

    /**
     * Get the opacity of current cloud hat. Value is between 0-1.
     *
     * @returns The current cloud opacity between 0.0 and 1.0
     */
    public static get CloudHatOpacity(): number {
        return GetCloudHatOpacity();
    }

    /**
     * Set opacity of current cloud hat between 0-1.
     *
     * @param value Opacity between 0.0 and 1.0
     */
    public static set CloudHatOpacity(value: number) {
        SetCloudHatOpacity(Vector3.clamp(value, 0, 1));
    }

    private static currentCloudHat: CloudHat = CloudHat.Clear;
    private static cloudHatDict: Map<CloudHat, string> = new Map<CloudHat, string>([
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

    private static weatherDict: string[] = [
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

}