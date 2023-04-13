import React from 'react';
import styled from 'styled-components';
import testUserInfo from '../../community/TestUserInfo';
import { useNavigate } from 'react-router-dom';

const CommuWrapper = styled.article`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin-bottom: 2.8125rem;
`;

const CommuHeader = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: flex-end;
   margin-bottom: 1.2rem;

   & > h3 {
      font-size: 1.3rem;
      font-weight: 600;
   }

   & > span {
      font-size: 0.9rem;
      font-weight: 500;
      color: ${props => props.theme.palette.lionRed};
      cursor: pointer;
   }

   @media screen and (max-width: 419px) {
      & > h3 {
         font-size: 1.2rem;
      }

      & > span {
         font-size: 0.9rem;
      }
   }
`;

const PostList = styled.li`
   display: flex;
   flex-direction: column;
   border-radius: 1rem;
   background-color: ${props => props.theme.palette.lightYellow};
   padding: 1.375rem 1.7rem;
   margin-bottom: 1.625rem;

   & > span {
      text-align: right;
      font-size: 0.7rem;
   }
`;

const PostCommentUser = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid ${props => props.theme.palette.gray};
   margin-bottom: 1rem;
`;

const PostCommentDetail = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 0.5625rem;

   & > img {
      width: 45px;
      height: 45px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 0.7rem;
   }

   & > span {
      font-weight: 600;
   }

   @media screen and (max-width: 419px) {
      & > img {
         width: 40px;
         height: 40px;
      }
   }
`;

const PostComment = styled.div`
   line-height: 1.21875rem;

   @media screen and (max-width: 419px) {
      display: flex;
      flex-direction: column;
   }
`;

const PostBook = styled.div`
   margin-bottom: 0.5rem;

   & > strong {
      font-size: 1.1rem;
      font-weight: 600;
      margin-right: 0.4375rem;
   }

   & > span {
      font-size: 0.9rem;
      font-weight: 500;
   }

   @media screen and (max-width: 419px) {
      & > strong {
         font-size: 1rem;
         margin-right: 0.3rem;
      }

      & > span {
         font-size: 0.9rem;
      }
   }
`;

const PostCommentBook = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 0.9rem;

   & > span {
      font-size: 0.7rem;
      font-weight: 400;
   }

   @media screen and (max-width: 419px) {
      & > span {
         font-size: 0.7rem;
      }
   }
`;

const Communities = () => {
   const navigate = useNavigate();

   return (
      <CommuWrapper>
         <CommuHeader>
            <h3>커뮤니티</h3>
            <span onClick={() => navigate('/community')}>View All</span>
         </CommuHeader>
         <ul>
            <PostList>
               <span>{testUserInfo[0].time}</span>
               <PostCommentUser>
                  <PostCommentDetail>
                     <img src={testUserInfo[0].userProfile} alt="유저 프로필" />
                     <span>{testUserInfo[0].name}</span>
                  </PostCommentDetail>
                  <p>{testUserInfo[0].grade}</p>
               </PostCommentUser>
               <PostComment>
                  <PostCommentBook>
                     <img src={testUserInfo[0].img} alt="책 표지" />
                  </PostCommentBook>
                  <PostBook>
                     <strong>{testUserInfo[0].bookTitle}</strong>
                     <span>{testUserInfo[0].bookAthor}</span>
                  </PostBook>
                  <p>{testUserInfo[0].comment}</p>
               </PostComment>
            </PostList>
            <PostList>
               <span>{testUserInfo[1].time}</span>
               <PostCommentUser>
                  <PostCommentDetail>
                     <img src={testUserInfo[1].userProfile} alt="유저 프로필" />
                     <span>{testUserInfo[1].name}</span>
                  </PostCommentDetail>
                  <p>{testUserInfo[1].grade}</p>
               </PostCommentUser>
               <PostComment>
                  <PostCommentBook>
                     <img src={testUserInfo[1].img} alt="책 표지" />
                  </PostCommentBook>
                  <PostBook>
                     <strong>{testUserInfo[1].bookTitle}</strong>
                     <span>{testUserInfo[1].bookAthor}</span>
                  </PostBook>
                  <p>{testUserInfo[1].comment}</p>
               </PostComment>
            </PostList>
         </ul>
      </CommuWrapper>
   );
};

export default Communities;
