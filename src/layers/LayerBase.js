export default class LayerBase {
    constructor(param){
        console.log(param);
    }
    /**
     * 获取视图Dom
     */
    getView() {
        return 'hello world';
    }
    redraw(){
    }
    clear(){
    }
}
