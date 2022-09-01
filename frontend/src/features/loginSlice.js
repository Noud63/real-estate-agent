import axios from 'axios'
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'

const userLoginData = async (loginData) => {
    const response = await axios.post('login', loginData)
    console.log(response.data.userlogin)
    if (response.data.userlogin.token) {
        localStorage.setItem('loginuser', JSON.stringify(response.data.userlogin))
    }
    return response.data.userlogin
}

const initialState = {
    login: { username: "", password: "" },
    isError: false,
    isLoggedIn: false,
    isLoading: false,
    message: ''
}


export const loginUser = createAsyncThunk(
    'auth/loginUser', async (login, thunkAPI) => {
        try {
            return await userLoginData(login)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const logout = createAction('auth/logout')

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
    reset: () => initialState
       },
    extraReducers: (builder) => {
        builder
            .addCase(logout, () => { 
                 return initialState
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isLoggedIn = true
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log(action)
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
    }
})

export const { reset } = loginSlice.actions

export default loginSlice.reducer