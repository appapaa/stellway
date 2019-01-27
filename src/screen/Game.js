import React, {Component} from 'react';
import Screen from '../components/Screen';
import Map from '../components/Map';
import {connect} from "react-redux";
import {sot} from "../const";
import _ from 'lodash';
const ZOOM = 2;
const SIZE_SOT_X = sot.x*ZOOM;
const SIZE_SOT_Y = sot.y*ZOOM;

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
    renderMapShip = (type, key) => {
        return <div
            key={key}
            title={key}
            style={this._getPos(key)}
            className="app-map-ship-1"
        ></div>
    };

    render() {
        const {spaceObj, mapGegs,mapShip} = this.props;
        return (
            <Screen className="app-game">
                <Map>
                    {_.map(spaceObj, this.renderMapItem)}
                    {_.map(mapGegs, this.renderMapGegs)}
                    {_.map(mapShip, this.renderMapShip)}
                </Map>
            </Screen>
        );
    }
}

Plugin.defaultName = 'Game';

const mapStateToProps = (state, props) => {
    return {
        spaceObj: state.game.spaceObj,
        mapGegs: state.game.mapGegs,
        mapShip: state.game.mapShip,
    }
};

export default connect(mapStateToProps)(Plugin);