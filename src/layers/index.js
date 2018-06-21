import LayerBase from './LayerBase';
import MapLayer from './MapLayer';
import VectorLayer from './VectorLayer';
import AnimLayer from './AnimLayer';
import SelectionLayer from './SelectionLayer';
import EditLayer from './EditLayer';

const layers = [
    MapLayer.name,
    VectorLayer.name,
    AnimLayer.name,
    SelectionLayer.name,
    EditLayer.name
];
export {
    LayerBase,
    MapLayer,
    VectorLayer,
    AnimLayer,
    SelectionLayer,
    EditLayer,
    layers
};
