import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const appRoot = document.getElementById('root');

class Plugin extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        appRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        appRoot.removeChild(this.el);
    }

    render() {
        const {className, onPress, children} = this.props;
        return ReactDOM.createPortal(
            <div
                className={'app-popup-conteiner'}
                onClick={(e)=> onPress(e)}>
                <div className={'app-popup-wrapper'}>
                </div>
                <div className={className}>
                    {children}
                </div>
            </div>,
            this.el,
        );
    }
}

Plugin.defaultProps = {
    className: 'app-popup',
    onPress: () => {
    }
};
Plugin.defaultName = 'Popup';
export default Plugin;
