import styled from 'styled-components'

const Container = styled.View `
  height: 44px;
  backgroundColor: #0397FF;
  display: flex;
  flexDirection: row;
  justifyContent: ${props => props.justify || "space-between"};
  alignItems: center;
  padding: 0 15px;
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