// state 보관하는 파일
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';

export default configureStore({
   reducer: {
      counter: counterReducer,
   },
});
