import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
    isLoggedIn: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log("User logged in:", action.payload);
            state.userData = action.payload;
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.userData = null;
            state.isLoggedIn = false;
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;