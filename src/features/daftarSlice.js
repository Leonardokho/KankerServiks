import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

export const userRegister = createAsyncThunk(
    'register/userRegister',
    async initialPost => {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`, initialPost, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(response.data.token) {
            setToken(response.data.token)
        }
        return response.data
    }
)

const initialState = {
    users: [],
    status: 'idle',
    error: null
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(userRegister.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                if (state.users.length === 0) {
                    state.users.push(action.payload)
                }
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { login } = loginSlice.actions

export default loginSlice.reducer