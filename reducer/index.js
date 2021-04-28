import { combineReducers } from 'redux'
import { currentUser } from './currentUser'

export const combinedReducer = combineReducers({
    currentUser
})