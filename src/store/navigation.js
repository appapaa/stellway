import _ from 'lodash';

export const SET_STATE = 'SET_NAVIGATION';
export const initialState = {
    source: [],
    plugin: 'Menu',
    history: []

};
export const goTo = (plugin) => (dispatch, getState) => {
    if (plugin === 'Exit') {
        if (window.location.hash) {
            return window.location.hash = '';
        }
        return
    }
    const history = getState().navigation.history.slice();
    const prevPlugin = getState().navigation.plugin;
    history.push(prevPlugin);
    dispatch({
        type: SET_STATE,
        data: {plugin, history}
    });
};
export const goBack = () => (dispatch, getState) => {
    const {history} = getState().navigation;
    const plugin = _.last(history);
    dispatch({
        type: SET_STATE,
        data: {
            plugin,
            history: history.slice().splice(-1)
        }
    })
};
export const exit = () => (dispatch, getState) => {
    if(window.location.hash){
        return
    }
    if (window.confirm("Выйти из игры?")) {
        if (navigator.app) {
            navigator.app.exitApp();
        } else if (navigator.device) {
            navigator.device.exitApp();
        } else {
            window.close();
        }
    } else {
        window.location.hash = 'start';
    }
};