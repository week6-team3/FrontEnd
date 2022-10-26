import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline : none;
    font-family: 'twayair';
  }

  body {
    background-image: url('https://img.freepik.com/free-photo/airport-terminal_1417-1455.jpg?w=1380&t=st=1666604607~exp=1666605207~hmac=8d32bee1ca5c2879bab8a0a9af6bea1c19b84a3489350201069731408f2b5ead');
    background-repeat : no-repeat;
    background-position: center;
    background-size: 100% 100%;
   
    
    overflow: auto;
  }

  html {
    font-size: 10px;
  }

  @font-face {
    font-family: 'twayair';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_tway@1.0/twayair.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

export default GlobalStyle;
