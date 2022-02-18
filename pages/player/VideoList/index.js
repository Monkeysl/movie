import { Text, View } from 'react-native';
import React, { Component } from 'react';

import NavBar from '../../../components/NavBar'

import { Container, ToolsCon, ImageItem, MeiuPic, MeiuPicCon, MeiuPicTitle, PicImage } from './StyledIndex';
export default class VideoList extends Component {
  render() {
    return (
      <Container>
        <NavBar title="播放器" subTitle="编辑" isShowBack={true} />
        <ToolsCon>
          <ImageItem source={require('../../../assets/images/ITunes.png')}></ImageItem>
          <ImageItem source={require('../../../assets/images/wifi.png')}></ImageItem>
        </ToolsCon>

        <MeiuPicCon>
          <MeiuPicTitle>
            <PicImage source={require('../../../assets/images/photo.png')} />
            <Text>系统相册</Text>
          </MeiuPicTitle>
        </MeiuPicCon>
      </Container>
    );
  }
}
