export declare enum CloudHat {
    Unknown = 1,
    Altostratus = 2,
    Cirrus = 3,
    Cirrocumulus = 4,
    Clear = 5,
    Cloudy = 6,
    Contrails = 7,
    Horizon = 8,
    HorizonBand1 = 9,
    HorizonBand2 = 10,
    HorizonBand3 = 11,
    Horsey = 12,
    Nimbus = 13,
    Puffs = 14,
    Rain = 15,
    Snowy = 16,
    Stormy = 17,
    Stratoscumulus = 18,
    Stripey = 19,
    Shower = 20,
    Wispy = 21
}
export declare enum WeatherTypeHash {
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
    Halloween = -921030142
}
export declare abstract class World {
    /**
     * Load a model by hash name.
     * @param string model
     */
    LoadModel(model: string): void;
    /**
     *
     * @param string model
     * @param number[] coords
     * @param boolean frozen
     * @param boolean isNetwork
     * @param boolean netMissionEntity
     * @returns handle (fwScriptGuid index) for the object, or 0 if the object failed to be created.
     */
    SpawnProp(model: string, coords: number[], frozen: boolean, isNetwork: boolean, netMissionEntity: boolean): number;
    /**
    * Get the current date in the world.
    *
    * @returns The current date.
    */
    static get CurrentDate(): Date;
    /**
     * Set the current date of the world.
     */
    static set CurrentDate(date: Date);
    /**
    * True turns off all artificial light sources in the map: buildings, street lights, car lights, etc. False turns them back on.
    * @param bool True or False.
    */
    static set Blackout(bool: boolean);
    /**
   * Get the current cloud hat.
   *
   * @returns The current cloud hat type.
   */
    static get CloudHat(): CloudHat;
    /**
     * Set the current cloud hat.
     *
     * @param value The type of cloud hat.
     */
    static set CloudHat(value: CloudHat);
    /**
     * Get the opacity of current cloud hat. Value is between 0-1.
     *
     * @returns The current cloud opacity between 0.0 and 1.0
     */
    static get CloudHatOpacity(): number;
    /**
     * Set opacity of current cloud hat between 0-1.
     *
     * @param value Opacity between 0.0 and 1.0
     */
    static set CloudHatOpacity(value: number);
    private static currentCloudHat;
    private static cloudHatDict;
    private static weatherDict;
}
