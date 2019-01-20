import React, {Component} from 'react';
import {FaTimesCircle} from 'react-icons/fa';
import {colors} from "../const";
import Btn from "./Btn";
import connect from "react-redux/es/connect/connect";

class Plugin extends Component {
    render() {
        const {goBack} = this.props;
        return <Btn onPress={goBack} className={'app-btn-close'}>
            <FaTimesCircle color={colors.red}/>
        </Btn>;
    }
}

Plugin.defaultProps = {
    onPress: () => {
    }
};
Plugin.defaultName = 'BtnClose';

const mapStateToProps = (state, props) => {
    const {navigation} = state;
    return {
        goBack: navigation.goBack
    }
};

export default connect(mapStateToProps)(Plugin);