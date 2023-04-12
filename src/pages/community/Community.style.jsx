import styled from 'styled-components';

/* header */
export const Header = styled.div`
   max-width: 26.25rem;
   position: fixed;
   top: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 3.4375rem;
   border-bottom: 1px solid ${props => props.theme.palette.lightGray};
   background-color: ${props => props.theme.palette.white};

   @media screen and (max-width: 419px) {
      width: 100vw;
   }
`;

export const HeaderBackBtn = styled.div`
   position: absolute;
   top: 1.2rem;
   left: 0.875rem;

   & > svg {
      user-select: none;
   }
`;

export const HeaderTitle = styled.h1`
   font-size: 1.25rem;
   font-weight: 500;
`;

/* Community */
export const CommunityWrapper = styled.section`
   max-width: 26.25rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: ${props => props.theme.palette.white};
   padding: 4.375rem 1.875rem;

   @media screen and (max-width: 419px) {
      padding: 4.375rem 1rem;
   }
`;

export const CommuHeader = styled.div`
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

export const PostList = styled.li`
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

export const PostCommentUser = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid ${props => props.theme.palette.gray};
   margin-bottom: 1rem;
`;

export const PostCommentDetail = styled.div`
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

export const PostComment = styled.div`
   line-height: 1.21875rem;

   @media screen and (max-width: 419px) {
      display: flex;
      flex-direction: column;
   }
`;

export const PostBook = styled.div`
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

export const PostCommentBook = styled.div`
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
