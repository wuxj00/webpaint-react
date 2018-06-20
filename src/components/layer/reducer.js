import {LAYER_CLEAR, LAYER_REDRAW}from '../layer/actionsTypes';

export default (state = [], action) => {
    switch(action.type) {
        case LAYER_CLEAR: {
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
