import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Register user
const update = async (profile) => {
    const response = await axios.post('/updateProfile', profile)
    console.log(response.data)
    return response.data
}


// Register user
export const updateProfile = createAsyncThunk('update/updateProfile', async (profile, thunkAPI) => {
    try {
        console.log(profile)
        return await update(profile)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


const initialState = {
    update: {},
    isError: false,
    isUpdated: false,
    isLoading: false,
    message: ''
}

// Create slice

export const updateProfileSlice = createSlice({
    name: 'updatedprofile',
    initialState,
    reducers: {
        resetState: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateProfile.pending, (state) => {
                state.isLoading = true

            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.isUpdated = true
                state.update = action.payload
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { resetState, getnewProfile } = updateProfileSlice.actions

export default updateProfileSlice.reducer