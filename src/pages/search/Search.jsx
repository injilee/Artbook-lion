import axios from 'axios';
import React from 'react';
import * as S from './Search.style';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResults } from '../../store/store';

const Search = () => {
   const queryRef = useRef();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const results = useSelector(state => state.searchResults.results);

   const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
   const URL = `${PROXY}/v1/search/book.json`;

   const backPage = () => {
      navigate(-1);
   };

   const instance = axios.create({
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
         'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID,
         'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_CLIENT_SECRET,
      },
   });

   async function fetchData(query) {
      try {
         const response = await instance.get(URL, {
            params: {
               query: query,
               display: 60,
            },
         });
         const result = response.data.items.map(item => {
            const data = {
               title: item.title,
               image: item.image,
               author: item.author,
               description: item.description,
            };
            return data;
         });
         dispatch(setResults(result));
      } catch (error) {
         console.error(error);
      }
   }

   const handleKeyPress = e => {
      if (e.key === 'Enter') {
         e.preventDefault();
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
            <S.SearchBox id="seachBooks">
               <input
                  name="seachBooks"
                  type="text"
                  ref={queryRef}
                  onKeyDown={e => handleKeyPress(e)}
                  placeholder="책 제목, 저자 입력"
               />
               <button type="button" onClick={() => handleSubmit()}>
                  찾기
               </button>
            </S.SearchBox>
            <S.SearchListWrapper>
               <S.SearchList>
                  {results.map((item, id) => {
                     return (
                        <Link
                           key={id}
                           to={{
                              pathname: `/detail/${id}`,
                           }}
                           state={{ book: results[id] }}
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
