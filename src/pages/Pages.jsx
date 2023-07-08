import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Onboarding from '../components/onboarding/Onboarding';
import Error from '../components/error/Error';
import Login from '../components/login/Login';
import SignIn from '../components/signin/SignIn';
import Home from './home/Home';
import Notice from './notice/Notice';
import Community from './community/Community';
import Post from './post/Post';
import Search from './search/Search';
import Profile from './profile/Profile';
import bookData from './home/suggestBook/SuggestBookData';
import noticeData from '../pages/notice/NoticeInfo';
import ProfileEdit from './profile/edit/ProfileEdit';
import styled from 'styled-components';

const ResponseScreen = styled.div`
   display: flex;
   justify-content: center;

   @media screen and (max-width: 419px) {
      display: block;
   }
`;

const Pages = ({ authService, searchService }) => {
   return (
      <ResponseScreen>
         <Routes>
            <Route path="/" element={<Onboarding />}></Route>
            <Route path="/*" element={<Error />}></Route>
            <Route path="/login" element={<Login authService={authService} />}></Route>
            <Route path="/signin" element={<SignIn authService={authService} />}></Route>
            <Route path="/home" element={<Home bookData={bookData} />}></Route>
            <Route path="/search" element={<Search searchService={searchService} />}></Route>
            <Route path="/notice" element={<Notice noticeData={noticeData} />}></Route>
            <Route path="/community" element={<Community />}></Route>
            <Route path="/profile" element={<Profile authService={authService} />}></Route>
            <Route path="/profile/:id/edit" element={<ProfileEdit authService={authService} />}></Route>
            <Route path="/post" element={<Post />}></Route>
         </Routes>
      </ResponseScreen>
   );
};

export default Pages;
