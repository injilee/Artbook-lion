import React from 'react';
import * as S from './Login.style';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const navigator = useNavigate();

   return (
      <S.LoginWrapper>
         <S.LoginText>
            <h1>로그인</h1>
            <p>
               회원가입 시 그림책 정보와 전시 소식을 <br /> 받아볼 수 있어요!
            </p>
         </S.LoginText>
         <S.LoginInputBox>
            <S.LoginInput placeholder="Email Address" type="email" />
            <S.LoginInput placeholder="Password" type="password" />
         </S.LoginInputBox>
         <S.LoginBtn>
            <button>로그인</button>
            <S.LoginOthers>
               <p>이메일로 회원가입하기</p>
               <span onClick={() => navigator('/signin')}>Sign in</span>
            </S.LoginOthers>
         </S.LoginBtn>
      </S.LoginWrapper>
   );
};

export default Login;
