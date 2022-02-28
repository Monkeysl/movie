import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import { Button } from '@ant-design/react-native';
import SafeAreaView from 'react-native-safe-area-view'; 


export default class Login extends Component {
  constructor(props) {
    super(props)
    this._onPress = this._onPress.bind(this)
  }

  _onPress(routerNm) {
    this.props.navigation.navigate(routerNm)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar 
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <TouchableWithoutFeedback onPress={() => this._onPress('FilmsIndex')}>
          <Image style={styles.backIcon} source={require('../../../assets/images/backBlack.png')} />
        </TouchableWithoutFeedback>
        <View style={styles.loginCon}>
          <Text style={styles.title}>登录注册</Text>
          <View style={styles.inputWrap}>
            <TextInput style={styles.input} placeholder="请输入手机号" placeholderTextColor="#777878" />
          </View>
          <View style={styles.inputWrap}>
            <TextInput style={styles.input} placeholder="请输入验证码" placeholderTextColor="#777878" />
            <Text style={styles.textOrange12}>获取验证码</Text>
          </View>
          <Text style={styles.btnOrange}>立即登录</Text>
          <Text style={styles.clause}>登录即代表您同意 <Text style={styles.textOrange12}>隐私政策</Text> <Text style={styles.textOrange12}>服务条款</Text></Text>
          <View style={styles.thirdPartLogin}>
            <Text>—— 第三方登录 ——</Text>
            <View style={styles.thirdPartLoginIconWrap}>
              <Image style={styles.thirdPartLoginIcon} source={require('../../../assets/images/QQ.png')} />
              <Image style={styles.thirdPartLoginIcon} source={require('../../../assets/images/WeChat.png')} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginCon: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },
  backIcon: {
    width: 24,
    height: 24,
    marginTop: 15.5,
    marginLeft: 15,
  },
  title: {
    fontSize: 24,
    marginTop: 48,
    marginLeft: 57,
    marginBottom: 22,
    alignSelf: 'flex-start'
  },
  inputWrap: {
    width: 290,
    height: 44,
    marginTop: 15,
    backgroundColor: '#ebebeb',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 22
  },
  input: {
    flex: 1,
    paddingHorizontal: 30,
    fontSize: 12,
  },
  btnOrange: {
    width: 290,
    height: 44,
    lineHeight: 44,
    textAlign: 'center',
    backgroundColor: '#ff7403',
    color: '#fff',
    borderRadius: 22,
    overflow: 'hidden',
    marginTop: 46,
  },
  textOrange12: {
    color: '#ff7403',
    fontSize: 12,
    marginRight: 12,
  },
  clause: {
    marginTop: 20,
    fontSize: 12
  },
  thirdPartLogin: {
    marginTop: 145,
  },
  thirdPartLoginIconWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 113,
    marginTop: 37,
  },
  thirdPartLoginIcon: {
    width: 40,
    height: 40
  }
})