import {LAYER_CLEAR, LAYER_REDRAW}from '../../actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case LAYER_CLEAR: {
            const {layers} = state;
            layers['MapLayer'] = true;
            state[action] = action;
            return state;
        }
        case LAYER_REDRAW: {
            return state;
        }
        default: {
            return state;
        }
    }
};
