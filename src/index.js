import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import AuthService from './service/auth-service';
import { firebaseApp } from './service/firebase';
import { Provider } from 'react-redux';
import store from './store/store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

const authService = new AuthService(firebaseApp);
export let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ThemeProvider theme={theme}>
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <App authService={authService} />
         </PersistGate>
      </Provider>
   </ThemeProvider>,
);
