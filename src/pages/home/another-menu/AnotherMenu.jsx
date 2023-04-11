import React from 'react';
import styled from 'styled-components';
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
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 1.2rem;
   }
`;

const AnotherContent = styled.ul`
   display: flex;
   flex-direction: row;
   overflow-x: scroll;
   -ms-overflow-style:none;
   scrollbar-width:none;

   &::-webkit-scrollbar{
      display:none;
   }

   & > li:nth-child(1) {
      background-color: ${props => props.theme.palette.lightPink}};
   }

   & > li:nth-child(2) {
      background-color: ${props => props.theme.palette.lightGreen}};
   }

   & > li:nth-child(3) {
      background-color: ${props => props.theme.palette.lightYellow}};
   }

   & > li:nth-child(4) {
      background-color: ${props => props.theme.palette.lightBlue}};
   }
`;

const AnotherList = styled.li`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 7.1875rem;
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
   }

   & > span {
      text-align: center;
      white-space: nowrap;
   }
`;

const AnotherMenu = () => {
   return (
      <AnotherWrapper>
         <h3>더 많은 서비스</h3>
         <AnotherContent>
            <AnotherList>
               <AnotherBtn>
                  <img src={HomeIcon1} alt="메뉴 아이콘" />
                  <span>그림책 소식</span>
               </AnotherBtn>
            </AnotherList>
            <AnotherList>
               <AnotherBtn>
                  <img src={HomeIcon2} alt="메뉴 아이콘" />
                  <span>독서노트</span>
               </AnotherBtn>
            </AnotherList>
            <AnotherList>
               <AnotherBtn>
                  <img src={HomeIcon3} alt="메뉴 아이콘" />
                  <span>커뮤니티</span>
               </AnotherBtn>
            </AnotherList>
            <AnotherList>
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