export declare class Vector3 {
    private points;
    constructor(points?: Array<number>);
    get x(): number;
    get y(): number;
    get z(): number;
    get magnitude(): number;
    get normal(): number;
    set x(v: number);
    set y(v: number);
    set z(v: number);
    /**
     *
     * @returns Allow you to convert your vector3 to a string and be able to print it : (usefull for debugging)
     */
    toString(): string;
    /**
     *
     * @param Vector3 other
     * @returns add your vector by the vector parameter.
     */
    add(other: Vector3): Vector3;
    /**
     *
     * @param Vector3 other
     * @returns subtract your vector by the vector parameter.
     */
    subtract(other: Vector3): Vector3;
    /**
     *
     * @param Vector3 other
     * @returns multiply your vector by the vector parameter.
     */
    multiply(other: Vector3): Vector3;
    /**
     *
     * @param Vector3 other
     * @returns Divides your vector by the vector parameter.
     */
    divide(other: Vector3): Vector3;
    /**
     *
     * @param Vector3 otherDistance
     * @returns Returns the distance between your entity and the otherEntity set as parameter.
     */
    distance(otherDistance: Vector3): number;
    /**
     *
     * @param min number
     * @param max number
     * @returns return a random floor value between your min and max set in parameter.
     */
    static randomNumber(min: number, max: number): number;
    /**
     *
     * @param num number
     * @param min number
     * @param max number
     * @returns The float result between the min and max values.
     */
    static clamp(num: number, min: number, max: number): number;
    /**
     *
     * @param a number Start value.
     * @param b number End value.
     * @param t number Value used to interpolate between a and b.
     * @returns Interpolated value, equals to a + (b - a) * t.
     */
    static lerp(a: number, b: number, t: number): number;
}
