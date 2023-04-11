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
import bookData from '../components/recommendBook/RecommendBook';
import noticeData from '../pages/notice/NoticeInfo';

const Pages = () => {
   return (
      <Routes>
         <Route path="/" element={<Onboarding />}></Route>
         <Route path="/*" element={<Error />}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/signin" element={<SignIn />}></Route>
         <Route path="/home" element={<Home bookData={bookData} />}></Route>
         <Route path="/search" element={<Search />}></Route>
         <Route path="/notice" element={<Notice noticeData={noticeData} />}></Route>
         <Route path="/community" element={<Community />}></Route>
         <Route path="/profile" element={<Profile />}></Route>
         <Route path="/post" element={<Post />}></Route>
      </Routes>
   );
};

export default Pages;
