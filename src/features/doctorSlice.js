import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/doctors`);

    return response.data.data;
});

const initialState = {
    doctors: [],
    loading: true,
    status: 'idle',
}

const doctorSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchDoctors.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchDoctors.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.doctors = state.doctors.concat(action.payload)
            })
            .addCase(fetchDoctors.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
});

const selectAllDoctors = state => state.doctors.doctors;

export default doctorSlice.reducer;

export {
    selectAllDoctors,
    fetchDoctors,
}