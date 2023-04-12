import React from 'react';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import * as S from './Home.style';
import AnotherMenu from './another-menu/AnotherMenu';
import Communities from './Communities/Communities';
import SuggestBook from './suggestBook/SuggestBook';
import { MdArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Home = ({ bookData }) => {
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
            <S.HeaderTitle>그림책 라이언</S.HeaderTitle>
         </S.Header>
         <S.Wrapper>
            <SuggestBook bookData={bookData} />
            <S.NoticeWrapper>
               <h3>라이언 소식</h3>
               <S.NoticeContent>
                  <ul>
                     <S.NoticeList>
                        <p>[전시] 볼로냐 일러스트 원화전 2022</p>
                     </S.NoticeList>
                     <S.NoticeList>
                        <p>[공지] 그림책 라이언이 뭐에요?</p>
                     </S.NoticeList>
                  </ul>
               </S.NoticeContent>
            </S.NoticeWrapper>
            <S.Banner>
               <S.BannerWrap>
                  <S.BannerText>
                     <p>독서노트 작성하고 그림책 평가하기</p>
                  </S.BannerText>
                  <S.BannerBtn>
                     <span>작성하러 가기</span>
                  </S.BannerBtn>
               </S.BannerWrap>
            </S.Banner>
            <Communities />
            <AnotherMenu />
         </S.Wrapper>
         <NavigationBar />
      </>
   );
};

export default Home;
