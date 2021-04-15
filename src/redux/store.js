import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import graphDataReducer from './graphData/graphDataReducer';

const middleware = [];

if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger({
        level: 'info',
        collapsed: false,
        logger: console,
    }));
}

export default configureStore({
    reducer: {
        graph: graphDataReducer,
    },
    middleware,
});
