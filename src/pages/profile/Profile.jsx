import React from 'react';
import * as S from './Profile.style';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import Aside from '../post/Aside';
import { useDispatch, useSelector } from 'react-redux';
import store, { clearUser, resetResults } from '../../store/store';
import persistStore from 'redux-persist/es/persistStore';
import defaultProfile from '../../assets/lion-img.png';
import testUserInfo from '../community/TestUserInfo';

const Profile = ({ authService }) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const name = useSelector(state => state.user.name);
   const account = useSelector(state => state.user.account);
   const url = useSelector(state => state.user.imageURL);

   const backPage = () => {
      navigate(-1);
   };

   const goToLogin = () => {
      navigate('/login');
   };

   const onLogout = async () => {
      await authService.logout(() => {
         dispatch(clearUser());
         dispatch(resetResults());
         persistStore(store).purge();
         goToLogin();
      });
   };

   return (
      <>
         <S.Header>
            <S.HeaderBackBtn>
               <button aria-label="이전으로 돌아가기" onClick={backPage}>
                  <MdArrowBackIos></MdArrowBackIos>
               </button>
            </S.HeaderBackBtn>
            <S.HeaderTitle>내 프로필</S.HeaderTitle>
            <button onClick={onLogout}>로그아웃</button>
         </S.Header>
         <S.ProfileWrapper>
            <S.ProfileContent>
               <S.ProfileHeader>
                  <S.Profile>
                     <img src={url ? url : defaultProfile} alt="프로필" />
                     <strong>{name}</strong>
                     <span>{account}</span>
                     <button onClick={() => navigate('/profile/:id/edit')}>프로필 수정</button>
                  </S.Profile>
               </S.ProfileHeader>
               <S.BookNote>
                  <h2>독서노트</h2>
                  <button>편집</button>
               </S.BookNote>
               <ul>
                  <S.PostList>
                     <span>{testUserInfo[0].time}</span>
                     <S.PostCommentUser>
                        <S.PostCommentDetail>
                           <img src={url ? url : defaultProfile} alt="유저 프로필" />
                           <span>{name}</span>
                        </S.PostCommentDetail>
                        <p>{testUserInfo[0].grade}</p>
                     </S.PostCommentUser>
                     <S.PostComment>
                        <S.PostCommentBook>
                           <img src={testUserInfo[0].img} alt="책 표지" />
                        </S.PostCommentBook>
                        <S.PostBook>
                           <strong>{testUserInfo[0].bookTitle}</strong>
                           <span>{testUserInfo[0].bookAthor}</span>
                        </S.PostBook>
                        <p>{testUserInfo[0].comment}</p>
                     </S.PostComment>
                  </S.PostList>
               </ul>
            </S.ProfileContent>
            <Aside />
         </S.ProfileWrapper>
         <NavigationBar />
      </>
   );
};

export default Profile;
