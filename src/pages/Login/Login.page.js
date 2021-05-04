import React, { useState, useContext } from 'react'
import debounce from 'lodash/debounce'
import { useHistory } from 'react-router'
import loginApi from '../../utils/assets/login.api'
import { Context } from '../../providers/Context/context'
import { AuthContext } from '../../providers/Auth/auth'
import StyledLogin from './Login.styled'

const styles = {
  popover: {
    position: 'absolute',
    width: 400,
    height: 400,
  },
}

function LoginPage({ coords, closeForm }) {
  const closeLogin = debounce(closeForm)
  const { dispatch } = useContext(Context)
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [status, setStatus] = useState('Welcome back!')
  const { login } = useContext(AuthContext)
  const history = useHistory()

  const authenticate = async (e) => {
    e.preventDefault()
    try {
      const user = await loginApi({
        username,
        password,
      })
      if (user) {
        login(user)
        dispatch({ type: 'SET_USER', payload: user })
        history.push('/')
      }
    } catch (err) {
      setStatus('Login failed')
    }
  }

  return (
    <StyledLogin style={{ ...styles.popover, ...coords }}>
      <div className="login-wrapper">
        <h1>{status}</h1>
        <form onSubmit={authenticate} className="login-form">
          <div className="form-group">
            <label htmlFor="username">
              <strong>username </strong>
              <input
                required
                type="text"
                id="username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>password </strong>
              <input
                required
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div>
            <button type="submit">login</button>
            <button type="button" onClick={closeLogin}>
              cancel
            </button>
          </div>
        </form>
      </div>
    </StyledLogin>
  )
}

export default LoginPage
