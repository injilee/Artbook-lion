import React from 'react';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import MainHeader from '../../components/header/main-header/MainHeader';
import * as S from './Home.style';
import AnotherMenu from './another-menu/AnotherMenu';
import Communities from './Communities/Communities';

const Home = ({ bookData }) => {
   const getBook = bookData.filter(value => value.id === 4);

   return (
      <>
         <MainHeader />
         <S.Wrapper>
            <S.RecommendBook>
               <h2>{getBook[0].id}월 추천 그림책</h2>
               <S.ImgBox>
                  <img src={getBook[0].src} alt={getBook[0].alt} />
               </S.ImgBox>
               <S.BookDetail>
                  <S.BookTitle>
                     {getBook[0].title} {getBook[0].athor}
                  </S.BookTitle>
                  <S.BookDescription>
                     <strong>{getBook[0].description[0]}</strong>
                     <p>{getBook[0].description[1]}</p>
                  </S.BookDescription>
               </S.BookDetail>
            </S.RecommendBook>
            <S.NoticeWrapper>
               <h3>라이언 소식</h3>
               <S.NoticeContent>
                  <S.NoticeBox>
                     <S.NoticeList>
                        <p>[전시] 볼로냐 일러스트 원화전 2022</p>
                     </S.NoticeList>
                     <S.NoticeList>
                        <p>[공지] 그림책 라이언이 뭐에요?</p>
                     </S.NoticeList>
                  </S.NoticeBox>
               </S.NoticeContent>
            </S.NoticeWrapper>
            <Communities />
            <AnotherMenu />
         </S.Wrapper>
         <NavigationBar />
      </>
   );
};

export default Home;
