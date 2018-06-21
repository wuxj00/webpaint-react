import { LayerBase, MapLayer } from './layers/';
import { nodes } from './model/';
import {LAYER_CLEAR} from './actionTypes';
import proxy from './proxy';

setTimeout(()=>{
    proxy.dispatch({
        type: LAYER_CLEAR,
        name: MapLayer.name
    });
},300);
    
export default {
    LayerBase,
    nodes
};
