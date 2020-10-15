import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// import createHistory from 'history/createBrowserHistory';
const createHistory = require("history").createBrowserHistory;

/*  |---------------
    |   State
    |--------------- */
const initialState = {
    common: {
        counter: 0,
    }
};

/*  |---------------
    |   Enhancers
    |--------------- */
export const history = createHistory();

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history),
];

if(typeof devToolsExtension === 'function'){
    enhancers.push(devToolsExtension());
}

const allStoreEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    reducers,
    initialState,
    allStoreEnhancers
);

export default store;