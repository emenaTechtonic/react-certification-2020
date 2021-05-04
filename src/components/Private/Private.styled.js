import styled from 'styled-components'

const StyledPrivate = styled.div.attrs({
  role: 'favorites',
})`
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
  column-gap: 1em;
  row-gap: 1em;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
  }

  text-align: center;
  h1 {
    font-size: 3rem;
    letter-spacing: -2px;
  }
  .selectedVideo {
    display: flex;
    flex-direction: row;
  }
`
export default StyledPrivate
