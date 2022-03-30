import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import React, { Component } from 'react';

import { NavBar } from '../../../components'

import { Container, ToolsCon, ImageItem, MeiuPic, MeiuPicCon, MeiuPicTitle, PicImage } from './StyledIndex';

import RouterContext from '../../../context/router'
export default class VideoList extends Component {

  constructor(props) {
    super(props)
    this._onPress = this._onPress.bind(this)
  }

  static contextType = RouterContext

  _onPress(routerNm) {
    this.context.navigation.navigate(routerNm)
  }

  componentDidMount() {

  }

  render() {
    return (
      <Container>
        <NavBar title="播放器" />
        <ToolsCon>
          <TouchableWithoutFeedback onPress={() => this._onPress('ITunesImport')}>
            <ImageItem source={require('../../../assets/images/ITunes.png')} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._onPress('WIFITransfer')}>
            <ImageItem source={require('../../../assets/images/wifi.png')}></ImageItem>
          </TouchableWithoutFeedback>
        </ToolsCon>

        <MeiuPicCon>
          <MeiuPicTitle>
            <TouchableWithoutFeedback onPress={() => this._onPress('SystemPhoto')}>
              <View style={styles.sysPhtoto}><PicImage source={require('../../../assets/images/photo.png')} /><Text>系统相册</Text></View>
            </TouchableWithoutFeedback>
          </MeiuPicTitle>
        </MeiuPicCon>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  sysPhtoto: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})