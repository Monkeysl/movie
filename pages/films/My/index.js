import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view'; 

import { MySectionTitle } from '../../../components'

import RouterContext from '../../../context/router'

const label1 = [
  {title: '观看历史', icon: require('../../../assets/images/history.png'), RouterNm: 'WatchHistory'},
  {title: '我的收藏', icon: require('../../../assets/images/collection.png'), RouterNm: 'Favorite'},
  {title: '我的下载', icon: require('../../../assets/images/download.png'), RouterNm: 'Download' }

]
const label2 = [
  {title: '分享给好友', icon: require('../../../assets/images/share.png')},
  {title: '鼓励开发者', icon: require('../../../assets/images/encourage.png')},
  {title: '版本信息', subTitle: '已是最新版本', icon: require('../../../assets/images/version.png')},
  {title: '清除缓存', subTitle: '47.9M', icon: require('../../../assets/images/ClearCache.png')},
  {title: '退出登录', subTitle: ' ', icon: require('../../../assets/images/exit.png')}

]

export default class my extends Component {
  constructor(props) {
    super(props)
    this._onPress = this._onPress.bind(this)

  }

  static contextType = RouterContext

  _onPress(routerNm) {
    this.context.navigation.navigate(routerNm)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="default"
        />
        <View style={styles.loginHeaderCon}>
          <Image style={styles.avatars} source={require('../../../assets/images/avatar.png')} />
          <Text style={{marginLeft: 15, fontSize: 18}}>登录 注册</Text>
        </View>
        <View style={styles.whiteBg1}>
          {label1.map((item, index) => (<MySectionTitle key={index} title={item.title} icon={item.icon} clickHandler={() => { item.RouterNm && this._onPress(item.RouterNm) }} />))}
        </View>
        <View style={styles.whiteBg2}>
          {label2.map((item, index) => (<MySectionTitle key={index} title={item.title} icon={item.icon} subTitle={item.subTitle} clickHandler={() => { item.RouterNm && this._onPress(item.RouterNm) }} />))}
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee',
  },
  loginHeaderCon: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 130,
    backgroundColor: '#fff',
    paddingTop: 35,
    paddingLeft: 15,
    paddingRight: 15
  },
  avatars: {
    width: 60,
    height: 66
  },
  whiteBg1: {
    backgroundColor: '#fff',
    marginTop: 5,
    paddingTop: 16,
    height: 165,
  },
  whiteBg2: {
    marginTop: 10,
    backgroundColor: '#fff',
    flex: 1
  } 
})