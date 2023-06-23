import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Inter', sans-serif;
  }
  #root{
    display: grid;
    grid-template-columns: 308px 1fr;
  }
`;

export default GlobalStyle;
