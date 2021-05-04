import styled from 'styled-components'

const StyledUser = styled.div.attrs({
  className: 'header__user',
})`
  display: flex;
  cursor: pointer;
  width: 2em;
  height: 2em;
  position: relative;
  border-radius: 100px;

  img.loginUser {
    border-radius: 1em;
  }
  .login {
    opacity: 0;
    left: -80px;
    top: 40px;
    overflow-y: auto;
    position: absolute;
    z-index: 1300;
    color: #070000;
    background: #effffa;
    ul {
      list-style: none;
      text-align: left;
      padding: 0;
      margin: 1em;
    }
    border-radius: 1em;
    box-shadow: 0.1em 0.1em 0.1em 0.1em rgb(25, 25, 25, 0.4);
  }
  .logout {
    opacity: 1;
    left: -80px;
    top: 40px;
    overflow-y: auto;
    position: absolute;
    z-index: 1300;
    color: #070000;
    background: #effffa;
    ul {
      list-style: none;
      text-align: left;
      padding: 0;
      margin: 1em;
    }
    border-radius: 1em;
    box-shadow: 0.1em 0.1em 0.1em 0.1em rgb(25, 25, 25, 0.4);
  }

  @media only screen and (max-width: 500px) {
    display: ${({ statusMenu }) => (statusMenu ? 'none' : 'flex')};
  }
  @media only screen and (max-width: 320px) {
    display: none;
  }
`
export default StyledUser
