import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SignIn.style';

const SignIn = () => {
   const navigator = useNavigate();

   return (
      <S.SignInWrapper>
         <S.SignInText>
            <h1>이메일로 회원가입</h1>
            <p>
               회원가입 시 그림책 정보와 전시 소식을 <br /> 받아볼 수 있어요!
            </p>
         </S.SignInText>
         <S.SignInInputBox>
            <S.SignInInput placeholder="Name" type="text" />
            <S.SignInInput placeholder="Email Address" type="email" />
            <S.SignInInput placeholder="Password" type="password" />
         </S.SignInInputBox>
         <S.SignInBtn>
            <button>다음</button>
            <S.SignInOthers>
               <p>이미 회원가입이 되어 있으신가요?</p>
               <span onClick={() => navigator('/login')}>Login</span>
            </S.SignInOthers>
         </S.SignInBtn>
      </S.SignInWrapper>
   );
};

export default SignIn;
