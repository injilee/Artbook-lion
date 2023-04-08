import React, { createRef, useEffect, useState } from 'react';
import * as S from './Onboarding.style';
import dataOnboarding from './DataOnboarding';

const Onboarding = () => {
   const [count, setCount] = useState(0);
   const listRef = createRef();

   const prevBtn = () => {
      listRef.current.scrollTo({
         left: listRef.current.offsetWidth - listRef.current.scrollLeft,
         behavior: 'smooth',
      });
      setCount(count - 1);
   };

   const swiperHandler = () => {
      if (count === 2) {
         return;
      }
      setCount(count + 1);
      listRef.current.scrollTo({
         left: listRef.current.scrollLeft + listRef.current.offsetWidth,
         behavior: 'smooth',
      });
   };

   useEffect(() => {
      return () => {
         setCount(0);
      };
   }, []);

   return (
      <S.OnboardWrapper>
         <S.OnboardContent ref={listRef}>
            {dataOnboarding.map(user => (
               <li key={user.id}>
                  <S.OnboardImgBox>
                     <S.OnboardImage id={user.id} src={user.image} alt={user.name}></S.OnboardImage>
                  </S.OnboardImgBox>
                  <S.OnboardDetail>
                     <p>{user.title}</p>
                     <span>{user.description}</span>
                  </S.OnboardDetail>
               </li>
            ))}
         </S.OnboardContent>
         {count === 2 ? (
            <S.StartBtn>Get Started!</S.StartBtn>
         ) : (
            <S.OnboardFooter>
               <button type="button" onClick={prevBtn}>
                  Prev
               </button>
               <S.OnboardSwiper count={count}>
                  <span></span>
                  <span></span>
                  <span></span>
               </S.OnboardSwiper>
               <button type="button" onClick={swiperHandler}>
                  Next
               </button>
            </S.OnboardFooter>
         )}
      </S.OnboardWrapper>
   );
};

export default Onboarding;
