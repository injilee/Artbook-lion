import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import AuthService from './service/auth-service';
import { firebaseApp } from './service/firebase';
import BookSearch from './service/book-search';
import { Provider } from 'react-redux';
import store from './store/store';

const authService = new AuthService(firebaseApp);
const searchService = new BookSearch();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ThemeProvider theme={theme}>
      <Provider store={store}>
         <App authService={authService} searchService={searchService} />
      </Provider>
   </ThemeProvider>,
);
