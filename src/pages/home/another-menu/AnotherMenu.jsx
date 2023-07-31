import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HomeIcon1 from '../../../assets/home-icon1.png';
import HomeIcon2 from '../../../assets/home-icon2.png';
import HomeIcon3 from '../../../assets/home-icon3.png';
import HomeIcon4 from '../../../assets/home-icon4.png';

const AnotherWrapper = styled.article`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin-bottom: 2.8125rem;

   & > h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1.2rem;
   }
`;

const AnotherContent = styled.ul`
   display: flex;
   overflow-x: scroll;
   scrollbar-width: none;
   user-select: none;
   transition: all 0.3s ease;
   -ms-overflow-style: none;
   -webkit-touch-callout: none;
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;

   &::-webkit-scrollbar {
      display: none;
   }

   & > li:nth-child(1) {
      background-color: ${props => props.theme.palette.lightPink};
   }

   & > li:nth-child(2) {
      background-color: ${props => props.theme.palette.lightGreen};
   }

   & > li:nth-child(3) {
      background-color: ${props => props.theme.palette.lightYellow};
   }

   & > li:nth-child(4) {
      background-color: ${props => props.theme.palette.lightBlue};
   }
`;

const AnotherList = styled.li`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 1.25rem;
   padding: 1.25rem 1.7rem;
   margin-right: 0.9rem;
   cursor: pointer;
`;

const AnotherBtn = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 3.75rem;

   & > img {
      height: 40px;
      margin-bottom: 0.625rem;
      -webkit-user-drag: none;
   }

   & > span {
      text-align: center;
      white-space: nowrap;
      font-size: 0.9rem;
   }
`;

const AnotherMenu = () => {
   const containerRef = useRef(null);
   const [startX, setStartX] = useState('');
   const [position, setposition] = useState('');
   const [isScroll, setIsScroll] = useState('');

   const navigate = useNavigate();
   const handleScrollMove = e => {
      const x = position + startX - e.clientX;
      if (isScroll) {
         containerRef.current.scrollLeft = `${x}`;
      }
      return;
   };

   const moveToPage = page => {
      switch (page) {
         case 'notice':
            navigate('/notice');
            break;

         case 'post':
            navigate('/post');
            break;

         case 'community':
            navigate('/community');
            break;

         case 'search':
            navigate('/search');
            break;

         default:
            break;
      }
   };

   const handleMouseEvent = (e, scroll) => {
      switch (scroll) {
         case 'start':
            setStartX(e.clientX);
            setIsScroll(true);
            break;

         case 'end':
            setposition(containerRef.current.scrollLeft);
            setIsScroll(false);
            break;

         case 'leave':
            setIsScroll(false);
            break;

         default:
            break;
      }
   };

   return (
      <AnotherWrapper>
         <h3>더 많은 서비스</h3>
         <AnotherContent
            ref={containerRef}
            onMouseDown={e => handleMouseEvent(e, 'start')}
            onMouseUp={e => handleMouseEvent(e, 'end')}
            onMouseLeave={e => handleMouseEvent(e, 'leave')}
            onMouseMove={handleScrollMove}
         >
            <AnotherList onClick={() => moveToPage('notice')}>
               <AnotherBtn>
                  <img src={HomeIcon1} alt="메뉴 아이콘" />
                  <span>그림책 소식</span>
               </AnotherBtn>
            </AnotherList>
            <AnotherList onClick={() => moveToPage('post')}>
               <AnotherBtn>
                  <img src={HomeIcon2} alt="메뉴 아이콘" />
                  <span>독서노트</span>
               </AnotherBtn>
            </AnotherList>
            <AnotherList onClick={() => moveToPage('community')}>
               <AnotherBtn>
                  <img src={HomeIcon3} alt="메뉴 아이콘" />
                  <span>커뮤니티</span>
               </AnotherBtn>
            </AnotherList>
            <AnotherList onClick={() => moveToPage('search')}>
               <AnotherBtn>
                  <img src={HomeIcon4} alt="메뉴 아이콘" />
                  <span>그림책 검색</span>
               </AnotherBtn>
            </AnotherList>
         </AnotherContent>
      </AnotherWrapper>
   );
};

export default AnotherMenu;
