import styled from 'styled-components'
import { colors } from '../../styles/colors'

const { lightColor, darkColor } = colors

const StyledCard = styled.div.attrs({
  className: 'detailed',
})`
  overflow: hidden;
  text-align: left;
  border: 0.1em solid #f1f1f1;
  border-radius: 1em;
  width: 100%;
  display: block;
  cursor: pointer;
  box-shadow: 0.3em 0.3em 0.3em 0.3em rgb(25, 25, 25, 0.4);

  .card__info {
    padding: 1em;
    &__title {
      font-weight: 600;
      line-height: 1.6;
      color: ${({ toggle }) => (toggle ? lightColor : darkColor)};

      letter-spacing: 0.0075em;
    }
    &__description {
      font-size: 0.875rem;
      color: #5d5d5d;
      font-weight: 400;
      line-height: 1.43;
      letter-spacing: 0.01071em;
    }
  }

  .card__image {
    height: 8.75em;
    .imageInside {
      visibility: hidden;
    }
    display: block;

    background: url(${({ link }) => link});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: contain;
  }
`
export default StyledCard
