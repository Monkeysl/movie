import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view'; 
import { Tabs } from '@ant-design/react-native'

import { SearchHeaderBar } from '../../../components'
import Swiper from './Swiper'

import RouterContext from '../../../context/router'
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperList: [],

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
    this._setState({swiperList: [
      {
          "name": "伙记办大事国语",
          "director": "导演：陈耀全,,邵丽琼,,",
          "mainstar": "主演：欧阳震华,马德钟,万绮雯,杨明,陈滢,敖嘉年,张国强,杨卓娜,黄柏文,欧瑞伟,陈荣峻,马蹄露,杨家宝,区轩玮,汤俊明,卫志豪,关梓阳,李泳豪,陈志健,李兴华,陈建文,黄荣燊,蔡国威,叶凯茵,赵乐贤,江富强,赵璧渝,郑恕峰,尹诗沛,",
          "image": "https://img1.baidu.com/it/u=3830023462,1306850661&fm=253&fmt=auto?w=640&h=366",
          "tvtype": null,
          "type": "港剧",
          "area": "香港",
          "year": "2021",
          "introduction": "简介：　　新调任到调查组的欧阳聪（欧阳震华 饰）拥有极高的智商，由他处理的各种复杂离奇的交通意外都能够轻易破解。戴政君（马德钟 饰）是一名出色的律师，他凭着独特的价值观及出色的辩护技巧享负盛名。随着一次调配的安排，聪与他一向心存好感的重案组警司徐曦怡（万绮雯 饰）调查几宗离奇案件，在侦查期间，警方眼看可..",
          "title": "轮播图底部文字",
          "urls": [
              {
                  "playurl": "https://cdn3.mh-qiyi.com/20210412/7kMBfanv/index.m3u8"
              },
              {
                  "siteurl": "https://www.663dy.com/xibu/90579.html"
              }
          ]
      },
      {
          "name": "柔美的细胞小将",
          "director": "导演：李尚烨,,",
          "mainstar": "主演：金高银,安普贤,李侑菲,朴智炫,",
          "image": "https://img0.baidu.com/it/u=1849524056,224699119&fm=253&fmt=auto&app=120&f=JPEG?w=650&h=426",
          "tvtype": null,
          "type": "韩剧",
          "area": "韩国",
          "year": "2021",
          "introduction": "简介：由《阿尔罕布拉宫的回忆》、《W-两个世界》的宋在贞作家参与，小编已经开始期待啦！！！拥有破30亿点击率的韩国人气网漫《柔美的细胞小将》确定要翻拍成韩剧啦～！这部漫画在LINEWEBTOON也是同步连载中，讲述透过主角有美头脑中的细胞视角，来展现出30代平凡职场人的人生故事，漫画中将细胞们可爱拟人化..",
          "title": "轮播图底部文字",
          "urls": [
              {
                  "playurl": "https://v10.dious.cc/20210917/qUb6zfZM/index.m3u8"
              },
              {
                  "siteurl": "https://www.663dy.com/xibu/126815.html"
              }
          ]
      },
      {
          "name": "萤火虫小巷",
          "director": "导演：凡妮莎·帕里斯,,李·罗丝,,安妮·惠勒,,皮特·奥法伦,,",
          "mainstar": "主演：碧儿·加勒特,萨拉·乔克,罗恩·柯蒂斯,凯瑟琳·海格尔,本·劳森,艾丽·斯考比,耶尔·雅曼,Jon-Michael Ecker,保罗·麦克吉莱恩,谢拉赫·霍斯达尔,布雷登·泰勒,布兰顿·杰·麦克拉伦,奎恩·罗德,杰森·麦金农,Synto D. Misati,Jenna Rosenow, 安德烈斯·约瑟夫,帕特里克·萨邦圭,塔拉·威尔逊,莉兹·博伊斯,马蒂亚斯·雷塔马尔,马丁·唐文,哈姆扎·福阿德,",
          "image": "https://img1.baidu.com/it/u=2140281521,3102314712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
          "tvtype": null,
          "type": "美剧",
          "area": "欧美",
          "year": "2021",
          "introduction": "简介：改编自Kristin Hannah的同名畅销小说，Katherine Heigl和Sarah Chalke主演。剧集讲述了两个好朋友三十年一路相伴走来的故事。 \n原著小说还有第二本《再见，萤火虫小巷 Fly Away》。",
          "title": "轮播图底部文字",
          "urls": [
              {
                  "playurl": "https://mhcdn.mhqiyi.com/20210203/nv4puLPg/index.m3u8"
              },
              {
                  "siteurl": "https://www.663dy.com/xibu/82880.html"
              }
          ]
      }
    ]})
    let result = await fetch('http://39.104.62.152:8000/ad/rotationImg', {method: 'POST'})
      .then(response => response.json())
      .then(result => {
        return result
      })
      .catch(err => { console.log(err) })
      .finally(() => {
        
      })
    alert(result, 'result')
  }

  render() {
    const { swiperList } = this.state
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
              <Swiper listData={swiperList} chlickHandler={(detail) => {this._onPress('MoviewDetail',detail)}} />
              <View style={styles.notice}>
                <Image style={styles.noticeIcon} source={require('../../../assets/images/notice.png')} />
                <Text style={styles.noticeText}>最新通知咨询都在这里了</Text>
              </View>
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

  notice: {
    flexDirection: 'row',
    paddingHorizontal: 19,
    paddingTop: 7,
    paddingBottom: 7,
    alignItems: 'center',
    backgroundColor: '#eee'
    // justifyContent: 'space-between'
  },
  noticeIcon: {
    width: 12,
    height: 15,

  },
  noticeText: {
    color: '#0e050a',
    fontSize: 12,
    marginLeft: 6
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