import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name: 'data',
    initialState: {
        data: []
    },
    reducers: {
        addData(state, action) {
            state.data = action.payload
        }
    }

})
export const { addData } = DataSlice.actions;
export default DataSlice.reducer;