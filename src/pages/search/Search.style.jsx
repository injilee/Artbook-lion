import styled from 'styled-components';

/* header */
export const Header = styled.div`
   max-width: 26.25rem;
   position: fixed;
   top: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 3.4375rem;
   border-bottom: 1px solid ${props => props.theme.palette.lightGray};
   background-color: ${props => props.theme.palette.white};

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

/* search */
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

// export const SearchBar = styled.div`
// `;
