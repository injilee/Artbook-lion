import React, { useRef, useState } from 'react';
import * as S from './Login.style';
import { useNavigate } from 'react-router-dom';

const Login = ({ authService }) => {
   const [userEmail, setUserEmail] = useState('');
   const [userPassword, setUserPassword] = useState('');
   const [emailMessage, setEmailMessage] = useState('');
   const [passwordMessage, setPasswordMessage] = useState('');
   const [isValidateEmail, setIsValidateEmail] = useState(false);
   const [isValidatePassword, setIsValidatePassword] = useState(false);
   const navigator = useNavigate();

   const checked = isValidateEmail && isValidatePassword;

   const emailRef = useRef();
   const passwordRef = useRef();

   const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

   const checkEmail = () => {
      const emailValue = emailRef.current.value;
      if (emailValue.length !== '' && emailValue.match(emailRegex)) {
         setUserEmail(emailValue);
         setEmailMessage('');
         setIsValidateEmail(true);
      } else {
         setUserEmail('');
         setEmailMessage('* 이메일을 정확히 입력해주세요.');
         setIsValidateEmail(false);
      }
   };

   const checkPassword = () => {
      const passwordValue = passwordRef.current.value;
      if (passwordValue.length < 11 && passwordValue.length > 5 && passwordValue !== '') {
         setUserPassword(passwordValue);
         setPasswordMessage('');
         setIsValidatePassword(true);
      } else {
         setUserPassword('');
         setPasswordMessage('* 비밀번호는 5자 ~ 10자 미만이어야 합니다.');
         setIsValidatePassword(false);
      }
   };

   const loginEmailAndPassword = event => {
      event.preventDefault();
      if (checked) {
         authService.checkedEmailPassword(navigator, userEmail, userPassword);
      }
      return;
   };

   return (
      <S.LoginWrapper>
         <S.LoginText>
            <h1>로그인</h1>
            <p>
               회원가입 시 그림책 정보와 전시 소식을 <br /> 받아볼 수 있어요!
            </p>
         </S.LoginText>
         <S.LoginInputBox>
            <S.LoginInput ref={emailRef} onChange={checkEmail} placeholder="Email Address" type="email" />
            <p>{emailMessage}</p>
            <S.LoginInput ref={passwordRef} onChange={checkPassword} placeholder="Password" type="password" />
            <p>{passwordMessage}</p>
         </S.LoginInputBox>
         <S.LoginBtn checked={checked === false ? false : true}>
            <button type="submit" onClick={loginEmailAndPassword}>
               로그인
            </button>
            <S.LoginOthers>
               <p>이메일로 회원가입하기</p>
               <span onClick={() => navigator('/signin')}>Sign in</span>
            </S.LoginOthers>
         </S.LoginBtn>
      </S.LoginWrapper>
   );
};

export default Login;
