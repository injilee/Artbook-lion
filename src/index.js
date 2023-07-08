import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import AuthService from './service/auth-service';
import { firebaseApp } from './service/firebase';
import BookSearch from './service/book-search';

const authService = new AuthService(firebaseApp);
const searchService = new BookSearch();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ThemeProvider theme={theme}>
      <App authService={authService} searchService={searchService} />
   </ThemeProvider>,
);
