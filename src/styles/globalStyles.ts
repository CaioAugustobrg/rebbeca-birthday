import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Butterfly+Kids&display=swap'); */

  * {
    list-style-type: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  a {
    text-decoration: none;
  }

  html, body {
    p {

      font-family: "Butterfly Kids", cursive; /* Defina a fonte para todo o corpo */
    }
  }

  :root {
    --main-sidebarwidth: 285px;
    --main-sidebar-iconwidth: 22px;
    --main-generalcolorblue: #005cb7;
    --chakra-colors-blue-900: #005cb7;
  }
`;
