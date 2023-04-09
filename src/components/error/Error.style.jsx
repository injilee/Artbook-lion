import styled from 'styled-components';
import Image404 from '../../assets/page-not-found.png';

export const ErrorWrapper = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;
`;

export const ErrorImgBox = styled.div`
   width: 18.75rem;
   margin-bottom: 2.5rem;
`;

export const ErrorImg = styled.img.attrs({
   src: Image404,
   alt: '페이지를 찾을 수 없습니다.',
})`
   width: 100%;
`;

export const ErrorText = styled.div`
   text-align: center;

   & > h1 {
      font-size: 1.875rem;
      font-weight: 600;
      margin-bottom: 0.9375rem;
   }

   & > p {
      font-size: 1.0625rem;
      margin-bottom: 3.125rem;
      color: ${props => props.theme.palette.gray};
   }
`;

export const BackHomeBtn = styled.button`
   width: 12.5rem;
   height: 3.75rem;
   font-size: 1.125rem;
   font-weight: 500;
   border-radius: 0.9375rem;
   color: ${props => props.theme.palette.white};
   background-color: ${props => props.theme.palette.lionRed};
`;
