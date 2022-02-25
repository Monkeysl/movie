import styled from 'styled-components'

const Container = styled.View `
  marginTop: ${props => -(props.navBarTop || 0) + 'px'};
  backgroundColor: #1b1b1b;
  flexDirection: column;
  justifyContent: ${props => props.justify || "space-between"};
  alignItems: center;
  padding: ${props => (props.navBarTop || 0) + 'px ' + 0 + ' ' + 0};
`

export {
  Container,
}