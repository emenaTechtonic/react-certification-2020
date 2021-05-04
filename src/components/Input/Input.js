import React, { useContext } from 'react'
import StyledInput from './Input.styled'
import { Context } from '../../providers/Context/context'

const Input = React.memo(({ customClickEvent }) => {
  const { state } = useContext(Context)
  return (
    <StyledInput type="text" placeholder={state.target} onKeyDown={customClickEvent} />
  )
})
export default Input
