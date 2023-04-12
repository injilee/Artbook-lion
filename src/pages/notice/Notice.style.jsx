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

/* notice */
export const NoticeWrapper = styled.section`
   max-width: 26.25rem;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: ${props => props.theme.palette.white};
   padding: 4.375rem 1.875rem;

   @media screen and (max-width: 419px) {
      padding: 4.375rem 1rem;
   }
`;

export const NoticeContent = styled.ul`
   width: 100%;
`;

export const NoticeList = styled.li`
   display: flex;
   justify-content: space-between;
   border-top: 1px solid ${props => props.theme.palette.gray};
   padding-top: 0.7rem;
   margin-bottom: 1.7rem;

   & > button {
   }
`;

export const NoticeTitle = styled.div`
   display: flex;
   flex-direction: column;

   & > h2 {
      margin-bottom: 0.5rem;
      font-size: 1rem;
      font-weight: 500;
   }

   & > span {
      font-family: 'Signika', sans-serif;
      font-size: 0.9rem;
      font-weight: 300;
   }
`;
