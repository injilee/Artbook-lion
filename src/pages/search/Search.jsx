import React, { useEffect } from 'react';
import * as S from './Search.style';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import NavigationBar from '../../components/navigation-bar/NavigationBar';

const Search = ({ searchService }) => {
   const navigate = useNavigate();
   const backPage = () => {
      navigate(-1);
   };

   useEffect(() => {
      const fetchData = async () => {
         const result = await searchService.search();
         console.log(result.items);
      };
      fetchData();
   }, [searchService]);

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
         <S.SearchWrapper>
            <S.SearchBox>
               <input type="text" placeholder="🔍 책 제목, 저자 검색하기" />
            </S.SearchBox>
         </S.SearchWrapper>
         <NavigationBar />
      </>
   );
};

export default Search;
