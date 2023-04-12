import React from 'react';
import * as S from './Profile.style';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import testUserInfo from '../community/TestUserInfo';

const Profile = () => {
   const navigate = useNavigate();
   const backPage = () => {
      navigate(-1);
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
         </S.Header>
         <S.ProfileWrapper>
            <S.ProfileHeader>
               <S.Profile>
                  <img src={testUserInfo[0].userProfile} alt="프로필" />
                  <strong>{testUserInfo[0].name}</strong>
                  <span>@inji</span>
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
                        <img src={testUserInfo[0].userProfile} alt="유저 프로필" />
                        <span>{testUserInfo[0].name}</span>
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
         </S.ProfileWrapper>
         <NavigationBar />
      </>
   );
};

export default Profile;
