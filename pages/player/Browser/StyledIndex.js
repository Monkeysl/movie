import styled from 'styled-components'

const Container = styled.View `
  flex: 1;
  flexDirection: column;
  backgroundColor: #e3e3e3;
`

const SearchMovieCon = styled.View `
  flex: 1;
  flexDirection: column;
  alignItems: center;
  padding: 0 47px;
  backgroundColor: #fff;
`

const MovieImage = styled.Image `
  width: 112px;
  height: 85px;
  marginTop: 60px;
  justifyContent: center;
`

const SearchCon = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  marginTop: 28px;
  width: 100%;
  height: 50px;
  padding: 13px 21px;
  border: solid 1px #0397ff;
  borderRadius: 8px;
`

const SearchInput = styled.TextInput`
  border: none;
  flex: 1;
  color: #adddff;
`

const SearchIcon = styled.Image`
  width: 24px;
  height: 24px;
  marginLeft: 40px;
`



export {
  Container,
  SearchMovieCon,
  MovieImage,
  SearchCon,
  SearchInput,
  SearchIcon
}