import styled from 'styled-components'
import { colors } from '../../styles/colors'

const { lightColor, darkColor } = colors

const StyledStandardCard = styled.div.attrs({
  className: 'standard',
})`
  text-align: left;
  border: 0.1em solid #f1f1f1;
  width: 100%;
  height: 5.6em;
  display: flex;
  flex-direction: row;
  align-items: start;
  cursor: pointer;

  .card__info {
    padding: 1em;
    &__title {
      padding: 0.8em;
      font-size: 0.8em;
      font-weight: 400;
      line-height: 1.5;
      color: ${({ toggle }) => (toggle ? lightColor : darkColor)};
      letter-spacing: 0.0075em;
    }
  }

  .card__image {
    width: 7.5em;
    height: 5.6em;
    .imageInside {
      visibility: hidden;
    }
    display: block;
    background: url(${(props) => props.link});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: contain;
  }
`
export default StyledStandardCard
