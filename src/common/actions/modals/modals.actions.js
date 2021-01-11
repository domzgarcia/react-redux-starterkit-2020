import {OPEN_MODALS_AS_SCREENSHOTS} from './modals.action.types';

export const handleOpenModalAsScreenhot = (imgSource) => {
    return {
        type: OPEN_MODALS_AS_SCREENSHOTS,
        payload: {
            imgSource,
        }
    }
}