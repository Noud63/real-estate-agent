import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getRealEstates = createAsyncThunk(
    'realestate/getRealEstates', async (_, thunkAPI) => {
        try {
              const response = await axios.get(
                '/castles'
              );
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
    realestate: [],
    isSuccess: false,
    isLoading: false,
    filtered: localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [],
    message: '',
    }


export const estateSlice = createSlice({
    name: 'realestate',    // Reducer name
    initialState,
    reducers: {
        
        reset: () => initialState,

        filteredProperties: (state, action) => {
            state.filtered = action.payload
        },

        updatedProperty : (state, action) => { 
            const id = action.payload._id
            const liked = action.payload.like
            console.log(id, liked)
            state.filtered = state.filtered.map( estate => {
                if(estate._id === id){
                    return {...estate, like:liked}
                }
                return estate
            })
        }
    },  
    extraReducers: (builder) => {

        builder.addCase(getRealEstates.pending, (state) => {
            state.isLoading = true
        }) 
        builder.addCase(getRealEstates.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.realestate = action.payload 
            state.filtered = action.payload
        })
        builder.addCase(getRealEstates.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const { updatedProperty, reset, filteredProperties } = estateSlice.actions
export default estateSlice.reducer