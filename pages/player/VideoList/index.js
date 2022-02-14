import { Text, View } from 'react-native';
import React, { Component } from 'react';

import NavBar from '../../../components/NavBar'

import { Container } from './StyledIndex';

export default class VideoList extends Component {
  render() {
    return (
      <Container>
        <NavBar title="浏览器" subTitle="编辑" isShowBack={true} />
        <Text>123457398748573489758934758347589734895785348758743897589347589374857348957893475839475834975839475834787531</Text>
      </Container>
    );
  }
}
