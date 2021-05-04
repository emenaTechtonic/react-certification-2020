import { createGlobalStyle } from 'styled-components'
import { colors } from './styles/colors'

const { primaryDark, primaryLight } = colors

export const GlobalStyles = createGlobalStyle`
html, body, #root {
    height: 100%;
}

html {
  
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 400;
  font-family: sans-serif;
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

}
body {
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => (theme ? primaryDark : primaryLight)};
  margin-left: ${({ statusMenu }) => (statusMenu ? '4.5em' : '0')};
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
   @media only screen and (max-width: 480px) {
    margin-left: ${({ statusMenu }) => (statusMenu ? '4.5em' : '0')};
  }
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

.separator::before {
  content: '•';
  color: white;
  padding: 0.4rem;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: white;
}

a:active {
  color: blueviolet;
}


`
export default GlobalStyles
