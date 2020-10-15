import { COMMON_ADD_COUNTER } from "./action.types"

export const commonHandleAddCounter = () => {
    return {
        type: COMMON_ADD_COUNTER,
        payload: {
            counter: 1,
        },
    }
}