import {createGlobalStyle} from "styled-components";
import {Theme} from "styles/Theme";

export const GlobalStyles =createGlobalStyle`

  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  
  body {
    margin: 0;
    font-family: "Montserrat",-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${Theme.colors.font};
  }

 a {
   text-decoration: none;
   cursor: pointer;
 }
 ul {
   list-style: none;
 }
 button {
   background-color: unset;
   border: none;
 }
 section {
   background-color: ${Theme.colors.primary}; 
   padding: 100px 0;
 }
`