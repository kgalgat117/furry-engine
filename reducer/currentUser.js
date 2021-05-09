import { ActionStrings } from './../action'

export const currentUser = (state = {}, action) => {
    switch (action.type) {
        case ActionStrings.USER_SIGN_UP_DATA_UPDATE:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}