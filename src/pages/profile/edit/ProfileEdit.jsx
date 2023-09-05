import React from 'react';
import * as S from './ProfileEdit.style';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import { RiImageEditLine } from 'react-icons/ri';
import NavigationBar from '../../../components/navigation-bar/NavigationBar';
import defaultProfile from '../../../assets/lion-img.png';
import { useSelector } from 'react-redux';

const ProfileEdit = () => {
   const navigate = useNavigate();
   const account = useSelector(state => state.user.account);

   const backPage = () => {
      navigate(-1);
   };

   const successEdit = () => {
      alert('수정이 완료되었습니다.');
      navigate('/profile');
   };

   return (
      <>
         <S.Header>
            <S.HeaderBackBtn>
               <button aria-label="이전으로 돌아가기" onClick={backPage}>
                  <MdArrowBackIos></MdArrowBackIos>
               </button>
            </S.HeaderBackBtn>
            <S.HeaderTitle>프로필 수정</S.HeaderTitle>
         </S.Header>
         <S.ProfileEditWrapper>
            <S.Profile>
               <S.ProfileImg>
                  <img src={defaultProfile} alt="프로필" />
                  <button aria-label="프로필 사진 설정하기">
                     <RiImageEditLine></RiImageEditLine>
                  </button>
               </S.ProfileImg>
               <S.UserIdEdit>
                  <p htmlFor="name">사용자 계정</p>
                  <span>{account}</span>
               </S.UserIdEdit>
               <button onClick={successEdit}>수정하기</button>
            </S.Profile>
         </S.ProfileEditWrapper>
         <NavigationBar />
      </>
   );
};

export default ProfileEdit;
