import React from 'react';
import { AiOutlineNotification, AiOutlineComment, AiOutlineUser } from 'react-icons/ai';
import lion from '../../assets/home-logo.png';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

const Wrapper = styled.div`
   position: fixed;
   bottom: 0;
   width: 100%;
   border-top: 1px solid ${props => props.theme.palette.lightGray};
   background-color: ${props => props.theme.palette.white};
`;

const NavBar = styled.ul`
   display: flex;
   justify-content: space-around;
   align-items: center;

   // background-color:${props => props.theme.palette.lightGray};
`;

const List = styled.li`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: ${props => props.theme.palette.gray};
   padding: 0.9375rem 0;
   cursor: pointer;

   &:hover {
      color: ${props => props.theme.palette.lionRed};
   }

   & > span {
      font-size: 0.75rem;
      margin-top: 0.3125rem;
   }
`;

const HomeLionImg = styled.img.attrs({ src: lion, alt: '홈으로 가기' })`
   width: 2rem;
   height: 2rem;
`;

const NavBarLink = styled.button`
   color: ${props => props.theme.palette.gray};

   & > svg {
      font-size: 1.625rem;
   }
`;

const NavigationBar = () => {
   return (
      <Wrapper>
         <NavBar>
            <List>
               <NavBarLink>
                  <AiOutlineNotification />
               </NavBarLink>
               <span>공지사항</span>
            </List>
            <List>
               <NavBarLink>
                  <BsSearch />
               </NavBarLink>
               <span>검색</span>
            </List>
            <List>
               <NavBarLink>
                  <HomeLionImg />
               </NavBarLink>
               <span>홈</span>
            </List>
            <List>
               <NavBarLink>
                  <AiOutlineComment />
               </NavBarLink>
               <span>커뮤니티</span>
            </List>
            <List>
               <NavBarLink>
                  <AiOutlineUser />
               </NavBarLink>
               <span>프로필</span>
            </List>
         </NavBar>
      </Wrapper>
   );
};

export default NavigationBar;
