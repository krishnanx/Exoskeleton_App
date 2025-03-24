import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice.js";
import DataSlice from "./DataSlice.js"
const store = configureStore({
    reducer: {
        auth: AuthSlice,
        data: DataSlice
    }
})
export default store