import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

import { NavBar } from '../../../components'

import {
  Container,
  ItemsCon,
  WIFIItem
} from './StyledIndex'

export default class ITunesImport extends Component {
  constructor(props) {
    super(props)
   
  }

  async componentDidMount() {

  }

  render() {
    return (
      <Container>
        <NavBar title="Wi-Fi传输" subTitle="设置端口" isShowBack={true} />
        <ItemsCon>
          <WIFIItem>在电脑浏览器上输入以下网址： www.sdhcbdsjcdjs</WIFIItem>
        </ItemsCon>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  blue: {
    color: '#0397ff'
  }
});