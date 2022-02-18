import { Text, View } from 'react-native';
import React, { Component } from 'react';

import NavBar from '../../../components/NavBar'

import { Container, SearchMovieCon, MovieImage, SearchCon, SearchInput, SearchIcon } from './StyledIndex'

export default class Browser extends Component {
  render() {
    return (
      <Container>
        <NavBar title="浏览器" justify="center" />
        <SearchMovieCon>
          <MovieImage source={require('../../../assets/images/movie.png')}></MovieImage>
          <SearchCon>
            <SearchInput placeholder="搜索或输入网址/视频地址" placeholderTextColor="#adddff"></SearchInput>
            <SearchIcon source={require('../../../assets/images/search.png')}></SearchIcon>
          </SearchCon>
        </SearchMovieCon>
      </Container>
    );
  }
}
