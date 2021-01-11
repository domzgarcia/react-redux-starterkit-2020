import {OPEN_MODALS_AS_SCREENSHOTS} from '../actions/modals/modals.action.types';

const initialState = {
    isOpen: false,
    imgSource: '/',
};

const modals = (state=initialState, {type, payload}) => {
    switch(type){
        case OPEN_MODALS_AS_SCREENSHOTS:
        return {
            ...state,
            isOpen: true,
            imgSource: payload.imgSource,
        }
        case "CLOSE_ALL_MODALS":
        return {
            ...state,
            isOpen: false,
        }
        default:
            return state;
    }
}

export default modals;