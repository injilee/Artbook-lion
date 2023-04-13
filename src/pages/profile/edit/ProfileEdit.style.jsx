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

/* profile */
export const ProfileEditWrapper = styled.section`
   max-width: 26.25rem;
   display: flex;
   flex-direction: column;
   background-color: ${props => props.theme.palette.ghostGray};
   padding: 6.5rem 1.875rem;

   @media screen and (max-width: 419px) {
      padding: 4.375rem 1rem;
   }
`;

export const Profile = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   & > span {
      font-size: 0.8rem;
      color: ${props => props.theme.palette.gray};
      margin-bottom: 3rem;
   }

   & > button {
      font-size: 0.8rem;
      font-weight: 600;
      color: ${props => props.theme.palette.white};
      background-color: ${props => props.theme.palette.darkGreen};
      border-radius: 0.4375rem;
      padding: 0.4rem 1.2rem;
   }
`;

export const ProfileImg = styled.div`
   position: relative;
   margin-bottom: 1.5rem;

   & > img {
      width: 6.5rem;
      height: 6.5rem;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 0.9375rem;
   }

   & > button {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      border: 1px solid ${props => props.theme.palette.lightGray};
      border-radius: 50%;
      background-color: ${props => props.theme.palette.lightBeige};

      & > svg {
         font-size: 1.4rem;
         color: ${props => props.theme.palette.lionRed};
      }
   }
`;

export const UserIdEdit = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-bottom: 1rem;

   & > label {
      font-size: 0.9rem;
      color: ${props => props.theme.palette.gray};
      margin-bottom: 0.5rem;
   }

   & > input {
      text-align: center;
      outline: none;
      border: none;
      border-bottom: 1px solid ${props => props.theme.palette.buttonGray};
      background-color: transparent;
      padding: 0.5rem;
   }
`;
