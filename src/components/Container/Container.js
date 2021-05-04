import React from 'react'
import StyledContainer from './Container.styled'

const Container = React.memo(({ statusMenu, children }) => (
  <StyledContainer key="container" statusMenu={statusMenu}>
    {children}
  </StyledContainer>
))

export default Container
