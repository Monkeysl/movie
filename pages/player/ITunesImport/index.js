import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'


import { NavBar } from '../../../components'

import RouterContext from '../../../context/router'

import {
  Container,
  ItemsCon,
  ITunesItem
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
        <NavBar title="iTunes导入" subTitle=" " isShowBack={true} backHandler={() => {this.props.navigation.navigate('PlayerIndex')}} />
        <ItemsCon>
          <ITunesItem>1.将iphone和电脑通过usb连接</ITunesItem>
          <ITunesItem>2.打开itunes，在左侧列表顶部选择当前设备，点击左侧界面中的<Text style={styles.blue}>应用程序</Text></ITunesItem>
          <ITunesItem>3.在右侧区域<Text style={styles.blue}>文件共享</Text>中，找到当前app，通过点击<Text style={styles.blue}>添加</Text>按钮即可完成传输</ITunesItem>
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