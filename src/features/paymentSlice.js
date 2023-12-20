import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = sessionStorage.getItem("token");
const newStr = token ? token.replace(/"/g, '') : '';
const config = {
    headers: { 'Authorization': `Bearer ${newStr}`, 'Content-Type': 'application/json' }
};

const createPayment = createAsyncThunk('payment/create', async (request) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/payments`, {
        doctor_id: request,
    }, config);

    return response.data.data;
});

const checkPayment = createAsyncThunk('payment/check', async (orderId) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/payments/check`, {
        order_id: orderId
    }, config);

    return response.data.data;
})

const initialState = {
    payment: {},
    error: null,
    status: 'idle'
}

const payment = createSlice({
    name: 'payment',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(createPayment.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(createPayment.fulfilled, (state, action) => {
                state.status = 'succeeded'

                state.payment = { ...action.payload }
            })
            .addCase(createPayment.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
        builder
            .addCase(checkPayment.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(checkPayment.fulfilled, (state, action) => {
                state.payment.status = action.payload.status
            })
            .addCase(checkPayment.rejected, (state, action) => {
                state.status = 'failed'

                state.error = action.error.message
            })
    }
});

export {
    createPayment,
    checkPayment,
}

export default payment.reducer