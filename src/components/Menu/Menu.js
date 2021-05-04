import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Context } from '../../providers/Context/context'
import { AuthContext } from '../../providers/Auth/auth'
import StyledMenu from './Menu.styled'

const Menu = React.memo(() => {
  const { state, dispatch } = useContext(Context)
  const { authenticated } = useContext(AuthContext)
  const history = useHistory()

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.innerText === 'Favorites') {
      dispatch({ type: 'SET_VIEW', payload: 'favorites' })
      dispatch({ type: 'OPEN_MENU', payload: false })
      dispatch({ type: 'SET_TARGET', payload: state.target })
      history.push('/private')
    } else {
      dispatch({ type: 'SET_VIEW', payload: 'home' })
      dispatch({ type: 'OPEN_MENU', payload: false })
      dispatch({ type: 'SET_TARGET', payload: state.target })
      history.push('/')
    }
  }

  return (
    <StyledMenu toggle={state.menu}>
      <Link to="/" className="homeLink" onClick={handleChange}>
        Home
      </Link>
      {authenticated ? (
        <Link to="/private" className="favoritesLink" onClick={handleChange}>
          Favorites
        </Link>
      ) : (
        <div />
      )}
    </StyledMenu>
  )
})
export default Menu
