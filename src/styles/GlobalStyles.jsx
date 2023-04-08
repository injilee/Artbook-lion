import './font.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing:border-box;
  }

  body{
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#F9FAFB;
    font-family:Pretendard, sans-serif;
    margin:0 auto;
  }

  :is(ul, ol, li){
    margin:0;
    padding:0;
    list-style:none;
  }

  img{
    width:100%;
    display:block;
  }

  button{
    border:none;
    background-color:transparent;
   cursor: pointer;
  }

`;

export default GlobalStyles;
