import React from 'react';
import * as S from './Notice.style';
import { MdArrowBackIos } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import NoticeInfo from './NoticeInfo';

const Notice = () => {
   const navigate = useNavigate();
   const backPage = () => {
      navigate(-1);
   };

   return (
      <>
         <S.Header>
            <S.HeaderBackBtn>
               <button aria-label="이전으로 돌아가기" onClick={backPage}>
                  <MdArrowBackIos></MdArrowBackIos>
               </button>
            </S.HeaderBackBtn>
            <S.HeaderTitle>공지사항</S.HeaderTitle>
         </S.Header>
         <S.NoticeWrapper>
            <S.NoticeContent>
               {NoticeInfo.map(value => (
                  <S.NoticeList key={value.id}>
                     <S.NoticeTitle>
                        <h2>
                           [{value.section}] {value.title}
                        </h2>
                        <span>{value.time}</span>
                     </S.NoticeTitle>
                     <button>
                        <IoIosArrowDown />
                     </button>
                  </S.NoticeList>
               ))}
            </S.NoticeContent>
         </S.NoticeWrapper>
         <NavigationBar />
      </>
   );
};

export default Notice;
