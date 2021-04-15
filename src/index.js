import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import '@fontsource/roboto';
import Main from './Main';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);
