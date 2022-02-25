import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
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
    width: 12,
    height: 15,
  },
  noticeIcon: {

  },
  noticeText: {
    
  }
});