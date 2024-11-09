import { createSlice } from "@reduxjs/toolkit";
const isDarkMode = localStorage.getItem('isDarkMode') === 'true' ? true : false;
const initialState = {
    isDarkMode: isDarkMode,
    isLoading: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setDarkMode(state, action) {
            console.log(action.payload)
            localStorage.setItem('isDarkMode', action.payload)
            return { ...state, isDarkMode: action.payload };
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;