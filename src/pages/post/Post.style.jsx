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

export const HeaderBtn = styled.div`
   position: absolute;
   right: 0.875rem;
   font-size: 1rem;
   font-weight: 500;
   cursor: pointer;
`;

// Post
export const PostWrapper = styled.section`
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

// SearchBar
export const SearchBar = styled.div`
   display: flex;
   flex-direction: column;

   span {
      color: ${props => props.theme.palette.lionRed};
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 1.03125rem;
   }
`;

export const Search = styled.div`
   display: flex;
   align-items: center;
   height: 2.25rem;
   padding: 0.56rem 1rem;
   border-radius: 0.625rem;
   color: ${props => props.theme.palette.gray};
   background-color: ${props => props.theme.palette.inputBox};
   margin-bottom: 0.56rem;
   cursor: pointer;

   svg {
      margin-right: 0.5rem;
   }
`;

export const PostItem = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   padding: 1.37rem 0;
   margin-bottom: 1.25rem;
   border-bottom: 1px solid #bec2c2;

   img {
      width: 7rem;
      height: 6.4375rem;
      object-fit: contain;
   }
`;

export const Item = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

export const ItemImg = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 8.125rem;
   height: 7.4375rem;
   border: 1px solid ${props => props.theme.palette.gray};
   margin-right: 0.5rem;
   span {
      font-size: 0.75rem;
      color: ${props => props.theme.palette.gray};
   }
`;

export const ItemContent = styled.div`
   display: flex;
   flex-direction: column;
`;

export const ItemTitle = styled.input`
   color: ${props => props.theme.palette.black};
   font-size: 1.1rem;
   font-weight: 600;
   border: none;
   margin-bottom: 0.19rem;
   &:focus {
      outline: none;
   }
`;

export const ItemAuthor = styled.input`
   color: ${props => props.theme.palette.gray};
   font-size: 0.9rem;
   font-weight: 300;
   border: none;
   &:focus {
      outline: none;
   }
`;

export const ItemNote = styled.textarea`
   width: 100%;
   height: 10rem;
   color: ${props => props.theme.palette.black};
   font-size: 1rem;
   font-weight: 300;
   border: none;
   resize: none;

   &:focus {
      outline: none;
   }
`;
