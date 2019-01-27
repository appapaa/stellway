import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.scss';
import Menu from './screen/Menu';
import GameSettings from './screen/GameSettings';
import Game from './screen/Game';
class App extends Component {
  renderPlugin(){
      const {plugin} = this.props;
      switch (plugin) {
          case 'Menu' :
            return <Menu/>;
          case 'GameSettings' :
            return <GameSettings/>;
          case 'Game' :
            return <Game/>;
          default: return <div>Нет такого экрана</div>
      }
  }
  componentDidMount(){
      window.addEventListener("hashchange", this.props.exit, false);
  }

  render() {
    return (
      <div className="app">
          {this.renderPlugin()}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
        plugin: state.navigation.plugin,
        exit: state.navigation.exit,
    }
};

export default connect(mapStateToProps)(App);
