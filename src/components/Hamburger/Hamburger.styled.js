import styled from 'styled-components'

const StyledHamburger = styled.div.attrs({
  className: 'hamburger',
})`
  cursor: pointer;
  z-index: 10;
  padding: 0.8em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    width: ${({ toggle }) => (toggle ? '1.56em' : '1.44em')};
    height: 0.19em;
    background-color: ${({ toggle }) => (toggle ? '#FFFFFF' : '#2d314d')};
    border-radius: 1em;
    transform-origin: 0.1em 0.1em;
    margin-bottom: 0.3em;
    z-index: 10;
    transition-property: transform;
    transition-duration: 0.1s;
    transition-timing-function: ease;

    &:nth-child(1) {
      transform: ${({ toggle }) => (toggle ? 'rotate(45deg)' : 'rotate(0deg)')};
    }
    &:nth-child(2) {
      opacity: ${({ toggle }) => (toggle ? '0' : '1')};
    }
    &:last-child {
      transform: ${({ toggle }) => (toggle ? 'rotate(-45deg)' : 'rotate(00deg)')};
    }
  }
`
export default StyledHamburger
