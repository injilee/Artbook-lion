import React, { useEffect, useRef, useState } from 'react';
import * as S from './Login.style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/store';

const Login = ({ authService }) => {
   const emailRef = useRef();
   const passwordRef = useRef();
   const navigator = useNavigate();
   const dispatch = useDispatch();

   const [userEmail, setUserEmail] = useState('');
   const [userPassword, setUserPassword] = useState('');
   const [emailMessage, setEmailMessage] = useState('');
   const [passwordMessage, setPasswordMessage] = useState('');
   const [isValidateEmail, setIsValidateEmail] = useState(false);
   const [isValidatePassword, setIsValidatePassword] = useState(false);
   const uid = useSelector(state => state.user.uid);

   const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
   const checked = isValidateEmail && isValidatePassword;

   useEffect(() => {
      authService.onAuthChanged(user => {
         if (user !== null) {
            const profile = {
               displayName: user.displayName,
               uid: user.uid,
               email: user.email,
            };
            dispatch(setUser(profile));
            navigator('/home');
         } else if (uid) {
            navigator('/home');
         }
      });
   }, [authService, dispatch, navigator, uid]);

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
         authService.loginWithEmailAndPass(userEmail, userPassword);
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
         <S.LoginInputBox id="login">
            <S.LoginInput name="login" ref={emailRef} onChange={checkEmail} placeholder="Email Address" type="email" />
            <p>{emailMessage}</p>
            <S.LoginInput
               name="login"
               ref={passwordRef}
               onChange={checkPassword}
               placeholder="Password"
               type="password"
            />
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
