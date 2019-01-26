import React, {Component} from 'react';
import Screen from '../components/Screen';
import Map from '../components/Map';
import {connect} from "react-redux";
import _ from 'lodash';
const ZOOM = 2;
const SIZE_SOT_X = 30*ZOOM;
const SIZE_SOT_Y = 36*ZOOM;

const SIZE_SOT_DX = SIZE_SOT_X/2;
const SIZE_SOT_DY = SIZE_SOT_Y/2;

class Plugin extends Component {
    _getPos(key){
        const arr = key.split('_');
        return ({
            left: +arr[0] * SIZE_SOT_X +SIZE_SOT_DX,
            top: +arr[1] * SIZE_SOT_Y + (arr[0]%2)*SIZE_SOT_Y/2 + SIZE_SOT_DY
        });
    }
    renderMapItem = (type, key) => {
        return <div
            key={key}
            title={key}
            style={this._getPos(key)}
            className="app-map-meteor"
        ></div>
    };
    renderMapGegs = (type, key) => {
        return <div
            key={key}
            title={key}
            style={this._getPos(key)}
            className="app-map-gegs"
        ></div>
    };

    render() {
        const {spaceObj, mapGegs} = this.props;
        return (
            <Screen className="app-game">
                <Map>
                    {_.map(spaceObj, this.renderMapItem)}
                    {_.map(mapGegs, this.renderMapGegs)}
                </Map>
            </Screen>
        );
    }
}

Plugin.defaultName = 'Game';

const mapStateToProps = (state, props) => {
    return {
        spaceObj: state.game.spaceObj,
        mapGegs: state.game.mapGegs
    }
};

export default connect(mapStateToProps)(Plugin);