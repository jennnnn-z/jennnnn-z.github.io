import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Albert Sans", "Albert Sans Placeholder", sans-serif;
    background-color: #f7f7f7;
  }
  h1 {
    flex-shrink: 0;
    width: auto; /* 290px */
    height: auto; /* 84px */
    white-space: pre;
    position: relative;
    line-height: 1.2;
  }
`;

export default GlobalStyles;
