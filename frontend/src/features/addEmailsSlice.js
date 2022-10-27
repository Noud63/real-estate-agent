import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const addEmailData = async (email) => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    if (!token) {
        console.log("Token not found!");
    }

    const config = {
        headers: {
            'authorization': `Bearer ${token}`,
        }
    }
    const response = await axios.post('addemail', email, config)
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


export const getAllEmails = createAsyncThunk(
    'email/getAllEmails', async (_, thunkAPI) => {
        try {
            const token = JSON.parse(localStorage.getItem("userToken"));
            if (!token) {
                console.log("Token not found!");
            }
            const config = {
                headers: {
                    'authorization': `Bearer ${token}`,
                }
            }
            const response = await axios.get('allemails', config)
            localStorage.setItem('allemails', JSON.stringify(response.data))
            return response.data
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue();
        }
    }
)



const initialState = {
    email: {},
    allemails: [],
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
            .addCase(getAllEmails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllEmails.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.allemails = payload
                state.message = payload
            })
            .addCase(getAllEmails.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
            })
    }
})

export const { resetState } = addEmailsSlice.actions

export default addEmailsSlice.reducer