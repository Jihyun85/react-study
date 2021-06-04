import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: 'MaruBuri-Regular';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'MaruBuri-Regular'
  }
  html {
    font-size: 62.5%;
  }
  body {    
    width: 100%;    
    padding: 5rem;
    background-color: #E7F2F8;
  }
  input,button {
    border: none;
    outline: none;
  }
  button {
    background-color: inherit;
  }
  ul, li {
    list-style: none;
}
`;
export default GlobalStyles;
