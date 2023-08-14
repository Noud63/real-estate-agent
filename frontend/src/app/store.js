import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistStore } from 'redux-persist';
import realestateReducer from '../features/estateSlice'
import registerReducer from '../features/registerSlice'
import loginReducer from '../features/loginSlice'
import allUsersReducer from '../features/allUsersSlice'
import userProfileReducer from '../features/userProfileSlice'
import updateProfileReducer from '../features/updateProfileSlice'
import addEmailReducer from '../features/addEmailsSlice'
// import logger from 'redux-logger'



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['realestate']
}

const rootReducer = combineReducers({
    realestate: realestateReducer,
    registered: registerReducer,
    login: loginReducer,
    allusers: allUsersReducer,
    profile: userProfileReducer,
    updateprofile: updateProfileReducer,
    emails: addEmailReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer )

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
          serializableCheck: false,
        })
});

export const persistor = persistStore(store)