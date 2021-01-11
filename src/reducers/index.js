import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import common from '../common/reducers';
import modals from '../common/reducers/modals';

const reducers = combineReducers({
    common,
    modals,
    routerReducer,
});

export default reducers;