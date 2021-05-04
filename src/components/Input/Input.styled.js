import styled from 'styled-components'

const StyledInput = styled.input.attrs({
  role: 'input',
})`
  padding: 1em;
  margin: 0.8em;
  background: #ffffff;
  border: none;
  border-radius: 0.4em;
  ::placeholder {
    color: #000000;
  }
`
export default StyledInput
