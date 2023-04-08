import styled from 'styled-components';

export const OnboardWrapper = styled.section`
   display: flex;
   flex-direction: column;
   max-width: 25rem;
`;

export const OnboardContent = styled.ul`
   display: flex;
   height: calc(100vh - 90px);
   overflow: hidden;
   background-color: ${props => props.theme.palette.lightOrange};

   & > li {
      transition-property: transform;
   }
`;

export const OnboardImgBox = styled.div`
   width: 400px;
   background-color: ${props => props.theme.palette.white};
`;

export const OnboardImage = styled.img.attrs(props => ({
   src: props.src,
   alt: props.name,
}))`
   width: 100%;
   padding: 1.5rem;
`;

export const OnboardDetail = styled.div`
   margin: 4.375rem 1.7rem 0;

   & > p {
      font-size: 1.5625rem;
      font-weight: 600;
      margin-bottom: 0.9375rem;
   }

   & > span {
      font-size: 1rem;
      line-height: 1.5rem;
   }
`;

export const OnboardFooter = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2.0625rem 0;
   background-color: ${props => props.theme.palette.lightOrange};

   & > button {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${props => props.theme.palette.lionRed};
      margin: 0 1.2rem;
   }
`;

export const OnboardSwiper = styled.div`
   display: flex;

   & > span {
      display: block;
      width:8px;
      height: 8px;
      border-radius: 32px;
      background-color: ${props => props.theme.palette.white};
      margin-right: 0.5rem;
      transition: width 0.1s ease-in-out;
      cursor:pointer;
   }

   & > span:nth-child(1) {
      width: ${props => (props.count === 0 ? '24px' : '8px')};
      background-color: ${props => (props.count === 0 ? props.theme.palette.lionRed : props.theme.palette.white)}};
   }

   & > span:nth-child(2) {
      width: ${props => (props.count === 1 ? '24px' : '8px')};
      background-color: ${props => (props.count === 1 ? props.theme.palette.lionRed : props.theme.palette.white)}};
   }
`;

export const StartBtn = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 25rem;
   height: 3.75rem;
   font-size: 1.25rem;
   font-weight: 600;
   color: ${props => props.theme.palette.white};
   background-color: ${props => props.theme.palette.lionRed};
`;
