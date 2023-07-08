import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';

const App = ({ authService, searchService }) => {
   return (
      <BrowserRouter>
         <GlobalStyles />
         <Pages authService={authService} searchService={searchService} />
      </BrowserRouter>
   );
};

export default App;
