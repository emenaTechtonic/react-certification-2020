import styled from 'styled-components'

const StyledVideogrid = styled.div.attrs({
  className: 'videogrid',
})`
  padding-left: 1em;
  width: 30%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`
export default StyledVideogrid
