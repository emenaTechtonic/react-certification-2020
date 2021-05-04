import styled from 'styled-components'

const StyledNotFound = styled.div.attrs({
  role: 'notFound',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  .home-link {
    color: black;
    font-size: 1rem;
    text-decoration: none;
    display: block;
    text-align: right;
    padding: 0.2rem 0.3rem;
  }

  .home-link::before {
    content: '←';
    padding-right: 0.2rem;
    display: inline-block;
  }
`
export default StyledNotFound
