import { configureStore} from '@reduxjs/toolkit';
import realestateReducer from '../features/estateSlice'
import registerReducer from '../features/registerSlice'
import loginReducer from '../features/loginSlice'
import allUsersReducer from '../features/allUsersSlice'
import userProfileReducer from '../features/userProfileSlice'
import updateProfileReducer from '../features/updateProfileSlice'


export const store = configureStore({
  reducer: {
    realestate: realestateReducer,
    registered: registerReducer,
    login: loginReducer,
    allusers: allUsersReducer,
    profile: userProfileReducer,
    updateprofile: updateProfileReducer
  },
});
