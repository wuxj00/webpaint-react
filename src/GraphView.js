import { LayerBase } from './layers/';
import { nodes } from './model/';

import proxy from './proxy';
proxy.dispatch({
    type: 'LAYER/REDRAW',
    name: 'anim-layer'
});
export default {
    LayerBase,
    nodes
};
