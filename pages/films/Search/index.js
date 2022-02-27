import { StyleSheet, TextInput, Image, StatusBar, Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view'; 

export default class Search extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <View style={styles.searchBar}>
          <View style={styles.serachLf}>
            <TextInput style={{flex: 1}} placeholder="输入您想搜索的影片" placeholderTextColor="#777878" />
            <Image style={{width: 20, height: 20, marginLeft: 10}} source={require('../../../assets/images/searchBlack.png')} />
          </View>
          <Text style={styles.cancelRt}>取消</Text>
        </View>

        <ScrollView>
          <View style={styles.history}>
            <Text style={{fontSize: 15}}>历史记录</Text>
            <Image style={styles.del} source={require('../../../assets/images/del.png')} />
          </View>

          <View style={styles.notFound}>
            <Image style={{ width: 97, height: 100 }} source={require('../../../assets/images/historyFile.png')} />
            <Text style={{ color: '#bbb', fontSize: 15, marginTop: 30 }}>没有找到相关内容哦~</Text>
            <Image style={{ width: 109, height: 29, marginTop: 14 }} source={require('../../../assets/images/help.png')} />
          </View>

        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    backgroundColor: '#fff',
  },
  searchBar: {  
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 44
  },
  serachLf: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    height: 30,
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 15
  },
  cancelRt: {
    // width: 67,
    fontSize: 15,
    textAlign: 'right',
    paddingRight: 22,
    paddingLeft: 22
  },
  history: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingTop: 15
  },
  del: {
    width: 21,
    height: 21
  },
  notFound: {
    paddingTop: 65,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
})