import Entity from './Entity';

export default class Point extends Entity{
    constructor(param){
        super(param);
        let { x, y, z } = param;
        this.x = x;
        this.y = y;
        this.z = z;
    }    
}
