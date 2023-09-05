import storage from 'redux-persist/lib/storage';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

export const userSlice = createSlice({
   name: 'user',
   initialState: {
      name: '',
      uid: '',
      account: '',
      token: '',
   },
   reducers: {
      setUser: (state, action) => {
         state.name = action.payload.displayName;
         state.uid = action.payload.uid;

         const emailParts = action.payload.email.split('@');
         state.account = '@' + emailParts[0];
         state.token = action.payload.token;
      },
   },
});

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['name', 'uid', 'account', 'token'],
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const { setUser } = userSlice.actions;

export default configureStore({
   reducer: {
      user: persistedReducer,
   },
   middleware: defaultMiddleware =>
      defaultMiddleware({
         serializableCheck: false,
      }),
});
