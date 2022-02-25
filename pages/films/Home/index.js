import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view'; 
import { Tabs } from '@ant-design/react-native'

import { SearchHeaderBar } from '../../../components'
import Swiper from './Swiper'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
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
        <SearchHeaderBar isSHowSearchBar={true} />
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
            <View style={styles.tabCon}>
              <Swiper />
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
                  <View><Text style={{ color: '#777878', fontSize: 12 }}>共200部&gt;</Text></View>
                </View>

                <View style={styles.newHotListCon}>
                  <View styles={styles.newHotItem}>
                    <View style={styles.movieCon}>
                      <ImageBackground style={{ width: 110, height: 150 }} source={require('../../../assets/images/earth.jpg')}>
                        <Text>更新至12集</Text>
                      </ImageBackground>
                    </View>
                    <Text>电影名称</Text>
                  </View>
                </View>
              </View>
              <View>

              </View>

            </View>
            <View style={styles.tabCon}>
              <Text>Content of Second Tab</Text>
            </View>
            <View style={styles.tabCon}>
              <Text>Content of Third Tab</Text>
            </View>
            <View style={styles.tabCon}>
              <Text>Content of Second Tab</Text>
            </View>
            <View style={styles.tabCon}>
              <Text>Content of Third Tab</Text>
            </View>
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
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  newHotListCon: {
    paddingHorizontal: 7,
  },
  newHotItem: {
    marginHorizontal: 8,
  },
  movieCon: {
    position: 'relative',
    borderRadius: 15,
    overflow: 'hidden',
    width: 110,
    height: 150,
  },
  moiveInfo: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 21,
    backgroundColor: 'rgba(0,0,0,.3)'
  }
});