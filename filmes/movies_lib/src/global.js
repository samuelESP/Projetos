import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
* {
    font-family: Helvetica;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #000;
    color: #ffffff;
  }
  
  a {
    text-decoration: none;
    color: #f7d354;
    transition: 0.5s;
  }
  
  a:hover {
    color: #b8930c;
  }`