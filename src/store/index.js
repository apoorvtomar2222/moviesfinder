import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware/index';
import { rootReducer } from '../reducers/index'

const Middleware = applyMiddleware(...middleware);

/**Global Store for saving store value */
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    Middleware
);

export default store;