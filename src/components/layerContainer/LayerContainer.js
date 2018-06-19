/**
 * File Created by wxj at 2018/6/19.
 * Copyright 2016 CMCC Corporation Limited.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of
 * ZYHY Company. ("Confidential Information").  You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license.
 *
 *
 * @Desc
 * @author wxj
 * @date 2018/6/19
 * @version
 */
import React,{Component} from 'react';
import LayerView from '../layer/Layer';

require('./style.css');
class LayerContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            layerNames: ['map-layer', 'vector-layer', 'edit-layer', 'trans-layer', 'selection-layer']
        };
    }
    componentDidMount(){
    }
    componentDidUpdate(){

    }
    render(){
        const { layerNames } = this.state;
        return (
            <div className={'layer-wrapper'} >
                {
                    layerNames.map((name,index) =>
                            <LayerView key={index} name={name}/>
                    )
                }
            </div>
        );
    }
}
export default LayerContainer;
