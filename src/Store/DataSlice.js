import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const DataSlice = createSlice({
    name: 'data',
    initialState: {
        data: []
    },
    reducers: {
        addData(state, action) {
            state.data = action.payload
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload; // ✅ Set data properly
            })
            .addCase(getData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }

})
export const { addData } = DataSlice.actions;
export default DataSlice.reducer;
export const getData = createAsyncThunk("data/get", async () => {
    try {
        const response = await axios.get('http://192.168.1.48:3000/Data/getsingle');
        console.log(response.data.data[0])
        console.log(response.data.data[0]);
        return response.data.data[0]; // Return data for Redux state
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});
