import axios from 'axios'
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'

const userProfileData = async (id) => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    if (!token) {
        console.log("Token not found!");
    }

    const config = {
        headers: {
            'authorization': `Bearer ${token}`,
        }
    }
    const response = await axios.get(`userprofile/${id}`, config)
    console.log(response.data)
    localStorage.setItem('profile', JSON.stringify(response.data))
    return response.data
}


export const userProfile = createAsyncThunk(
    'profile/userprofile', async (id, thunkAPI) => {
        try {
            return await userProfileData(id)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


const initialState = {
    profile: localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const userProfileSlice = createSlice({
    name: 'userprofile',
    initialState,
    reducers: {
        resetProfile: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(userProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(userProfile.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.profile = payload

            })
            .addCase(userProfile.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
            })
    }
})

export const { resetProfile } = userProfileSlice.actions

export default userProfileSlice.reducer