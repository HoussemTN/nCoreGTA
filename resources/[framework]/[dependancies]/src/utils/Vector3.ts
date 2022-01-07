export class Vector3
{
    private points:Array<number>;
   
    constructor(points:Array<number> = [0, 0, 0])
    {
        this.points = points;
    }

    get x():number {
        return this.points[0];
    }

    get y():number {
        return this.points[1];
    }

    get z():number {
        return this.points[2];
    }

    get magnitude():number {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }

    get normal():number {
        return Math.sqrt(this.magnitude);
    }

    set x(v:number) {
        this.points[0] = v;
    }

    set y(v:number) {
        this.points[1] = v;
    }

    set z(v:number) {
        this.points[2] = v;
    }


    /**
     * 
     * @returns Allow you to convert your vector3 to a string and be able to print it : (usefull for debugging)
     */
    toString():string {
        return 'vec3:(' + this.points.join(', ') + ')';
    }


    /**
     * 
     * @param Vector3 other
     * @returns add your vector by the vector parameter.
     */
    add(other:Vector3 ):Vector3  {
        return new Vector3 ([
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
    subtract(other:Vector3 ):Vector3  {
        return new Vector3 ([
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
    multiply(other:Vector3):Vector3 {
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
    divide(other:Vector3):Vector3 {
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
    distance(otherDistance:Vector3):number {
        let dx:number = this.x - otherDistance.x,
            dy:number = this.y - otherDistance.y,
            dz:number = this.z - otherDistance.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }


    /**
     * 
     * @param min number
     * @param max number
     * @returns return a random floor value between your min and max set in parameter. 
     */
    static randomNumber(min: number, max: number)
    {
        return Math.floor(Math.random() * (max - min) + min);
    }

    /**
     * 
     * @param num number
     * @param min number
     * @param max number
     * @returns The float result between the min and max values.
     */
    static clamp(num: number, min: number, max: number): number {
        return num <= min ? min : num >= max ? max : num;
    }

    /**
     * 
     * @param a number Start value.
     * @param b number End value.
     * @param t number Value used to interpolate between a and b.
     * @returns Interpolated value, equals to a + (b - a) * t. 
     */
    static lerp(a : number, b : number, t : number) : number
    {
        return a * (1-t) + b*t;
    }

}


