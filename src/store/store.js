// state 보관하는 파일
import { configureStore, createSlice } from '@reduxjs/toolkit';

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
      // setId: (state, action) => {
      //    state.id = action.payload;
      // },
      // setToken: (state, action) => {
      //    state.token = action.payload;
      // },
   },
});

export const { setUser } = userSlice.actions;

export default configureStore({
   reducer: {
      user: userSlice.reducer,
   },
});
