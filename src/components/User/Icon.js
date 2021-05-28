import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../../providers/Context/context'
import { AuthContext } from '../../providers/Auth/auth'
import Portal from '../Portal/Portal'
import Login from '../../pages/Login/Login.page'

const user = { id: 0, name: '', avatarUrl: '' }
const Icon = React.memo(() => {
  const history = useHistory()
  const { state, dispatch } = useContext(Context)
  const { authenticated, logout } = useContext(AuthContext)
  const [iconUser, setIconUser] = useState()
  const [isOn, setOn] = useState(false)
  const [coords, setCoords] = useState({})
  const updateLogin = () => {
    setCoords({
      left: window.innerWidth / 2 - 200,
      top: 100,
    })
  }

  useEffect(() => {
    const handleClick = () => {
      if (authenticated) {
        const logoutElement = document.querySelector('.popup')
        logoutElement.classList.remove('login')
        logoutElement.classList.add('logout')
        logoutElement.addEventListener('click', () => {
          logout()
          logoutElement.classList.remove('logout')
          logoutElement.classList.add('login')
          dispatch({ type: 'SET_USER', payload: user })
          history.push('/')
        })
      } else {
        updateLogin()
        setOn(true)
      }
      dispatch({ type: 'OPEN_MENU', payload: false })
    }
    if (!state.user.id) {
      setIconUser(<FontAwesomeIcon icon={faUserAlt} onClick={handleClick} />)
    } else {
      setIconUser(
        <img
          id="userLoginIcon"
          src={state.user.avatarUrl}
          alt={state.user.name}
          width="30"
          height="30"
          className="loginUser"
          onClick={handleClick}
          onKeyDown={handleClick}
          role="presentation"
        />
      )
      setOn(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, state.user.id])
  return (
    <>
      <div className="popup login">
        <ul>
          <li>Logout</li>
        </ul>
      </div>
      {iconUser}
      {isOn && (
        <Portal>
          <Login coords={coords} closeForm={() => setOn(false)} />
        </Portal>
      )}
    </>
  )
})
export default Icon
