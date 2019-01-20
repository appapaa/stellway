import React, {Component} from 'react';

class Plugin extends Component {
    render() {
        const {className, style,onPress, children} = this.props;
        return (
            <div
                style={style}
                className={className}
                onClick={onPress}>
                {children}
            </div>
        );
    }
}

Plugin.defaultProps = {
    className: 'app-btn',
    onPress: () => {
    }
};
Plugin.defaultName = 'Btm';
export default Plugin;
