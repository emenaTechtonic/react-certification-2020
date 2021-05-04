import React, { useCallback, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Input from '../Input/Input'
import StyledSearch from './Search.styled'
import { Context } from '../../providers/Context/context'

const Search = React.memo(() => {
  const history = useHistory()
  const { dispatch } = useContext(Context)
  const handleChange = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        dispatch({ type: 'SET_TARGET', payload: e.target.value })
        dispatch({ type: 'OPEN_MENU', payload: false })
        dispatch({ type: 'SET_VIEW', payload: 'home' })
        history.push('/')
      }
    },
    [dispatch, history]
  )
  return (
    <StyledSearch>
      <Input customClickEvent={handleChange} />
    </StyledSearch>
  )
})

export default Search
