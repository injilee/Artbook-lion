import styled from 'styled-components';

export const LoginWrapper = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 4.6875rem 0;
`;

export const LoginText = styled.div`
   text-align: center;

   & > h1 {
      font-size: 1.875rem;
      font-weight: 600;
      margin-bottom: 0.9375rem;
   }

   & > p {
      font-size: 1.1875rem;
      line-height: 1.75rem;
      color: ${props => props.theme.palette.gray};
      margin-bottom: 2.55rem;
   }
`;

export const LoginInputBox = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 1.5rem;
`;

export const LoginInput = styled.input.attrs(props => ({ placeholderTextColor: props.theme.palette.black }))`
   width: 21.875rem;
   font-size: 1rem;
   border: 1px solid rgba(0, 0, 0, 0.1);
   border-radius: 0.3125rem;
   background-color: ${props => props.theme.palette.white};
   padding: 0.9375rem 1.0625rem 0.9375rem 1.0625rem;
   margin-bottom: 0.8125rem;

   &:focus {
      outline: none;
      border: 1px solid ${props => props.theme.palette.lionRed};
   }
`;

export const LoginBtn = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   & > button {
      width: 13.125rem;
      height: 3.4375rem;
      font-size: 1.125rem;
      font-weight: 500;
      border-radius: 0.4375rem;
      color: ${props => props.theme.palette.white};
      background-color: ${props => props.theme.palette.lionRed};
      margin-bottom: 1rem;
   }
`;

export const LoginOthers = styled.div`
   & > p {
      display: inline;
      font-size: 1rem;
      color: ${props => props.theme.palette.gray};
      margin-right: 0.3125rem;
   }

   & > span {
      font-size: 1rem;
      font-weigth: 500;
      color: ${props => props.theme.palette.black};
      text-decoration: underline;
      cursor: pointer;
   }
`;
