import React, { useState } from 'react';
import * as S from './Notice.style';
import { MdArrowBackIos } from 'react-icons/md';
import { GrFormClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import NoticeInfo from './NoticeInfo';

const Notice = () => {
   const [isCollapse, setIsCollapse] = useState(false);

   const navigate = useNavigate();
   const backPage = () => {
      navigate(-1);
   };

   const handleShowItem = index => {
      if (isCollapse === index) {
         return setIsCollapse(null);
      }

      setIsCollapse(index);
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
               {NoticeInfo.map((value, index) => {
                  // 현재 항목이 펼쳐졌는지 여부 확인
                  const isItemOpen = isCollapse === index;

                  return (
                     <S.NoticeList key={value.id}>
                        <S.NoticeTitle onClick={() => handleShowItem(index)} key={index}>
                           <div>
                              <h2>
                                 [{value.section}] {value.title}
                              </h2>
                              <span>{value.time}</span>
                           </div>
                           <S.SlideButton isCollapse={isCollapse === index ? true : false}>
                              <GrFormClose />
                           </S.SlideButton>
                        </S.NoticeTitle>
                        <S.ContentWrapper className={isItemOpen ? 'open' : ''}>
                           <S.Content>
                              {value.imageUrl ? <img src={value.imageUrl} alt={value.imageAlt} /> : ''}
                              <p>{value.content}</p>
                           </S.Content>
                        </S.ContentWrapper>
                     </S.NoticeList>
                  );
               })}
            </S.NoticeContent>
         </S.NoticeWrapper>
         <NavigationBar />
      </>
   );
};

export default Notice;
