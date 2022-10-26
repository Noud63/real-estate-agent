import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const addEmailData = async (email) => {
    const response = await axios.post('addemail', email)
    console.log(response.data)
    return response.data
}


export const addEmail = createAsyncThunk(
    'email/addEmail', async (email, thunkAPI) => {
        try {
            return await addEmailData(email)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


const initialState = {
    email: {},
    isError: false,
    isSucces: false,
    isLoading: false,
    message: ''
}


export const addEmailsSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        resetState: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(addEmail.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addEmail.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.email = payload
                state.message = payload
            })
            .addCase(addEmail.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
            })
    }
})

export const { resetState } = addEmailsSlice.actions

export default addEmailsSlice.reducer