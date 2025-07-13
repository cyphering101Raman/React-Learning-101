import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js"

const store = configureStore({
    // "Hey, add a slice of global state called auth, and let authReducer handle all the logic for it."
    reducer: {
        auth: authReducer,
    },
})

export default store;