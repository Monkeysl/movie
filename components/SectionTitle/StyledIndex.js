import styled from 'styled-components'

const Container = styled.View `
  height: 50px;
  padding: 18px 16px 16px;
  borderBottomColor: #eee;
  borderBottomWidth: 1;
`

const SectionTitleCon = styled.View `
  flexDirection: row;
  justifyContent: ${props => props.justify || "space-between"};
`

const LeftCon = styled.View `
  flexDirection: row;
  alignItems: center;
  fontSize: 14px;
`

const RightCon = styled.View `
  flexDirection: row;
  justifyContent: flex-end;
  alignItems: center;
  fontSize: 14px;
`

const RightText = styled.Text `
  
`

const SubTitle = styled.Text `
  color: #fff;
`

const ImageIcon = styled.Image `
  width: 9px;
  height: 15px;
`

export {
  Container,
  SectionTitleCon,
  LeftCon,
  RightCon,
  RightText,
  SubTitle,
  ImageIcon,
}