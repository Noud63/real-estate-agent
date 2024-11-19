import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getAllUsers = createAsyncThunk(
    'allusers/getAllUsers', async (_, thunkAPI) => {
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
            const response = await axios.get('allUsers', config)
            localStorage.setItem('allusers', JSON.stringify(response.data))
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


export const deleteUser = createAsyncThunk(
    'allusers/deleteUser', async (id, thunkAPI) => {
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
            const response = await axios.delete(`deleteuser/${id}`, config)
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
    allUsers:[],
    isSuccess: false,
    isLoading: false,
    message: '',
}


export const allUsersSlice = createSlice({
    name: 'allusers',    // Reducer name
    initialState,
    reducers: {
        reset: (state) => {
            return { ...state, allUsers: [] }
        },
    },
    extraReducers: (builder) => {

        builder.addCase(getAllUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.allUsers = action.payload
        })
        builder.addCase(getAllUsers.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.allUsers = state.allUsers.filter(user => {
                return user._id !== action.payload.id
            })
        })
        .addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const { reset } = allUsersSlice.actions
export default allUsersSlice.reducer