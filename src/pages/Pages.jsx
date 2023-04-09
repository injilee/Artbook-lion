import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Onboarding from '../components/onboarding/Onboarding';
import Error from '../components/error/Error';
import Login from '../components/login/Login';
import SignIn from '../components/signin/SignIn';

const Pages = () => {
   return (
      <Routes>
         <Route path="/" element={<Onboarding />}></Route>
         <Route path="/*" element={<Error />}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
   );
};

export default Pages;
