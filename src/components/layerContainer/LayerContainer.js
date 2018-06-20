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
import {layers} from '../../layers/';

require('./style.css');
const win = window;
class LayerContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: '0px',
            height: '0px'
        };
        this.resizeHandler.bind(this);
        win.addEventListener('resize',()=>{
            this.resizeHandler();
        });
    }
    resizeHandler(){
        const el = this.el;
        if(el instanceof HTMLElement) {
            const bbox = el.getBoundingClientRect();
            this.setState({
                width: `${bbox.width}px`,
                height: `${bbox.height}px`
            });
        } 
    }
    componentWillMount() {
    }
    componentDidMount(){
        this.resizeHandler();       
    }
    componentDidUpdate(){
    }
    render(){
        const { width, height } = this.state;
        return (
            <div className={'layer-wrapper'} ref={(c) => { this.el = c; }}>
                {
                    layers.map((name,index) =>
                        <LayerView key={index} name={name} width={width} height={height}/>
                    )
                }
            </div>
        );
    }
    componentWillUnmount(){
        win.removeEventListener('resize',this.resizeHandler);
    }
}
export default LayerContainer;
