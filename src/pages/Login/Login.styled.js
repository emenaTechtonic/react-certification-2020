import styled from 'styled-components'

const StyledLogin = styled.div.attrs({
  role: 'login',
})`
  background-color: white;
  border-radius: 1em;
  .login-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login {
    width: 300px;
  }

  .login h1 {
    text-align: center;
    letter-spacing: -1px;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .form-group strong {
    display: block;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 0.4rem;
  }

  .form-group input {
    color: white;
    font-size: 1.2rem;
    width: 100%;
    padding: 0.2rem 0.2rem;
    border-radius: 3px;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .login-form button[type='submit']  {
    cursor:pointer;
    color: black;
    width: 5em;
    height: 2em;
    margin: 1em;
    padding: 1em
    font-size: 6em;
    border: none;
    border-radius: 1em;
    &:hover {
      background-color: #6AB1DE;
      color: white;
    }
  }
  .login-form button[type='button'] {
    cursor:pointer;
    color: black;
    width: 5em;
    height: 2em;
    margin: 1em;
    padding: 1em
    font-size: 6em;
    border: none;
    border-radius: 1em;
   &:hover {
      background-color: #6AB1DE;
      color: white;
    }
  }
`
export default StyledLogin
