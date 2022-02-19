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
  padding: 0 47;
  backgroundColor: #fff;
`

const MovieImage = styled.Image `
  width: 112;
  height: 85;
  marginTop: 60;
  justifyContent: center;
`

const SearchCon = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  marginTop: 28;
  width: 100%;
  height: 50;
  padding: 13 21;
  border: solid 1 #0397ff;
  borderRadius: 8;
`

const SearchInput = styled.TextInput`
  border: none;
  flex: 1;
  color: #adddff;
`

const SearchIcon = styled.Image`
  width: 24;
  height: 24;
  marginLeft: 40;
`



export {
  Container,
  SearchMovieCon,
  MovieImage,
  SearchCon,
  SearchInput,
  SearchIcon
}