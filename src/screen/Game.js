import React, { Component } from 'react';
import Screen from '../components/Screen';
import Map from '../components/Map';
import {connect} from "react-redux";
import _ from 'lodash';
const SIZE_SOT_X = 19;
const SIZE_SOT_Y = 34;
class Plugin extends Component {
    renderMapItem=(type,key)=>{
        const arr = key.split('_');
        return <div
            key={key}
            title={arr[0] + '/'+arr[1]}
            style={{
                left:+arr[0]*SIZE_SOT_X+1,
                top:+arr[1]*SIZE_SOT_Y+9
            }}
            className="app-map-meteor"
        ></div>
    };
  render() {
      const {spaceObj} = this.props;
    return (
      <Screen className="app-game">
          <Map>
              {_.map(spaceObj,this.renderMapItem)}
          </Map>
      </Screen>
    );
  }
}
Plugin.defaultName = 'Game';

const mapStateToProps = (state, props) => {
    return {
        spaceObj: state.game.spaceObj
    }
};

export default connect(mapStateToProps)(Plugin);