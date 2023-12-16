import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchHealthFacilities = createAsyncThunk('healthFacilities/fetchHealthFacilities', async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/health-facilities`);

    return response.data.data;
});

const initialState = {
    healthFacilities: [],
    status: 'idle',
    loading: true,
}

const healthFacilities = createSlice({
    name: 'healthFacilities',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchHealthFacilities.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchHealthFacilities.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.healthFacilities = state.healthFacilities.concat(action.payload)
            })
            .addCase(fetchHealthFacilities.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
});

export default healthFacilities.reducer;

export const selectAllHealthFacilities = state => state.healthFacilities.healthFacilities;