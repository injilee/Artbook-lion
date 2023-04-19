import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import AuthService from './service/auth-service';
import { firebaseApp } from './service/firebase';

const authService = new AuthService(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ThemeProvider theme={theme}>
      <App authService={authService} />
   </ThemeProvider>,
);
