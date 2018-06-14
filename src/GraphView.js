import { LayerBase } from './layers/';
import { nodes } from './model/';

const { NodeBase } = nodes;

const inst = new NodeBase();
console.log(inst.getId());
const layer = new LayerBase();
console.log(layer.getView()); 
export default {

};
