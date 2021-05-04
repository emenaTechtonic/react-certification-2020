import styled from 'styled-components'

const StyledContainer = styled.div.attrs({
  className: 'container',
})`
  height: 100%;
  margin-left: ${({ statusMenu }) => (statusMenu ? '3em' : '0em')};
  padding-top: 1em;
  overflow: scroll;
`
export default StyledContainer
