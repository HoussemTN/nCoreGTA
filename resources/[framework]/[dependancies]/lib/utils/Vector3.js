"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector3 = void 0;
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
exports.Vector3 = Vector3;
