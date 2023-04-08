import React from 'react';
import Onboarding from './components/onboarding/Onboarding';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

const App = props => {
   return (
      <BrowserRouter>
         <GlobalStyles />
         <Onboarding />
      </BrowserRouter>
   );
};

export default App;
