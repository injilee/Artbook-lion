import React from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import * as S from './MainHeader.style';

const MainHeader = () => {
   return (
      <S.Wrapper>
         <S.BackBtn>
            <button aria-label="이전으로 돌아가기">
               <MdArrowBackIos></MdArrowBackIos>
            </button>
         </S.BackBtn>
         <S.HeaderTitle>그림책 라이언</S.HeaderTitle>
      </S.Wrapper>
   );
};

export default MainHeader;
