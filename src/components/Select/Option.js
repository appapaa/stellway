import React, {Component} from 'react';

class Plugin extends Component {
    render() {
        const {className, onPress, text} = this.props;
        return (
            <div
                className={className}
                onClick={onPress}>
                {text}
            </div>
        );
    }
}

Plugin.defaultProps = {
    className: 'app-select-option',
    onPress: () => {
    }
};
Plugin.defaultName = 'Option';
export default Plugin;
