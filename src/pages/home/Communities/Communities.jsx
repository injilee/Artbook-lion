import React from 'react';
import styled from 'styled-components';
import testUserInfo from './TestUserInfo';

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
      font-size: 1.4rem;
      font-weight: 600;
   }

   & > span {
      font-size: 1rem;
      font-weight: 500;
      color: ${props => props.theme.palette.lionRed};
      cursor: pointer;
   }
`;

const PostBox = styled.ul``;

const PostList = styled.li`
display: flex;
border-radius: 1rem;
background-color: ${props => props.theme.palette.lightYellow}};
padding: 1.375rem 1.7rem;
margin-bottom:1.625rem;
`;

const PostCommentContainer = styled.div`
   margin-right: 1.25rem;
`;

const PostCommentUser = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid ${props => props.theme.palette.gray};
   margin-bottom: 0.875rem;
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
      margin-right: 0.4375rem;
   }

   & > span {
      font-weight: 600;
   }
`;

const PostComment = styled.div`
   line-height: 1.21875rem;
`;

const PostBook = styled.div`
   margin-bottom: 0.5rem;

   & > strong {
      font-size: 1.1rem;
      font-weight: 600;
      margin-right: 0.4375rem;
   }

   & > span {
      font-size: 1rem;
      font-weight: 500;
   }
`;

const PostCommentBook = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-end;

   & > span {
      font-size: 0.8rem;
      font-weight: 400;
   }
`;

const Communities = () => {
   return (
      <CommuWrapper>
         <CommuHeader>
            <h3>커뮤니티</h3>
            <span>View All</span>
         </CommuHeader>
         <PostBox>
            <PostList>
               <PostCommentContainer>
                  <PostCommentUser>
                     <PostCommentDetail>
                        <img src={testUserInfo[0].userProfile} alt="유저 프로필" />
                        <span>{testUserInfo[0].name}</span>
                     </PostCommentDetail>
                     <p>{testUserInfo[0].grade}</p>
                  </PostCommentUser>
                  <PostComment>
                     <PostBook>
                        <strong>{testUserInfo[0].bookTitle}</strong>
                        <span>{testUserInfo[0].bookAthor}</span>
                     </PostBook>
                     <p>{testUserInfo[0].comment}</p>
                  </PostComment>
               </PostCommentContainer>
               <PostCommentBook>
                  <span>{testUserInfo[0].time}</span>
                  <img src={testUserInfo[0].img} alt="책 표지" />
               </PostCommentBook>
            </PostList>
            <PostList>
               <PostCommentContainer>
                  <PostCommentUser>
                     <PostCommentDetail>
                        <img src={testUserInfo[1].userProfile} alt="유저 프로필" />
                        <span>{testUserInfo[1].name}</span>
                     </PostCommentDetail>
                     <p>{testUserInfo[1].grade}</p>
                  </PostCommentUser>
                  <PostComment>
                     <PostBook>
                        <strong>{testUserInfo[1].bookTitle}</strong>
                        <span>{testUserInfo[1].bookAthor}</span>
                     </PostBook>
                     <p>{testUserInfo[1].comment}</p>
                  </PostComment>
               </PostCommentContainer>
               <PostCommentBook>
                  <span>{testUserInfo[1].time}</span>
                  <img src={testUserInfo[1].img} alt="책 표지" />
               </PostCommentBook>
            </PostList>
         </PostBox>
      </CommuWrapper>
   );
};

export default Communities;
