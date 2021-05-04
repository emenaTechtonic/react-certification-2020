import React, { useContext } from 'react'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Container from '../Container/Container'
import { GlobalStyles } from '../../global'
import { Context } from '../../providers/Context/context'
import StyledLayout from './Layout.styled'

const Layout = React.memo(({ children }) => {
  const { state } = useContext(Context)

  return (
    <StyledLayout>
      <GlobalStyles statusMenu={state.menu} theme={state.theme} />
      <Header />
      <Menu />
      <Container statusMenu={state.menu}>{children}</Container>
    </StyledLayout>
  )
})

export default Layout
