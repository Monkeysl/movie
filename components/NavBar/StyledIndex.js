import styled from 'styled-components'

const Container = styled.View `
  marginTop: ${props => -(props.navBarTop || 0) + 'px'}
  height: ${props => (props.navBarTop || 0) + 44 + 'px'};
  backgroundColor: #0397FF;
  display: flex;
  flexDirection: row;
  justifyContent: ${props => props.justify || "space-between"};
  alignItems: center;
  padding: ${props => (props.navBarTop || 0) + 'px ' + '20px' + ' ' + 0};
`

const MainTitle = styled.Text `
  color: #fff;
`

const SubTitle = styled.Text `
  color: #fff;
`

const ImageIcon = styled.Image `
  width: 24px;
  height: 24px;
`

export {
  Container,
  SubTitle,
  ImageIcon,
  MainTitle
}