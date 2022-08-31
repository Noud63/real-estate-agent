import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    realestate:  [],
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getRealEstates = createAsyncThunk(
    'realestate/getRealEstates', async () => {
        try {
            const response = await axios.get('castles')
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)


export const estateSlice = createSlice({
    name: 'realestate',    // Reducer name
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        
        builder.addCase(getRealEstates.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getRealEstates.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.realestate = action.payload
        })
         builder.addCase(getRealEstates.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const { reset } = estateSlice.actions
export default estateSlice.reducer