import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { Button, Modal, Provider } from '@ant-design/react-native';
import SafeAreaView from 'react-native-safe-area-view'; 

import { NavBar } from '../../../components'

import {
  ItemsCon,
  WIFIItem
} from './StyledIndex'

export default class ITunesImport extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
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
      <SafeAreaView style={styles.container}>
        <NavBar title="Wi-Fi传输" subTitle="设置端口" subTitleClickHandler={this.subTitleClickHandler} isShowBack={true}  backHandler={() => {this.props.navigation.navigate('PlayerIndex')}} />
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
              <View style={styles.titleContainer}><Text style={styles.title}>请选择端口</Text></View>
              <View style={styles.btnContainer}>
                <Button onPress={this.onClose} type="primary" style={{marginTop: 18}}>使用80端口</Button>
                <Button onPress={this.onClose} type="ghost" style={{marginTop: 6}}>使用其他端口</Button>
                <Text onPress={this.onClose} style={styles.textBtn}>取消</Text>
              </View>
              
            </View>
          </Modal>
        </Provider>
        
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  modalContanier: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '100%'
  },
  title: {
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    paddingBottom: 16,
    
  },
  btnContainer: {
    width: '100%'
  },
  textBtn: {
    marginTop: 25,
    marginBottom: 15,
    textAlign: 'center'
  }
});