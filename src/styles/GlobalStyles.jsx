import './font.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing:border-box;
  }

  body{
    background-color:#F9FAFB;
    font-family:Pretendard, sans-serif;
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
    display:block;
    border:none;
    background-color:transparent;
    cursor: pointer;
  }

`;

export default GlobalStyles;
