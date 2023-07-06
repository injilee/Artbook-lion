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

// notice
export const NoticeWrapper = styled.section`
   max-width: 26.25rem;
   width: 26.25rem;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: ${props => props.theme.palette.white};
   padding: 3.375rem 1.875rem;

   @media screen and (max-width: 419px) {
      width: 100%;
   }
`;

export const NoticeContent = styled.ul`
   display: flex;
   flex-direction: column;
   width: 100%;
`;

export const NoticeList = styled.li`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   background-color: ${props => props.theme.palette.white};
`;

export const NoticeTitle = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   border-bottom: 1px solid ${props => props.theme.palette.gray};
   padding: 1.5rem 0 1.5rem;
   cursor: pointer;

   & > div {
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
   }
`;

export const SlideButton = styled.div`
   & > svg {
      font-size: 1.2rem;
      transform: ${props => (props.isCollapse ? 'rotate(225deg)' : 'rotate(0deg)')};
      transition: all 300ms ease 0s;
      cursor: pointer;
   }
`;

export const ContentWrapper = styled.div`
   height: 100%;
   border-bottom: 1px solid ${props => props.theme.palette.gray};
`;

export const Content = styled.div`
   & > img {
      width: 100%;
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
   }

   & > p {
      padding: 2.5rem 0;
      line-height: 1.09375rem;
      word-break: keep-all;
      white-space: pre-wrap;
   }
`;
