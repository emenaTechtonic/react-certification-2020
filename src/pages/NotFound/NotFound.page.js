import React from 'react'
import { Link } from 'react-router-dom'
import StyledNotFound from './NotFound.styled'

const NotFoundPage = () => (
  <StyledNotFound className="not-found">
    <Link to="/" className="home-link">
      home
    </Link>
    <img src="404.gif" alt="page not found" />
  </StyledNotFound>
)

export default NotFoundPage
