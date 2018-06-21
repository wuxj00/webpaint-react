import Entity from '../model/Entity';
import proxy from '../proxy';
export default class LayerBase extends Entity{
    constructor(param){
        super(param);
        this.proxy = proxy;
        this.name = this.constructor.name;
        proxy.subscribe(()=>{
            const {action} = proxy.getState();
            console.log(action);
        });
    }
    /**
     * 获取视图Dom
     */
    getName(){
        return this.name;
    }
    redraw(){
    }
    clear(){
    }
    destroy(){
    }
}
