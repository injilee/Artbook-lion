import React from 'react';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import AnotherMenu from './another-menu/AnotherMenu';
import Communities from './Communities/Communities';
import SuggestBook from './suggestBook/SuggestBook';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import * as S from './Home.style';
import { MdArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Home = ({ bookData }) => {
   const navigate = useNavigate();

   const backPage = () => {
      navigate(-1);
   };

   const noticePage = () => {
      navigate('/notice');
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
                  <Swiper
                     style={{
                        height: '100%',
                     }}
                     direction="vertical"
                     slidesPerView={1}
                     autoplay={{ delay: '4000', disableOnInteraction: false }}
                     loop="true"
                     modules={[Autoplay]}
                  >
                     <SwiperSlide>
                        <S.NoticeList onClick={noticePage}>[전시] 볼로냐 일러스트 원화전 2022</S.NoticeList>
                     </SwiperSlide>
                     <SwiperSlide>
                        <S.NoticeList onClick={noticePage}>[공지] 그림책 라이언이 뭐에요?</S.NoticeList>
                     </SwiperSlide>
                  </Swiper>
               </S.NoticeContent>
            </S.NoticeWrapper>
            <S.Banner>
               <S.BannerWrap>
                  <S.BannerText>
                     <p>독서노트 작성하고 그림책 평가하기</p>
                  </S.BannerText>
                  <S.BannerBtn onClick={() => navigate('/post')}>
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
