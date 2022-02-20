import { Text, View } from 'react-native';
import React, { Component } from 'react';

import { NavBar } from '../../../components'

import { Container, ToolsCon, ImageItem, MeiuPic, MeiuPicCon, MeiuPicTitle, PicImage } from './StyledIndex';

import RouterContext from '../../../context/router'
export default class VideoList extends Component {

  constructor(props) {
    super(props)
    this._onPress = this._onPress.bind(this)
  }

  static contextType =RouterContext

  _onPress() {
    this.context.navigation.navigate('ITunesImport')
  }

  render() {
    return (
      <Container>
        <NavBar title="播放器" subTitle="编辑" isShowBack={true} />
        <ToolsCon>
          <ImageItem
            source={require('../../../assets/images/ITunes.png')}
            onPress={this._onPress}
          />
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
