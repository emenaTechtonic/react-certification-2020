import styled from 'styled-components'

const StyledHeader = styled.div.attrs({
  className: 'header',
})`
  display: flex;
  background-color: #6AB1DE;
  flex-direction: row;
  justify-content:space-between;
  padding: 10px;

  box-shadow: 0.1em 0.1em 0.9em rgba(0, 0, 0, 0.5);
    .header__hamburger__search {
        display: flex;
        flex-direction: row;
    }
    .header__theme__user {
        display: flex;
        flex-direction: row;
        align-items: center;

    }
 
}
`
export default StyledHeader
