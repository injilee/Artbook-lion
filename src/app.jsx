import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';

const App = ({ authService, storageService }) => {
   return (
      <BrowserRouter>
         <GlobalStyles />
         <Pages authService={authService} storageService={storageService} />
      </BrowserRouter>
   );
};

export default App;
