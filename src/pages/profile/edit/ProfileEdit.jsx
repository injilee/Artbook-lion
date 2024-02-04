import React, { useCallback, useRef, useState } from 'react';
import * as S from './ProfileEdit.style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import { Line } from 'rc-progress';
import NavigationBar from '../../../components/navigation-bar/NavigationBar';
import defaultProfile from '../../../assets/lion-img.png';
import { uploadImageURL } from '../../../store/store';

const ProfileEdit = ({ storageService }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isUpload, setIsUpload] = useState(false);
  const account = useSelector(state => state.user.account);
  const name = useSelector(state => state.user.name);
  const url = useSelector(state => state.user.imageURL);

  const backPage = () => {
    navigate(-1);
  };

  const onUploadImg = async e => {
    const currentImg = e.target.files;
    if (currentImg) {
      setIsUpload(true);
      const url = await storageService.imageUpload(currentImg[0], setProgress);
      dispatch(uploadImageURL({ imageURL: url }));
    }
    setProgress(0);
    setIsUpload(false);
  };

  const onUploadImgBtnClick = useCallback(e => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click(e);
  }, []);

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
            <img src={url ? url : defaultProfile} alt="프로필" />
            <input type="file" accept="image/*" ref={inputRef} onChange={onUploadImg} />
            <Line percent={progress} strokeWidth={3} strokeColor="#00cc66" />
          </S.ProfileImg>
          <S.UserIdEdit>
            <p htmlFor="name">{name ? name : '사용자 계정'}</p>
            <span>{account}</span>
          </S.UserIdEdit>
          <button onClick={onUploadImgBtnClick}>{isUpload ? '업로드 중' : '이미지 변경'}</button>
        </S.Profile>
      </S.ProfileEditWrapper>
      <NavigationBar />
    </>
  );
};

export default ProfileEdit;
