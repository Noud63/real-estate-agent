import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    realestate: [],
}

export const estateSlice = createSlice({
    name: 'realestate',    // Reducer name
    initialState,
    reducers: {
        getRealEstates: (state) => {
            state.loading = true
        },
        gotRealEstates: (state, action) => {
            state.loading = false
            state.realestate = action.payload
        },
        noRealEstates: (state, action) => {
            state.loading = false
            state.error = action.payload.message
        }
    }
})

export const { getRealEstates, gotRealEstates, noRealEstates } = estateSlice.actions
export default estateSlice.reducer