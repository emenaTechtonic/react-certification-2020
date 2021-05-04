import React, { useContext, useCallback } from 'react'
import { Context } from '../../providers/Context/context'
import StyledHamburger from './Hamburger.styled'

const Hamburger = React.memo(() => {
  const { state, dispatch } = useContext(Context)
  const handleClick = useCallback(() => {
    dispatch({ type: 'OPEN_MENU', payload: !state.menu })
  }, [dispatch, state.menu])

  return (
    <StyledHamburger key="Hamburger" onClick={handleClick} toggle={state.menu}>
      <span />
      <span />
      <span />
    </StyledHamburger>
  )
})
export default Hamburger
