import React from 'react';
import * as S from './Detail.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import Icon from '../../assets/book-info-btn.png';

const Detail = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const { book } = location.state || {};
   const backPage = () => {
      navigate(-1);
   };

   if (!book) {
      // 예외 처리: 상세페이지로부터 book 객체가 전달되지 않은 경우
      return <div>No data available.</div>;
   }

   return (
      <>
         <S.Header>
            <S.HeaderBackBtn>
               <button aria-label="이전으로 돌아가기" onClick={backPage}>
                  <MdArrowBackIos></MdArrowBackIos>
               </button>
            </S.HeaderBackBtn>
            <S.HeaderTitle>도서 검색</S.HeaderTitle>
         </S.Header>
         <S.DetailWrapper>
            <S.DetailItem>
               <img src={book.image} alt={book.title} />
               <S.Item>
                  <S.ItemTitle>{book.title}</S.ItemTitle>
                  <S.ItemAuthor>{book.author}</S.ItemAuthor>
               </S.Item>
            </S.DetailItem>
            <S.InfoWrapper>
               <S.Info img={Icon}>상세정보</S.Info>
               <S.InfoDescription>{book.description}</S.InfoDescription>
            </S.InfoWrapper>
         </S.DetailWrapper>
         <NavigationBar />
      </>
   );
};

export default Detail;
