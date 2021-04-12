import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
    font-family: 'Nanum Gothic', sans-serif;
  }
`;
