import styled from 'styled-components';
import bannerArrow from '../../assets/Arrow-Right2.png';

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

/* home */
export const Wrapper = styled.section`
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

/* notice */
export const NoticeWrapper = styled.article`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin-bottom: 2.5rem;

   & > h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1.2rem;
   }

   @media screen and (max-width: 419px) {
      & > h3 {
         font-size: 1.2rem;
      }
   }
`;

export const NoticeContent = styled.div`
   border-radius: 1.25rem;
   background-color: ${props => props.theme.palette.lightGray};
   padding: 1.0625rem 0.9375rem;
`;

export const NoticeList = styled.li`
   & > p {
      font-size: 0.9rem;
      font-weight: 400;
   }
`;

/* banner */
export const Banner = styled.article`
   width: 100%;
   height: 5.25rem;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 2.5rem;
   border-radius: 0.625rem;
   background-color: ${props => props.theme.palette.darkPurple};
`;

export const BannerWrap = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-around;
   align-items: center;
`;

export const BannerText = styled.div`
   & > p {
      width: 8.125rem;
      font-weight: 500;
      color: ${props => props.theme.palette.white};
   }
`;

export const BannerBtn = styled.button`
   background-color: ${props => props.theme.palette.white};
   border-radius: 0.3125rem;

   & > span {
      display: block;
      font-size: 0.7rem;
      font-weight: 600;
      color: ${props => props.theme.palette.pastelPurple};
      padding: 0.75rem 1rem;

      &:after {
         content: url(${bannerArrow});
         width: 100%;
         height: 100%;
         margin-left: 0.5rem;
      }
   }
`;
