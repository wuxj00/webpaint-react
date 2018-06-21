import {createStore} from 'redux';
import reducer from './components/layer/reducer';
export default createStore(reducer, {
    action: null,//事件
    layers: {}  ,  //需要动作的图层
    list: {}     //关联的视图对象
});
