import { createSlice } from "@reduxjs/toolkit";
const LoggedIn = localStorage.getItem('isLoggedIn') === 'true' ? true : false;
const initialState = {
    isLoggedIn: LoggedIn,
    accessToken: '',
    user: {},

};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        grantLoginAccess(state, action) {
            return { ...state, ...action.payload };
        },
        removeLoginAccess() {
            return initialState;
        },
        updateHeadshot(state, action) {
            state.user.headshot = action.payload
        },
        updateWallet: (state, action) => {
            state.user.wallet = action.payload
        },
        updateUser: (state, action) => {
            state.user = action.payload
        },

    }
});

export const authActions = authSlice.actions;

export default authSlice;