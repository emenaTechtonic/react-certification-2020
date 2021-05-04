import styled from 'styled-components'

const StyledMenu = styled.div.attrs({
  className: 'menu',
})`
  display: flex;
  z-index: 9;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ toggle }) => (toggle ? '#2d314d' : '#FFFFFF')};
  height: 100vh;
  text-align: left;
  width: ${({ toggle }) => (toggle ? '8em' : '0em')};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition-property: background, width;
  transition-duration: 0.1s, 0.1s;
  transition-timing-function: ease, ease;
  @media only screen and (max-width: 600px) {
    width: ${({ toggle }) => (toggle ? '8em' : '0')};
  }
  a {
    margin-left: 1em;
    margin-top: 2em;
    font-weight: bold;
    opacity: ${({ toggle }) => (toggle ? '1' : '0')};
    transition: ${({ toggle }) => (toggle ? 'opacity 0.1s ease' : 'opacity 0.1s ease')};
    &:last-child {
      margin-top: 0em;
    }
  }
`
export default StyledMenu
