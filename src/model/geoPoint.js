import Point from './Point';

export default class GeoPoint extends Point{
    constructor(param){
        super(param);
        let { lon, lat, height } = param;
        this.lon = lon;
        this.lat = lat;
        this.height = height;
    }    
}
