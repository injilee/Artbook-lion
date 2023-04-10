import styled from 'styled-components';

export const Wrapper = styled.div`
   position: fixed;
   top: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 3.4375rem;
   border-bottom: 1px solid ${props => props.theme.palette.lightGray};
   background-color: ${props => props.theme.palette.white};
`;

export const BackBtn = styled.div`
   position: absolute;
   left: 1.875rem;

   & > svg {
      user-select: none;
   }
`;

export const HeaderTitle = styled.h1`
   font-size: 1.25rem;
   font-weight: 500;
`;
