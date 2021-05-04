import styled from 'styled-components'
import { colors } from '../../styles/colors'

const {
  lightColor,
  darkColor,
  primaryDark,
  primaryLight,
  primaryLightBlue,
  primaryActive,
} = colors

const StyledViewdetailes = styled.div.attrs({
  className: 'viewdetailes',
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  flex: 1;

  .toggleFavor {
    background-color: ${primaryLightBlue}; 
    color: ${primaryDark}; 
    border: none;

    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    &:hover {
      background-color: ${primaryActive}; 
      color: ${primaryLight}; 
    }
    align-self: self-end;
  }
  .statusCard {
    display:flex;
    flex-direction: row;
    width: -moz-available;
    width: -webkit-fill-available;
    justify-content: space-between;
  }
  .iframeTitle{
      padding: 1em 1em;
      font-weight: 600;
      color: ${({ toggle }) => (toggle ? lightColor : darkColor)};
  }
  .iframeDescription {
    padding: 0px 1em;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    text-align:left;
    color: ${({ toggle }) => (toggle ? lightColor : darkColor)};
}
  }
`
export default StyledViewdetailes
