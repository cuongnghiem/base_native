import {combineReducers, configureStore} from '@reduxjs/toolkit'
import meReducer from './me/slice'
import modalReducer from './modal/slice'

const rootReducer = combineReducers({
    meReducer,
    modalReducer,
})

export const appReducer = (state, action) => {
    let _state = state
    if (action.type === 'SIGN_OUT') {
        _state = undefined
    }
    return rootReducer(_state, action)
}

const store = configureStore({
    reducer: appReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export default store
