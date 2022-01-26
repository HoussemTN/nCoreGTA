/**
 *
 * @param number rotation
 * @returns return the direction of the player where is looking at :
 */
export declare function RotationToDirection(rotation: any): {
    x: number;
    y: number;
    z: number;
};
/**
 *
 * @param number distance
 * @returns return an array that contain a boolean hit and the current entity hit number :
 */
export declare function RayCastGamePlayCamera(distance: any): any[];
