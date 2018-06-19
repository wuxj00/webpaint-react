import Entity from '../model/Entity';
export default class LayerBase extends Entity{
    constructor(param){
        super(param);
        this.view = null;
    }
    /**
     * 获取视图Dom
     */
    getView() {
        return 'hello world';
    }
    getContext(){

    }
    redraw(){
    }
    clear(){
        const ctx = this.getContext();
        ctx && ctx.clear();
    }
}
