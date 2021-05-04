import React from 'react'
import Search from '../Search/Search'
import Toggle from '../Toggle/Toggle'
import User from '../User/User'
import StyledHeader from './Header.styled'
import Hamburger from '../Hamburger/Hamburger'

const Header = React.memo(() => (
  <StyledHeader key="header">
    <div className="header__hamburger__search">
      <Hamburger />
      <Search />
    </div>
    <div className="header__theme__user">
      <Toggle />
      <User />
    </div>
  </StyledHeader>
))

export default Header
