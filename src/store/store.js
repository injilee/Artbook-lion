import storage from 'redux-persist/lib/storage';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

export const userSlice = createSlice({
   name: 'user',
   initialState: {
      displayName: '',
      id: '',
      token: '',
   },
   reducers: {
      setUser: (state, action) => {
         state.displayName = action.payload.displayName;
         state.id = action.payload.id;
         state.token = action.payload.token;
      },
   },
});

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['displayName', 'id', 'token'],
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
