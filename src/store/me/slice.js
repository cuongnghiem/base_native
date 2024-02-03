import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    me: null,
}

const meReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateMe: (state, action) => {
            state.me = {
                ...state.me,
                ...action.payload
            };
            return state
        },
        setMe:(state, action) => {
            state.me = action.payload;
            return state
        }
    },
    extraReducers:builder => {
        
    }
})

export const {updateMe,setMe} = meReducer.actions
export default meReducer.reducer
