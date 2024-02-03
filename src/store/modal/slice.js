import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    modalId: null,
}

const modalReducer = createSlice({
    name: 'modal',
    initialState,
    reducers: {},
    extraReducers:builder => {
        
    }
})

export const {updateMe,setMe} = modalReducer.actions
export default modalReducer.reducer
