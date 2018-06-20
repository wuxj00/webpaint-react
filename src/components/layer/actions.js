import {LAYER_CLEAR, LAYER_REDRAW} from './actionTypes.js';

export const clearLayer = () => ({
    type: LAYER_CLEAR,
    list:{
        nodes: [],
        edges: [],
        planes: []
    }
});

export const redrawLayer = (name) => ({
    type: LAYER_REDRAW,
    name: name
});
