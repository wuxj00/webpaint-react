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
import PropTypes from 'prop-types';
import proxy from '../../proxy';
import {LAYER_CLEAR} from '../../actionTypes';


require('./style.css');
class LayerView extends Component{
    constructor(props){
        super(props);
        proxy.subscribe(()=>{
            const { layers, action} = proxy.getState();
            const {name,width,height} = this.props;
            if (layers&&(layers[name]===true)
                && action
                && (action.type===LAYER_CLEAR)) {  
                          
                this.getContext().clearRect(
                    0,
                    0,
                    Number.parseFloat(width),
                    Number.parseFloat(height));
            }
        });
    }
    getContext(){
        const el = this[this.props.name];
        return el.getContext('2d');
    }
    static get propTypes() {
        return {
            name: PropTypes.any,
            height: PropTypes.string,
            width: PropTypes.string
        };
    }
    render(){
        const { name, height, width } = this.props;
        return (
            <canvas  className={'layer-item'} 
                view-name={name} 
                width={width} 
                height={height} 
                ref={(c)=>{this.el = c;}} >
            </canvas>
        );
    }
}

export default LayerView;
