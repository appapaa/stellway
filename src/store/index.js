import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import getReducer from './getReducer';

import {combineReducers} from 'redux'
import * as userStore from './users';
import * as navigationStore from './navigation';
import * as gameStore from './game';

const crutch = {
    dispatch: () => {
    }
};
const users = getReducer(userStore, crutch);
const navigation = getReducer(navigationStore, crutch);
const game = getReducer(gameStore, crutch);
const reducer = combineReducers({
    users,
    game,
    navigation
});
const middleware = applyMiddleware(
    promise,
    logger,
    thunk
);
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware
);
crutch.dispatch = store.dispatch;

export {
    store
};