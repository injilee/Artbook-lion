import React from 'react';
import * as S from './SuggestBook.style';

const SuggestBook = ({ bookData }) => {
   const getBook = bookData.filter(value => value.id === 4);

   return (
      <S.SuggestBookWrapper>
         <h2>{getBook[0].id}월 추천 그림책</h2>
         <S.ImgBox>
            <img src={getBook[0].src} alt={getBook[0].alt} />
         </S.ImgBox>
         <S.BookDetail>
            <S.BookTitle>
               {getBook[0].title} {getBook[0].athor}
            </S.BookTitle>
            <S.BookDescription>
               <strong>{getBook[0].description[0]}</strong>
               <p>{getBook[0].description[1]}</p>
            </S.BookDescription>
         </S.BookDetail>
      </S.SuggestBookWrapper>
   );
};

export default SuggestBook;
