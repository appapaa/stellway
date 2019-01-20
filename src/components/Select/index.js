import React, {PureComponent} from 'react';
import _ from 'lodash';
import Popup from '../Popup';
import Option from './Option';
import {colors} from '../../const';
import {FaAngleDown} from 'react-icons/fa'

class Plugin extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    _show = () => {
        this.setState({visible: true});
    };
    _hide = () => {
        this.setState({visible: false});
    };

    renderOption=({id,text}) =>{
        return <Option
            key={id}
            text={text}
            onPress={() => this.props.onPress(id)}
        />
    };

    render() {
        const {
            className,
            title,
            options,
            value
        } = this.props;
        const {visible} = this.state;
        return (
            <React.Fragment>
                <div
                    className={className}
                    onClick={this._show}>
                    <div className={className + '-title'}>
                        {title}
                    </div>
                    <div className={className + '-value'}>
                        <FaAngleDown color={colors.blue}/>
                        <span>
                            {value >= 0 && options && _.find(options, {id: value}).text}
                        </span>
                    </div>
                </div>
                {visible && <Popup
                    onPress={this._hide}
                >
                    {_.map(options, this.renderOption)}
                </Popup>}
            </React.Fragment>
        );
    }
}

Plugin.defaultProps = {
    className: 'app-select',
    onPress: () => {
    }
};
Plugin.defaultName = 'Select';
export default Plugin;
