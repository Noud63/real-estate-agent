import { configureStore } from '@reduxjs/toolkit';
import realestateReducer from '../features/estateSlice'


export const store = configureStore({
  reducer: {
    realestate: realestateReducer
  },
});
