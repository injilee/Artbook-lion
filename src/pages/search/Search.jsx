import React from 'react';
import * as S from './Search.style';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import { useState } from 'react';
import { useRef } from 'react';

const Search = ({ searchService }) => {
   const navigate = useNavigate();
   const queryRef = useRef();
   const [isBook, setIsBook] = useState([]);
   const backPage = () => {
      navigate(-1);
   };

   const fetchData = async value => {
      const result = await searchService.search(value);
      const list = [];

      result.items.map(item => {
         const book = {
            author: item.author,
            title: item.title,
            image: item.image,
            description: item.description,
         };

         list.push(book);
         return item;
      });
      setIsBook(list);
   };

   const activeEnter = e => {
      if (e.key === 'Enter') {
         const query = queryRef.current.value;
         fetchData(query);
      }
      return;
   };

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
               <input
                  type="text"
                  ref={queryRef}
                  onKeyDown={e => activeEnter(e)}
                  placeholder="🔍 책 제목, 저자 검색하기"
               />
            </S.SearchBox>
            <S.SearchListWrapper>
               <S.SearchList>
                  {isBook.map((item, index) => {
                     return (
                        <S.SearchItems key={index}>
                           <S.ItemImg img={item.image} />
                           <S.Item>
                              <S.ItemTitle>{item.title}</S.ItemTitle>
                              <S.ItemAuthor>{item.author}</S.ItemAuthor>
                           </S.Item>
                        </S.SearchItems>
                     );
                  })}
               </S.SearchList>
            </S.SearchListWrapper>
         </S.SearchWrapper>
         <NavigationBar />
      </>
   );
};

export default Search;
