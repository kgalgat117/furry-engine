import { Actions } from './../action'

export const currentUser = (state = {}, action) => {
    switch (action.type) {
        case Actions.USER_LOGIN:
            return action.payload.currentUser
        default:
            return state;
    }
}