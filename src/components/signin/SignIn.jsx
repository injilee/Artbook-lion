import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SignIn.style';

const SignIn = ({ authService }) => {
   const [userName, setUserName] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [userPassword, setUserPassword] = useState('');
   const [nameMessage, setNameMessage] = useState('');
   const [emailMessage, setEmailMessage] = useState('');
   const [passwordMessage, setPasswordMessage] = useState('');
   const [isValidateName, setIsValidateName] = useState(false);
   const [isValidateEmail, setIsValidateEmail] = useState(false);
   const [isValidatePassword, setIsValidatePassword] = useState(false);
   const navigator = useNavigate();

   const checked = isValidateName && isValidateEmail && isValidatePassword;

   const nameRef = useRef();
   const emailRef = useRef();
   const passwordRef = useRef();

   const nameRegex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9_]+$/;
   const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

   const checkName = () => {
      const nameValue = nameRef.current.value;
      if (nameValue.length < 8 && nameValue.length > 1 && nameValue.match(nameRegex)) {
         setUserName(nameValue);
         setNameMessage('');
         setIsValidateName(true);
      } else {
         setUserName('');
         setNameMessage('* 2 ~ 8자 이내로 입력해주세요.');
         setIsValidateName(false);
      }
   };

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

   const onSignIn = event => {
      event.preventDefault();
      if (checked) {
         sendUserData();
         alert('회원가입이 완료되었습니다.');
         navigator('/login');
      } else {
         return;
      }
   };

   const sendUserData = () => {
      authService.emailSignIn(userName, userEmail, userPassword);
      console.log(userEmail, userPassword);
   };

   return (
      <S.SignInWrapper>
         <S.SignInText>
            <h1>이메일로 회원가입</h1>
            <p>
               회원가입 시 그림책 정보와 전시 소식을 <br /> 받아볼 수 있어요!
            </p>
         </S.SignInText>
         <S.SignInInputBox>
            <S.SignInInput ref={nameRef} onChange={checkName} placeholder="Name" type="text" />
            <p>{nameMessage}</p>
            <S.SignInInput ref={emailRef} onChange={checkEmail} placeholder="Email Address" type="email" />
            <p>{emailMessage}</p>
            <S.SignInInput ref={passwordRef} onChange={checkPassword} placeholder="Password" type="password" />
            <p>{passwordMessage}</p>
         </S.SignInInputBox>
         <S.SignInBtn checked={checked === false ? false : true}>
            <button type="submit" onClick={onSignIn}>
               다음
            </button>
            <S.SignInOthers>
               <p>이미 회원가입이 되어 있으신가요?</p>
               <span onClick={() => navigator('/login')}>Login</span>
            </S.SignInOthers>
         </S.SignInBtn>
      </S.SignInWrapper>
   );
};

export default SignIn;
