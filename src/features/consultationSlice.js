import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = sessionStorage.getItem("token");
const newStr = token ? token.replace(/"/g, '') : '';
const config = {
    headers: { 'Authorization': `Bearer ${newStr}`, 'Content-Type': 'application/json' }
};

const sendOtpWhatsapp = createAsyncThunk('consultation/sendOtp', async (request) => {
    if (request.phone_number.length < 9) return
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/generate-otp/whatsapp`, {
        phone_number: request.phone_number,
    }, config);
    const result = response.data.data;

    let doctorId = 'b89787fa-648f-461f-aa91-4d93aadf2db9';
    return doctorId;
});

const verifyOtpWhatssapp = createAsyncThunk('consultation/verifyOtp', async (request) => {
    if (request.otp_code.length < 6) return
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/verify-otp/whatsapp`, request, config);

    return response.data.data;
})

const initialState = {
    consultation: [],
    doctorId: '',
    error: null,
    status: 'idle'
}

const consultation = createSlice({
    name: 'consultation',
    initialState,
    reducers: {
        updateStatus(state, action) {
            state.status = action.payload.status
        }
    },
    extraReducers(builder) {
        builder.addCase(sendOtpWhatsapp.pending, (state, action) => {
            state.status = 'loading'
        }).
            addCase(sendOtpWhatsapp.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.doctorId = action.meta.arg.doctor_id
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

const selectDoctorById = (state, doctorId) => state.doctors.doctors.find(doctor => doctor.id === doctorId)

export default consultation.reducer

export const {
    updateStatus
} = consultation.actions

export {
    sendOtpWhatsapp,
    verifyOtpWhatssapp,
    selectDoctorById,
}