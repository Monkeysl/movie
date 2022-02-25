import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { Provider } from '../../../context/router'

import { TabBar } from '@ant-design/react-native'

import SafeAreaView from 'react-native-safe-area-view'; 

// 首页组件
import Home from '../Home'
import My from '../My'

// 图标样式
import {
  ImageIcon
} from './StyledIndex'

export default class FilmsIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'my',
    }
    this.navigation = this.props.navigation
  }

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    })
  }

  render() {
    return (
      <Provider value={{navigation: this.navigation}}>
        <TabBar
          unselectedTintColor="#000"
          tintColor="#ff7430"
          barTintColor="#fff">
          <TabBar.Item
            title="首页"
            icon={<ImageIcon source={require('../../../assets/images/home.png')} />}
            selectedIcon={<ImageIcon source={require('../../../assets/images/homea.png')} />}
            selected={this.state.selectedTab === 'home'}
            onPress={() => this.onChangeTab('home')}>
            <Home />
          </TabBar.Item>
          <TabBar.Item
            icon={<ImageIcon source={require('../../../assets/images/my.png')} />}
            selectedIcon={<ImageIcon source={require('../../../assets/images/mya.png')} />}
            title="我的"
            selected={this.state.selectedTab === 'my'}
            onPress={() => this.onChangeTab('my')}>
            <My />
          </TabBar.Item>
        </TabBar>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  FilmsIndexCon: {

  }
})
