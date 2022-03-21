import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
// import { useObserver } from 'mobx-react-lite';
import SafeAreaView from 'react-native-safe-area-view'; 
import { Tabs } from '@ant-design/react-native'

import { SearchHeaderBar } from '../../../components'
import Swiper from './Swiper'
import Notice from './Notice'

import { post } from '../../../utils/http'

// import store from '../../../store/movieStore'

import RouterContext from '../../../context/router'
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperList: [],
      noticeList: []
    }

    this._onPress = this._onPress.bind(this)
    this._setState = this._setState.bind(this)
  }

  static contextType = RouterContext

  _onPress(routerNm, routerData) {
    this.context.navigation.navigate(routerNm, {...routerData})
  }

  _setState(object) {
    this.setState({
      ...this.setState,
      ...object
    })
  }

  async componentDidMount() {
    let result = await post('http://39.104.62.152:8000/ad/rotationImg/',{ action: 'r_i' })
    let result1 = await post('http://39.104.62.152:8000/ad/rotationAnnoce/',{ action: 'r_a' })
    this._setState({swiperList: result, noticeList: result1})
    
  }

  render() {
    const { swiperList, noticeList } = this.state
    const tabs = [
      { title: '热门' },
      { title: '电影' },
      { title: '电视剧' },
      { title: '动漫' },
      { title: '综艺' },
    ]
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    }
    return (
      <SafeAreaView style={styles.container}>
        <SearchHeaderBar isSHowSearchBar={true} clickHandler={()=> { this._onPress('Search') } } />
        <View style={styles.tabsContainer}>
          <Tabs
            tabs={tabs}
            renderTabBar={(tabProps) => (
              <View
                style={{
                  paddingHorizontal: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                {tabProps.tabs.map((tab, i) => (
                  // change the style to fit your needs
                  <TouchableOpacity
                    activeOpacity={0.9}
                    key={tab.key || i}
                    style={{
                      // width: '30%',
                      padding: 10,
                    }}
                    onPress={() => {
                      const { goToTab, onTabClick } = tabProps
                      // tslint:disable-next-line:no-unused-expression
                      onTabClick && onTabClick(tabs[i], i)
                      // tslint:disable-next-line:no-unused-expression
                      goToTab && goToTab(i)
                    }}>
                    <Text
                      style={{
                        fontSize: tabProps.activeTab === i ? 18 : 15,
                        color: tabProps.activeTab === i ? '#ff7403' : '#fff',
                      }}>
                      {tab.title}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}>
            <ScrollView style={styles.tabCon}>
              <Swiper listData={swiperList} chlickHandler={(detail) => { this._onPress('MoviewDetail',detail) }} />
              <Notice listData={noticeList} chlickHandler={(detail) => { return;this._onPress('MoviewDetail',detail) }} />
              <View style={styles.newHotContainer}>
                <View style={styles.newHotTitle}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width:22, height: 22 }} source={require('../../../assets/images/hot.png')} />
                    <Text style={{ fontSize: 15 }}>最新热门</Text>
                    <Image style={{ width: 12, height: 15 }} source={require('../../../assets/images/flame.png')} />
                  </View>
                  <Text style={{ color: '#777878', fontSize: 12 }}>共200部&gt;</Text>
                </View>

                <View style={styles.filmsListCon}>
                  {
                    [{},{},{},{},{},{}].map((item, index) => (
                      <TouchableWithoutFeedback onPress={() => { this._onPress('MoviewDetail') }} key={index}>
                        <View styles={styles.filmsItem}>
                          <ImageBackground style={styles.filmsImage} source={{ uri: 'https://iph.href.lu/110x150?text=CMYS&fg=999999&bg=cccccc'}}>
                            <Text style={styles.set}>更新至12集</Text>
                          </ImageBackground>
                          <Text style={styles.filmsTitle} numberOfLines={1}>电影名称</Text>
                        </View>
                      </TouchableWithoutFeedback>
                      
                    ))

                  }
                </View>
              </View>
              <View style={styles.newHotContainer}>
                <View style={styles.newHotTitle}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image style={{ width:22, height: 22 }} source={require('../../../assets/images/hot.png')} />
                    <Text style={{ fontSize: 15 }}>热门电影</Text>
                    <Image style={{ width: 12, height: 15 }} source={require('../../../assets/images/flame.png')} />
                  </View>
                  <Text style={{ color: '#777878', fontSize: 12 }}>共200部&gt;</Text>
                </View>

                <View style={styles.filmsListCon}>
                  {
                    [{},{},{},{},{},{}].map((item, index) => (
                      <TouchableWithoutFeedback onPress={() => { this._onPress('MoviewDetail') }} key={index}>
                        <View styles={styles.filmsItem}>
                          <ImageBackground style={styles.filmsImage} source={{ uri: 'https://iph.href.lu/110x150?text=CMYS&fg=999999&bg=cccccc'}}>
                            <Text style={styles.set}>更新至12集</Text>
                          </ImageBackground>
                          <Text style={styles.filmsTitle} numberOfLines={1}>电影名称</Text>
                        </View>
                      </TouchableWithoutFeedback>
                    ))

                  }
                </View>
              </View>
              <View style={styles.newHotContainer}>
                <View style={styles.newHotTitle}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width:22, height: 22 }} source={require('../../../assets/images/hot.png')} />
                    <Text style={{ fontSize: 15 }}>热门电视剧</Text>
                    <Image style={{ width: 12, height: 15 }} source={require('../../../assets/images/flame.png')} />
                  </View>
                  <Text style={{ color: '#777878', fontSize: 12 }}>共200部&gt;</Text>
                </View>

                <View style={styles.filmsListCon}>
                  {
                    [{},{},{},{},{},{}].map((item, index) => (
                      <TouchableWithoutFeedback onPress={() => { this._onPress('MoviewDetail') }} key={index}>
                        <View styles={styles.filmsItem}>
                          <ImageBackground style={styles.filmsImage} source={{ uri: 'https://iph.href.lu/110x150?text=CMYS&fg=999999&bg=cccccc'}}>
                            <Text style={styles.set}>更新至12集</Text>
                          </ImageBackground>
                          <Text style={styles.filmsTitle} numberOfLines={1}>电影名称</Text>
                        </View>
                      </TouchableWithoutFeedback>
                    ))

                  }
                </View>
              </View>
              <View style={styles.newHotContainer}>
                <View style={styles.newHotTitle}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width:22, height: 22 }} source={require('../../../assets/images/hot.png')} />
                    <Text style={{ fontSize: 15 }}>热门动漫</Text>
                    <Image style={{ width: 12, height: 15 }} source={require('../../../assets/images/flame.png')} />
                  </View>
                  <Text style={{ color: '#777878', fontSize: 12 }}>共200部&gt;</Text>
                </View>

                <View style={styles.filmsListCon}>
                  {
                    [{},{},{},{},{},{}].map((item, index) => (
                      <TouchableWithoutFeedback onPress={() => { this._onPress('MoviewDetail') }} key={index}>
                        <View styles={styles.filmsItem}>
                          <ImageBackground style={styles.filmsImage} source={{ uri: 'https://iph.href.lu/110x150?text=CMYS&fg=999999&bg=cccccc'}}>
                            <Text style={styles.set}>更新至12集</Text>
                          </ImageBackground>
                          <Text style={styles.filmsTitle} numberOfLines={1}>电影名称</Text>
                        </View>
                      </TouchableWithoutFeedback>
                    ))

                  }
                </View>
              </View>
              <View style={styles.newHotContainer}>
                <View style={styles.newHotTitle}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width:22, height: 22 }} source={require('../../../assets/images/hot.png')} />
                    <Text style={{ fontSize: 15 }}>热门综艺</Text>
                    <Image style={{ width: 12, height: 15 }} source={require('../../../assets/images/flame.png')} />
                  </View>
                  <Text style={{ color: '#777878', fontSize: 12 }}>共200部&gt;</Text>
                </View>

                <View style={styles.filmsListCon}>
                  {
                    [{},{},{},{},{},{}].map((item, index) => (
                      <TouchableWithoutFeedback onPress={() => { this._onPress('MoviewDetail') }} key={index}>
                        <View styles={styles.filmsItem}>
                          <ImageBackground style={styles.filmsImage} source={{ uri: 'https://iph.href.lu/110x150?text=CMYS&fg=999999&bg=cccccc'}}>
                            <Text style={styles.set}>更新至12集</Text>
                          </ImageBackground>
                          <Text style={styles.filmsTitle} numberOfLines={1}>电影名称</Text>
                        </View>
                      </TouchableWithoutFeedback>
                    ))

                  }
                </View>
              </View>
             

            </ScrollView>
            <ScrollView style={styles.tabCon}>
              <View style={styles.filmsListCon}>
              {
                [{},{},{},{}].map((item, index) => (
                  <TouchableWithoutFeedback onPress={() => { this._onPress('MoviewDetail') }} key={index}>
                    <View styles={styles.filmsItem}>
                      <ImageBackground style={styles.filmsImage} source={{ uri: 'https://iph.href.lu/110x150?text=CMYS&fg=999999&bg=cccccc'}}>
                        <Text style={styles.set}>更新至12集</Text>
                      </ImageBackground>
                      <Text style={styles.filmsTitle} numberOfLines={1}>电影名称</Text>
                    </View>
                  </TouchableWithoutFeedback>
                ))
              }
              </View>
            </ScrollView>
            <ScrollView style={styles.tabCon}>
              <View style={styles.filmsListCon}>
              {
                [{},{},{},{}].map((item, index) => (
                  <TouchableWithoutFeedback onPress={() => { this._onPress('MoviewDetail') }} key={index}>
                    <View styles={styles.filmsItem}>
                      <ImageBackground style={styles.filmsImage} source={{ uri: 'https://iph.href.lu/110x150?text=CMYS&fg=999999&bg=cccccc'}}>
                        <Text style={styles.set}>更新至12集</Text>
                      </ImageBackground>
                      <Text style={styles.filmsTitle} numberOfLines={1}>电影名称</Text>
                    </View>
                  </TouchableWithoutFeedback>
                ))
              }
              </View>
            </ScrollView>
            <ScrollView style={styles.tabCon}>
              <View style={styles.filmsListCon}>
              {
                [{},{},{},{}].map((item, index) => (
                  <TouchableWithoutFeedback onPress={() => { this._onPress('MoviewDetail') }} key={index}>
                    <View styles={styles.filmsItem}>
                      <ImageBackground style={styles.filmsImage} source={{ uri: 'https://iph.href.lu/110x150?text=CMYS&fg=999999&bg=cccccc'}}>
                        <Text style={styles.set}>更新至12集</Text>
                      </ImageBackground>
                      <Text style={styles.filmsTitle} numberOfLines={1}>电影名称</Text>
                    </View>
                  </TouchableWithoutFeedback>
                ))
              }
              </View>
            </ScrollView>
            <ScrollView style={styles.tabCon}>
              <View style={styles.filmsListCon}>
              {
                [{},{},{},{}].map((item, index) => (
                  <TouchableWithoutFeedback onPress={() => { this._onPress('MoviewDetail') }} key={index}>
                    <View styles={styles.filmsItem}>
                      <ImageBackground style={styles.filmsImage} source={{ uri: 'https://iph.href.lu/110x150?text=CMYS&fg=999999&bg=cccccc'}}>
                        <Text style={styles.set}>更新至12集</Text>
                      </ImageBackground>
                      <Text style={styles.filmsTitle} numberOfLines={1}>电影名称</Text>
                    </View>
                  </TouchableWithoutFeedback>
                ))
              }
              </View>
            </ScrollView>
          </Tabs>
        </View>
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
  tabsContainer: {
    flex: 1,
    backgroundColor: '#1b1b1b',
  },
  tabCon: {
    flex: 1,
    backgroundColor: '#fff',
  },

  newHotContainer: {

  },
  newHotTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10
  },
  filmsListCon: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  filmsItem: {
    width: 110,
  },
  filmsImage: {
    width: 110,
    height: 150,
    marginHorizontal: 4,
    marginTop: 7,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    borderRadius: 8,
    overflow: 'hidden'
  },
  set: {
    lineHeight: 21,
    backgroundColor: 'rgba(0,0,0,.2)',
    textAlign: 'right',
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 4
  },
  filmsTitle: {
    fontSize: 14,
    lineHeight: 33
  }
});