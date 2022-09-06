import axios from 'axios'
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'


// Register user
const register = async (userData) => {
    const response = await axios.post('/users', userData)
    return response.data
}


// Register user
export const registerUser = createAsyncThunk('auth/registerUser', async (user, thunkAPI) => {
    try {
        return await register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const resetState = createAction('auth/logout')

const initialState = {
    user: { address: "", city: "", country: "", email: "", firstname: "", lastname: "", number: "", telephone: "", username: "", password: "", zip: "" },
    isError: false,
    isRegistered: false,
    isLoading: false,
    message: ''
}

// Create slice

export const registerSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isRegistered = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(resetState, () => {
                return initialState
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
                
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isRegistered = true
                state.user = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
               
                state.message = action.payload
                state.user = null
            })
          }
})

export const { reset } = registerSlice.actions

export default registerSlice.reducer
