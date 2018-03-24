import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import devTools from 'remote-redux-devtools';
import { Platform } from 'react-native';

import RootReducer from './reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
    RootReducer,
    compose(
        middleware,
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        }),
    )
);

export default Store;