import styled from 'styled-components'

const Container = styled.View `
  display: flex;
  flex: 1;
  flexDirection: column;
  backgroundColor: #fff;
`

const ItemsCon = styled.View `
  flex: 1;
  padding: 94px 83px 0 73px;
`

const WIFIItem = styled.Text `
  fontSize: 15px;
  marginBottom: 20px;
  lineHeight: 20px;
  textAlign: center;
`

export {
  Container,
  ItemsCon,
  WIFIItem
}