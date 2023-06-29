import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

  ${reset}

html {
    --text-color : #202124;
    --hint-text-color : #666666;
    --background-color : #F0EBF8;
    --primary-color: #673AB7;
    --border-color: #DADCE0;
    --input-background-color : #F8F9FA;
    --input-hint-color: #9BA0A5;
}

body {
  color: var(--text-color);
  background: var(--background-color);
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


a{
  text-decoration: none;
  color: var(--text-color);
}

*{
  box-sizing: border-box;
}
  
input, textarea { 
  -moz-user-select: auto;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
  color: var(--text-color);
 
}

input::placeholder {
  color: var(--input-hint-color);
}

input:focus {
  outline: none;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

textarea:focus {
  outline: none;
}
  
button {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}
  
select {
  border: none;
  background: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

`;

export default GlobalStyle;
