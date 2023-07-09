import styled from 'styled-components';

// header
export const Header = styled.div`
   max-width: 26.25rem;
   position: fixed;
   top: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 3.4375rem;
   border-bottom: 2px solid ${props => props.theme.palette.lightGray};
   background-color: ${props => props.theme.palette.white};
   z-index: 10;

   @media screen and (max-width: 419px) {
      width: 100vw;
   }
`;

export const HeaderBackBtn = styled.div`
   position: absolute;
   top: 1.2rem;
   left: 0.875rem;

   & > svg {
      user-select: none;
   }
`;

export const HeaderTitle = styled.h1`
   font-size: 1.25rem;
   font-weight: 500;
`;

// search
export const SearchWrapper = styled.section`
   max-width: 26.25rem;
   width: 26.25rem;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: ${props => props.theme.palette.white};
   padding: 4.375rem 1.875rem;

   @media screen and (max-width: 419px) {
      width: 100vw;
      padding: 4.375rem 1rem;
   }
`;

export const SearchBox = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   & > input {
      width: 100%;
      padding: 1rem;
      border: none;
      border-radius: 0.625rem;
      background-color: ${props => props.theme.palette.inputBox};
   }
`;

export const SearchListWrapper = styled.article`
   display: flex;
   width: 100%;
   overflow-y: auto;
   &::-webkit-scrollbar {
      width: 8px;
   }
   &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: #ccc;
      background-clip: padding-box;
      border: 3px solid transparent;
   }
`;

export const SearchList = styled.ul`
   display: flex;
   flex-direction: column;
   width: 100%;
   padding-bottom: 3rem;
`;

export const SearchItems = styled.li`
   display: flex;
   align-items: center;
   padding: 1.37rem 0;
   border-bottom: 1px solid #bec2c2;
`;

export const ItemImg = styled.img.attrs(props => ({
   src: props.img || URL,
}))`
   width: 7rem;
   height: 6.4375rem;
   object-fit: contain;
`;

export const Item = styled.div`
   display: flex;
   flex-direction: column;
   width: 16.25rem;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

export const ItemTitle = styled.strong`
   color: #757575;
   font-size: 1.2rem;
   font-style: normal;
   font-weight: 600;
   line-height: 150%;
   letter-spacing: -0.02375rem;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

export const ItemAuthor = styled.p`
   color: #767676;
   font-size: 0.9rem;
   font-style: normal;
   font-weight: 300;
   line-height: 1.05rem;
   letter-spacing: -0.015rem;
`;
