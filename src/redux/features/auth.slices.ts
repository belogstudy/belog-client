import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
};

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authEmail: (state, action) => {
            state.email = action.payload;
        },
    },
});

export const { authEmail } = auth.actions;
export default auth.reducer;
