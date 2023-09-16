import styled from 'styled-components';

// header
export const Header = styled.div`
   max-width: 26.25rem;
   position: fixed;
   top: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 3.4375rem;
   border-bottom: 2px solid ${props => props.theme.palette.lightGray};
   background-color: ${props => props.theme.palette.white};
   z-index: 10;

   & > button {
      position: absolute;
      right: 0.875rem;
      font-weight: 500;
      color: ${props => props.theme.palette.lionRed};
   }

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

// profile
export const ProfileWrapper = styled.section`
   max-width: 26.25rem;
   width: 26.25rem;
   display: flex;
   flex-direction: column;
   background-color: ${props => props.theme.palette.white};
`;

export const ProfileContent = styled.div`
   padding: 4.375rem 1.875rem;

   @media screen and (max-width: 419px) {
      padding: 4.375rem 1rem;
   }
`;

export const ProfileHeader = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   border-bottom: 1px solid ${props => props.theme.palette.buttonGray};
   padding: 2rem 0 2.625rem;
   margin-bottom: 1em;
`;

export const Profile = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   & > img {
      width: 6.0625rem;
      height: 6.0625rem;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 0.9375rem;
   }

   & > strong {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.6rem;
   }

   & > span {
      font-size: 0.8rem;
      color: ${props => props.theme.palette.gray};
      margin-bottom: 0.875rem;
   }

   & > button {
      font-size: 0.8rem;
      font-weight: 600;
      color: ${props => props.theme.palette.white};
      background-color: ${props => props.theme.palette.buttonGray};
      border-radius: 0.3125rem;
      padding: 0.4375rem 1rem;

      &:hover {
         background-color: ${props => props.theme.palette.darkGreen};
      }
   }
`;

export const BookNote = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 1.875rem;

   & > h2 {
      font-size: 1.3rem;
      font-weight: 600;
   }

   & > button {
      font-size: 0.9rem;
      font-weight: 600;
      color: ${props => props.theme.palette.lionRed};
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
