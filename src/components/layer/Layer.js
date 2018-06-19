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

require("./style.css");
class LayerView extends Component{
    constructor(props){
        super(props);
    }
    static get propTypes() {
        return {
            name: PropTypes.any
        };
    }
    render(){
        const { name } = this.props;
        return (
            <canvas  className={'layer-item'} view-name={name} width={'100px'} height={'100px'} ref={name} >
                { name }
            </canvas>
        );
    }
}

export default LayerView;
