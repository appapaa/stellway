import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from './store';
import {Provider} from 'react-redux';
import App from './App';


const startApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root'));
};

if (window.cordova) {
    document.addEventListener('deviceready', startApp, false);
} else {
    startApp();
}