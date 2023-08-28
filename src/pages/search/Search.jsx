import React from 'react';
import * as S from './Search.style';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';

const Search = () => {
   const navigate = useNavigate();
   const queryRef = useRef();
   const [isBook, setIsBook] = useState([]);
   const backPage = () => {
      navigate(-1);
   };

   const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
   const URL = `${PROXY}/v1/search/book.json`;

   async function fetchData(query) {
      try {
         const response = await axios.get(URL, {
            headers: {
               'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID,
               'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_CLIENT_SECRET,
            },
            params: {
               query: query,
               display: 20,
            },
         });

         setIsBook(response.data.items);
      } catch (error) {
         console.error(error);
      }
   }

   const activeEnter = e => {
      if (e.key === 'Enter') {
         const query = queryRef.current.value;
         fetchData(query);
      }
      return;
   };

   const handleSubmit = () => {
      const query = queryRef.current.value;
      fetchData(query);
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
               <input type="text" ref={queryRef} onKeyDown={e => activeEnter(e)} placeholder="책 제목, 저자 입력" />
               <button type="button" onClick={() => handleSubmit()}>
                  찾기
               </button>
            </S.SearchBox>
            <S.SearchListWrapper>
               <S.SearchList>
                  {isBook.map((item, id) => {
                     return (
                        <Link
                           key={id}
                           to={{
                              pathname: `/detail/${id}`,
                           }}
                           state={{ book: isBook[id] }}
                        >
                           <S.SearchItems>
                              <S.ItemImg img={item.image} />
                              <S.Item>
                                 <S.ItemTitle>{item.title}</S.ItemTitle>
                                 <S.ItemAuthor>{item.author}</S.ItemAuthor>
                              </S.Item>
                           </S.SearchItems>
                        </Link>
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
