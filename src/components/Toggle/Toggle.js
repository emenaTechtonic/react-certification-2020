import React, { useContext, useCallback } from 'react'
import { Context } from '../../providers/Context/context'
import StyledToggle from './Toggle.styled'

const Toggle = React.memo(() => {
  const { state, dispatch } = useContext(Context)

  const handleChange = useCallback(() => {
    dispatch({ type: 'TOGGLE_THEME' })
  }, [dispatch])

  return (
    <StyledToggle statusMenu={state.menu}>
      <input
        className="checkbox"
        id="checkbox"
        type="checkbox"
        checked={state.theme}
        onChange={handleChange}
      />
      <label className="switch" htmlFor="checkbox">
        <span className="slider" />
      </label>
      <div className="named">Dark mode</div>
    </StyledToggle>
  )
})
export default Toggle
