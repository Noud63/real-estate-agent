import { configureStore } from '@reduxjs/toolkit';
import realestateReducer from '../features/estateSlice'
import registerReducer from '../features/registerSlice'


export const store = configureStore({
  reducer: {
    realestate: realestateReducer,
    registered: registerReducer
  },
});
