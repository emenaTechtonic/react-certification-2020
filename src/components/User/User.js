import React, { useContext } from 'react'
import StyledUser from './User.styled'
import { Context } from '../../providers/Context/context'
import Icon from './Icon'

const User = React.memo(() => {
  const { state } = useContext(Context)

  return (
    <StyledUser statusMenu={state.menu}>
      <Icon key="Icon" />
    </StyledUser>
  )
})
export default User
