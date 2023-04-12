import React from 'react';
import { AiOutlineNotification, AiOutlineComment, AiOutlineUser } from 'react-icons/ai';
import lion from '../../assets/lion-img.png';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
   max-width: 26.25rem;
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
   padding: 0.3125rem 0;
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
   width: 1.625rem;
   height: 1.625rem;
`;

const NavBarLink = styled.button`
   color: ${props => props.theme.palette.gray};

   & > svg {
      font-size: 1.25rem;
   }
`;

const NavigationBar = () => {
   const navigate = useNavigate();

   return (
      <Wrapper>
         <NavBar>
            <List onClick={() => navigate('/notice')}>
               <NavBarLink>
                  <AiOutlineNotification />
               </NavBarLink>
               <span>공지사항</span>
            </List>
            <List onClick={() => navigate('/search')}>
               <NavBarLink>
                  <BsSearch />
               </NavBarLink>
               <span>검색</span>
            </List>
            <List onClick={() => navigate('/home')}>
               <NavBarLink>
                  <HomeLionImg />
               </NavBarLink>
               <span>홈</span>
            </List>
            <List onClick={() => navigate('/community')}>
               <NavBarLink>
                  <AiOutlineComment />
               </NavBarLink>
               <span>커뮤니티</span>
            </List>
            <List onClick={() => navigate('/profile')}>
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
