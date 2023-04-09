import React from 'react';
import { BackHomeBtn, ErrorImg, ErrorImgBox, ErrorText, ErrorWrapper } from './Error.style';
import { useNavigate } from 'react-router-dom';

const Error = () => {
   const navigate = useNavigate();

   return (
      <ErrorWrapper>
         <ErrorImgBox>
            <ErrorImg></ErrorImg>
         </ErrorImgBox>
         <ErrorText>
            <h1>Not Lion Found</h1>
            <p>페이지를 찾을 수 없습니다 😥</p>
            <BackHomeBtn onClick={() => navigate('/')}>홈으로 돌아가기</BackHomeBtn>
         </ErrorText>
      </ErrorWrapper>
   );
};

export default Error;
