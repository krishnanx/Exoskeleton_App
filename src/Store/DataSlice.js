import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Constants from 'expo-constants';
import axios from 'axios';
const DataSlice = createSlice({
    name: 'data',
    initialState: {
        data: {},
        status: "loading",
        Mode: ""
    },
    reducers: {
        addData(state, action) {
            state.data = action.payload;
        },
        addMode(state, action) {
            state.Mode = action.payload;
        },
        addStatus(state, action) {
            state.status = action.payload;
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.status = "idle";
                state.data = action.payload;
            })
            .addCase(getData.rejected, (state, action) => {
                state.status = "error";

            })

    }

})
export const { addData, addMode, addStatus } = DataSlice.actions;
export default DataSlice.reducer;
export const getData = createAsyncThunk("data/get", async () => {
    try {
        console.log("link:", Constants.expoConfig.extra.SERVER)
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await axios.get("http:/192.168.1.48:3000/Data/getsingle");
        console.log(response.data.data[0])
        console.log(response.data.data[0]);
        return response.data.data[0]; // Return data for Redux state
    } catch (error) {
        console.error('Error fetching data:', error);
        dispatch(addStatus("error"));
        throw error;
    }
});
