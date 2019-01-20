import React, {Component} from 'react';
import  Btn from './Btn';
class Plugin extends Component {
    render() {
        return (
            <Btn
                onPress={this.props.onPress}
                className="app-menu-btn">
                {this.props.text}
            </Btn>
        );
    }
}

Plugin.defaultName = 'MenuBtn';
export default Plugin;
