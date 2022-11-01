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


export const removeEmail = createAsyncThunk(
    'email/deleteEmail', async (id, thunkAPI) => {
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
            const response = await axios.delete(`deleteemail/${id}`, config)
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
    allemails: localStorage.getItem('allemails') ? JSON.parse(localStorage.getItem('allemails')) : [],
    isError: false,
    isSucces: false,
    isLoading: false,
    message: ''
}

console.log(initialState)

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
                state.allemails = payload.sort((a, b) => {
                    return a.email.localeCompare(b.email)
                })
                state.message = payload
            })
            .addCase(getAllEmails.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
            })
            .addCase(removeEmail.pending, (state) => {
                state.isLoading = true
            })
            .addCase(removeEmail.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.allemails = state.allemails.filter(mail => {
                    return mail._id !== action.payload
                })
            })
            .addCase(removeEmail.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { resetState } = addEmailsSlice.actions

export default addEmailsSlice.reducer