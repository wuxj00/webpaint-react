import { uuid } from '../utils/';

export default class Entity{
    constructor(param = {}){
        let { id } = param;
        if (!id) {
            id = uuid();
        }
        this.id = id;
        this._props = null;
    }
    getId(){
        return this.id;
    }
    getAttrs() {
        if (this._props===null) {
            this._props = new Map();
        }
        return this._props;
    }
    getAttr(name) {
        return this.getAttrs().get(name);
    }
    addAtrr(key, val) {
        return this.getAttrs().set(key,val);
    }   
    removeAttr(key) {
        return this.getAttrs().delete(key);
    }
}
