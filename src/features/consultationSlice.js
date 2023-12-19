import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = sessionStorage.getItem("token");
const newStr = token ? token.replace(/"/g, '') : '';
const config = {
    headers: { 'Authorization': `Bearer ${newStr}`, 'Content-Type': 'application/json' }
};

const sendOtpWhatsapp = createAsyncThunk('consultation/sendOtp', async (request) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/generate-otp/whatsapp`, request, config);

    return response.data.data;
});

const verifyOtpWhatssapp = createAsyncThunk('consultation/verifyOtp', async (request) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/verify-otp/whatsapp`, request, config);

    return response.data.data;
})

const initialState = {
    consultation: [],
    error: null,
    status: 'idle'
}

const consultation = createSlice({
    name: 'consultation',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(sendOtpWhatsapp.pending, (state, action) => {
            state.status = 'loading'
        }).
            addCase(sendOtpWhatsapp.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.consultation = state.consultation.concat(action.payload)
            })
            .addCase(sendOtpWhatsapp.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
        builder.addCase(verifyOtpWhatssapp.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(verifyOtpWhatssapp.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.consultation = state.consultation.concat(action.payload)
            })
        .addCase(verifyOtpWhatssapp.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default consultation.reducer

export {
    sendOtpWhatsapp,
    verifyOtpWhatssapp,
}