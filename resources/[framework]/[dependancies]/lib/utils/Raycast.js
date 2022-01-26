"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RayCastGamePlayCamera = exports.RotationToDirection = void 0;
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
exports.RotationToDirection = RotationToDirection;
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
exports.RayCastGamePlayCamera = RayCastGamePlayCamera;
