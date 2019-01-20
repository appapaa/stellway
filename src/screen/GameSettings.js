import React, {Component} from 'react';
import Screen from '../components/Screen';
import Select from '../components/Select';
import Btn from '../components/Btn';
import BtnClose from '../components/BtnClose';
import {FaCheckCircle} from 'react-icons/fa';
import {colors} from '../const'
import {connect} from "react-redux";

class Plugin extends Component {
    renderOptions = (btn) => <Select
        key={btn.id}
        title={btn.text}
        onPress={(v)=>this.props.setParams({[btn.id]:v})}
        options={btn.options}
        value={this.props[btn.id]}
    />;
    startGame =()=>{
        const {goTo,generateGame} = this.props;
        generateGame();
        goTo('Game')
    };
    render() {
        return (
            <Screen className="app-game-settings">
                {options.map(this.renderOptions)}
                <Btn onPress={this.startGame} className={'app-btn-game'}>
                    <FaCheckCircle color={colors.green}/>
                </Btn>
                <BtnClose/>
            </Screen>
        );
    }
}
const options_size=[
    {id:16,text:'малый 16X16'},
    {id:32,text:'средний 32X32'},
    {id:64,text:'большой 64X64'},
];
const options_game=[
    {id:2,text:'2 игрока'},
    {id:3,text:'3 игрока'},
    {id:4,text:'5 игрока'},
    {id:5,text:'5 игроков'},
    {id:6,text:'6 игроков'},
    {id:7,text:'7 игроков'},
    {id:8,text:'8 игроков'},
];
const options_planet=[
    {id:1,text:'мало'},
    {id:2,text:'достаточно'},
    {id:3,text:'много'},
];
const options = [
    {id: 'size', text: 'размер карты',options:options_size},
    {id: 'userCnt', text: 'игроков',options:options_game},
    {id: 'planetCntForUser', text: 'миров',options:options_planet},
];
Plugin.defaultName = 'GameSettings';

const mapStateToProps = (state, props) => {
    const {game} = state;
    return {
        size: game.size,
        userCnt: game.userCnt,
        planetCntForUser: game.planetCntForUser,
        setParams:game.setParams,
        generateGame:game.generateGame,
        goTo: state.navigation.goTo
    }
};

export default connect(mapStateToProps)(Plugin);
