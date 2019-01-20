import React, { Component } from 'react';
import Screen from '../components/Screen';
import MenuBtn from '../components/MenuBtn';
import {connect} from "react-redux";

class Plugin extends Component {
  renderBtn = (btn)=> <MenuBtn
      key={btn.id}
      text={btn.text}
      onPress={()=>this.props.goTo(btn.id)}
  />;
  render() {
    return (
      <Screen className="app-menu">
          {btns.map(this.renderBtn)}
      </Screen>
    );
  }
}
const btns = [
    {id:'GameSettings',text:'новая игра'},
    {id:'SavedGames',text:'загрузка'},
    {id:'Settings',text:'опции'},
    {id:'Feedback',text:'обратня связь'},
    {id:'Exit',text:'выход'},
];
Plugin.defaultName = 'MenuScreen';

const mapStateToProps = (state, props) => {
    return {
        goTo: state.navigation.goTo
    }
};

export default connect(mapStateToProps)(Plugin);
