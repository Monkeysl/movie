import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { Button, Modal, Provider } from '@ant-design/react-native';

import { NavBar } from '../../../components'

import {
  Container,
  ItemsCon,
  WIFIItem
} from './StyledIndex'

export default class ITunesImport extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
    this.subTitleClickHandler = this.subTitleClickHandler.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  subTitleClickHandler () {
    this.setState({
      visible: true
    })
  }

  onClose () {
    this.setState({
      visible: false
    })
  }

  async componentDidMount() {

  }

  render() {
    return (
      <Container>
        <NavBar title="Wi-Fi传输" subTitle="设置端口" subTitleClickHandler={this.subTitleClickHandler} isShowBack={true} />
        <ItemsCon>
          <WIFIItem>在电脑浏览器上输入以下网址： www.sdhcbdsjcdjs</WIFIItem>
        </ItemsCon>
        <Provider>
          <Modal
            transparent
            onClose={this.onClose}
            maskClosable
            visible={this.state.visible}
            animationType="slide-up"
          >
            <View style={styles.modalContanier}>
              <Text style={styles.title}>请选择端口</Text>
              <Button type="primary">使用80端口</Button>
              <Button type="ghost">使用其他端口</Button>
              <Text>取消</Text>
            </View>
          </Modal>
        </Provider>
        
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  modalContanier: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    paddingBottom: 16,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1
  }
});