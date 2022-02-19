import styled from 'styled-components'

const Container = styled.View `
  height: 100%;
  flex: 1;
  flexDirection: column;
  backgroundColor: #e3e3e3
`

const ToolsCon = styled.View `
  backgroundColor: #fff;
  padding: 32px 25px 25px;
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
`

const ImageItem = styled.Image `
  width: 150px;
  height: 110px;
`

const MeiuPicCon = styled.View`
  flex: 1;
  marginTop: 10px;
  padding: 30px 20px 20px;
  backgroundColor: #fff;
`

const MeiuPicTitle = styled.View`
  display: flex;
  flexDirection: row;
  alignItems: center;
`

const PicImage = styled.Image `
  width: 30;
  height: 30;
  marginRight: 10;
`

export {
  Container,
  ToolsCon,
  ImageItem,
  MeiuPicCon,
  MeiuPicTitle,
  PicImage
}