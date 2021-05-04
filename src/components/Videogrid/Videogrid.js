import React from 'react'
import StyledVideogrid from './Videogrid.styled'

const Videogrid = React.memo(({ id, children }) => (
  <StyledVideogrid>
    {React.Children.map(children, (child) => {
      if (child.props.id !== id) return React.cloneElement(child, { detailed: false })
    })}
  </StyledVideogrid>
))
export default Videogrid
