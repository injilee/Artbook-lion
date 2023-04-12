import React from 'react';
import * as S from './Community.style';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import testUserInfo from '../community/TestUserInfo';

const Community = () => {
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
            <S.HeaderTitle>커뮤니티</S.HeaderTitle>
         </S.Header>
         <S.CommunityWrapper>
            <ul>
               {testUserInfo.map(comment => (
                  <S.PostList key={comment.id}>
                     <span>{comment.time}</span>
                     <S.PostCommentUser>
                        <S.PostCommentDetail>
                           <img src={comment.userProfile} alt="유저 프로필" />
                           <span>{comment.name}</span>
                        </S.PostCommentDetail>
                        <p>{comment.grade}</p>
                     </S.PostCommentUser>
                     <S.PostComment>
                        <S.PostCommentBook>
                           <img src={comment.img} alt="책 표지" />
                        </S.PostCommentBook>
                        <S.PostBook>
                           <strong>{comment.bookTitle}</strong>
                           <span>{comment.bookAthor}</span>
                        </S.PostBook>
                        <p>{comment.comment}</p>
                     </S.PostComment>
                  </S.PostList>
               ))}
            </ul>
         </S.CommunityWrapper>
         <NavigationBar />
      </>
   );
};

export default Community;
