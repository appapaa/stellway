import React, {Component} from 'react';

class Plugin extends Component {
    render() {
        const {className,children} = this.props;
        return (
            <div
                className={className}
            >
                {children}
            </div>
        );
    }
}

Plugin.defaultProps = {
    className: 'app-map',
    onPress: () => {
    }
};
Plugin.defaultName = 'Map';
export default Plugin;
