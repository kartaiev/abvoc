import { createGlobalStyle } from "styled-components";
import { background, fontColor } from "./utils";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
  }
  
  body {
    background: ${background};
    margin: 3vh 10% 0 10%;
    color: ${fontColor};
    font-family: "Josefine", sans-serif;
  }
  
  h1, h2 {
    font-family: 'Amatic SC', cursive;
    font-weight: bolder;
    letter-spacing: .1rem;
    margin: 10px 0 3px 10px;
  }
`;

export default GlobalStyle;
