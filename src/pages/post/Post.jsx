import React from 'react';
import * as S from './Post.style';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import NavigationBar from '../../components/navigation-bar/NavigationBar';

const Post = () => {
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
            <S.HeaderTitle>노트 작성</S.HeaderTitle>
            <S.HeaderBtn>등록하기</S.HeaderBtn>
         </S.Header>
         <S.PostWrapper>
            <S.SearchBar>
               <S.Search>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <circle
                        cx="7.84394"
                        cy="7.84442"
                        r="5.99237"
                        stroke="#999999"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M12.0117 12.3235L14.3611 14.6667"
                        stroke="#999999"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
                  책 검색
               </S.Search>
               <span>
                  * 검색을 통해 책 제목과 저자, 이미지를 자동으로 불러올 수 있습니다. 책이 없는 경우, 제목과 저자를 직접
                  작성할 수 있습니다.
               </span>
            </S.SearchBar>
            <S.PostItem>
               <S.Item>
                  <S.ItemImg>
                     <span>이미지</span>
                  </S.ItemImg>
                  <S.ItemContent>
                     <S.ItemTitle type="text" placeholder="책 제목" />
                     <S.ItemAuthor type="text" placeholder="저자" />
                  </S.ItemContent>
               </S.Item>
            </S.PostItem>
            <S.ItemNote
               type="text"
               placeholder="그림책을 읽고 난 후 어땠는지 평가해주세요! (200자 이내)"
               maxLength={200}
            />
         </S.PostWrapper>
         <NavigationBar />
      </>
   );
};

export default Post;
