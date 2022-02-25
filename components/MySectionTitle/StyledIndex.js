import styled from 'styled-components'

const Container = styled.View `
  height: 50px;
  flexDirection: row;
  justifyContent: space-between;
  borderBottomWidth: ${props => props.isHiddenBorder ? 0 : '.5px'};
  borderBottomColor: #eee;
  paddingLeft: 15px;
  paddingRight: 15px;
`

export {
  Container
}