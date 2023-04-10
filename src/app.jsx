import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';

const App = () => {
   return (
      <BrowserRouter>
         <GlobalStyles />
         <Pages />
      </BrowserRouter>
   );
};

export default App;
