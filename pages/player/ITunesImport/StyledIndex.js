import styled from 'styled-components'

const Container = styled.View `
  display: flex;
  flex: 1;
  flexDirection: column;
  backgroundColor: #fff;
`

const ItemsCon = styled.View `
  flex: 1;
  padding: 105px 40px;
`

const ITunesItem = styled.Text `
  fontSize: 15px;
  marginBottom: 20px;
  lineHeight: 20px;
`

export {
  Container,
  ItemsCon,
  ITunesItem
}