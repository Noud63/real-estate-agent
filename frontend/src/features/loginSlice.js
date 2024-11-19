import axios from 'axios'
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'


const userLoginData = async (loginData) => {
    const response = await axios.post('login', loginData )
    const token = response.data.token
    if (token) {
        localStorage.setItem('isAdmin', JSON.stringify(response.data.isAdmin))
        localStorage.setItem('userToken', JSON.stringify(token))
    }
    return response.data
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


const initialState = {
    login: { username: "", password: ""},
    isError: false,
    isLoggedIn: localStorage.getItem('loggedIn') ? JSON.parse(localStorage.getItem('loggedIn')) : false,
    isLoading: false,
    message: ''
}


export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        resetState: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(logout, (state) => {
                state.isLoggedIn = false
                state.login = {}
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isLoggedIn = true
                state.isError = false
                state.login = payload

            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false
                state.isError = true
                state.message = payload
            })
    }
})

export const { resetState } = loginSlice.actions

export default loginSlice.reducer