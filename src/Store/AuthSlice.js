import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: true
    },
    reducers: {
        addUser(state, action) {
            state.user = action.payload
        }
    }

})
export const { addUser } = AuthSlice.actions
export default AuthSlice.reducer