import { PURGE } from 'redux-persist';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
   name: '',
   uid: '',
   account: '',
   imageURL: '',
};

// 로그인한 사용자 정보 저장하기
export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUser: (state, action) => {
         state.name = action.payload.displayName;
         state.uid = action.payload.uid;

         const emailParts = action.payload.email.split('@');
         state.account = '@' + emailParts[0];
      },
      clearUser: state => {
         state.user = null;
      },
      uploadImageURL: (state, action) => {
         state.imageURL = action.payload.imageURL;
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
   whitelist: ['name', 'uid', 'account', 'imageURL'],
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

// 도서 검색어 쿼리 저장하기
export const searchBookSlice = createSlice({
   name: 'searchResults',
   initialState: {
      results: [],
   },
   reducers: {
      setResults: (state, action) => {
         state.results = [...action.payload];
      },
      resetResults: state => {
         state.results = [];
      },
   },
});

const searchResultsPersistConfig = {
   key: 'searchResults',
   storage,
};

const persistedSearchResultsyReducer = persistReducer(searchResultsPersistConfig, searchBookSlice.reducer);

export const { setUser, clearUser, uploadImageURL } = userSlice.actions;
export const { setResults, resetResults } = searchBookSlice.actions;

export default configureStore({
   reducer: {
      user: persistedReducer,
      searchResults: persistedSearchResultsyReducer,
   },
   middleware: defaultMiddleware =>
      defaultMiddleware({
         serializableCheck: false,
      }),
});
