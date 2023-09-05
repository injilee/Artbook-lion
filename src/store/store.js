import { PURGE } from 'redux-persist';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
   name: '',
   uid: '',
   account: '',
   token: '',
};
export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUser: (state, action) => {
         state.name = action.payload.displayName;
         state.uid = action.payload.uid;

         const emailParts = action.payload.email.split('@');
         state.account = '@' + emailParts[0];
         state.token = action.payload.token;
      },
      clearUser: state => {
         state.user = null;
      },
   },
   extraReducers: builder => {
      builder.addCase(PURGE, () => {
         return initialState;
      });
   },
});

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['name', 'uid', 'account', 'token'],
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const { setUser, clearUser } = userSlice.actions;

export default configureStore({
   reducer: {
      user: persistedReducer,
   },
   middleware: defaultMiddleware =>
      defaultMiddleware({
         serializableCheck: false,
      }),
});
