import styled from 'styled-components';

export const SuggestBookWrapper = styled.article`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   & > h2 {
      font-size: 1.1rem;
      font-weight: 500;
      margin-bottom: 1.25rem;
   }
`;

export const ImgBox = styled.div`
   width: 12.5rem;
   margin-bottom: 1.5625rem;

   & > img {
      width: 100%;
   }
`;

export const BookDetail = styled.div`
   border-radius: 1.25rem;
   background-color: ${props => props.theme.palette.lightPink};
   padding: 1.5625rem 1.875rem;
   margin-bottom: 2.8125rem;
`;

export const BookTitle = styled.p`
   font-size: 1.2rem;
   font-weight: 600;
   margin-bottom: 0.625rem;

   @media screen and (max-width: 419px) {
      font-size: 1.1rem;
   }
`;

export const BookDescription = styled.div`
   font-size: 1rem;
   font-weight: 400;
   line-height: 1.6rem;

   & > strong {
      display: block;
      font-weight: 600;
      margin-bottom: 0.5rem;
   }

   @media screen and (max-width: 419px) {
      font-size: 1rem;
   }
`;
