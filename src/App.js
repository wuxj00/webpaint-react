import React, { Component } from 'react';
import './App.css';
import GraphView from './GraphView';
import LayerContainer from './components/layerContainer/LayerContainer';


console.log(GraphView);


class App extends Component {
    render() {
        return (
            <LayerContainer/>
        );
    }
}

export default App;
