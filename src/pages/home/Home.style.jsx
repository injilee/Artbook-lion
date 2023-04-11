import styled from 'styled-components';

/* home */
export const Wrapper = styled.section`
   max-width: 26.25rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: ${props => props.theme.palette.white};
   padding: 4.375rem 1.875rem;
`;

/* recommend-Book */
export const RecommendBook = styled.article`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   & > h2 {
      font-size: 1.2rem;
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
   font-size: 1.25rem;
   font-weight: 600;
   margin-bottom: 0.625rem;
`;

export const BookDescription = styled.div`
   font-size: 1.1rem;
   font-weight: 400;
   line-height: 1.6rem;

   & > strong {
      display: block;
      font-weight: 600;
      margin-bottom: 0.5rem;
   }
`;

/* notice */
export const NoticeWrapper = styled.article`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin-bottom: 2.8125rem;

   & > h3 {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 1.2rem;
   }
`;

export const NoticeContent = styled.div`
   border-radius: 1.25rem;
   background-color: ${props => props.theme.palette.lightGray};
   padding: 1.0625rem 0.9375rem;
`;

export const NoticeBox = styled.ul``;

export const NoticeList = styled.li`
   & > p {
      font-size: 1rem;
      font-weight: 400;
   }
`;
