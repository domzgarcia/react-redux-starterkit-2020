import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import common from '../common/reducers';

const reducers = combineReducers({
    common,
    routerReducer,
});

export default reducers;