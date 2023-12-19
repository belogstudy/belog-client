import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    isloginModalOpen: false,
    issignupModalOpen: false,
    isLogined: false,
    userId: '',
};

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authEmail: (state, action) => {
            state.email = action.payload;
        },
        isloginModalOpen: (state, action) => {
            state.isloginModalOpen = action.payload;
        },
        issignupModalOpen: (state, action) => {
            state.issignupModalOpen = action.payload;
        },
        isLogined: (state, action) => {
            state.isLogined = action.payload;
        },
        userId: (state, action) => {
            state.userId = action.payload;
        },
    },
});

export const { authEmail, isloginModalOpen, issignupModalOpen, isLogined, userId } = auth.actions;
export default auth.reducer;
