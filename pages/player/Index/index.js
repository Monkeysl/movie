import { Text, View, Image } from 'react-native';
import React, { Component } from 'react';
import { Icon, SearchBar, TabBar } from '@ant-design/react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo' 

// 首页组件
import VideoList from '../VideoList'
import Browser from '../Browser'
import Setting from '../Setting'

// 图标样式
import {
  Container,
  ImageIcon
} from './StyledIndex'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'redTab',
      isReady: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync(
      'antoutline',
      require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    )

    await Font.loadAsync(
      'antfill',
      require('@ant-design/icons-react-native/fonts/antfill.ttf')
    )
    this.setState({
      ...this.state,
      isReady: true
    })
  }

  renderContent(pageText) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <SearchBar placeholder="Search" showCancelButton />
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    })
  }

  render() {
    // const { isReady } = this.state
    // if (!isReady) return <AppLoading />
    return (
      <Container>
        <TabBar
          unselectedTintColor="#000"
          tintColor="#0397FF"
          barTintColor="#f5f5f5">
          <TabBar.Item
            title="视频列表"
            icon={<ImageIcon source={require('../../../assets/images/video.png')} />}
            selectedIcon={<ImageIcon source={require('../../../assets/images/videoa.png')} />}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => this.onChangeTab('blueTab')}>
            <VideoList />
          </TabBar.Item>
          <TabBar.Item
            icon={<ImageIcon source={require('../../../assets/images/browser.png')} />}
            selectedIcon={<ImageIcon source={require('../../../assets/images/browsera.png')} />}
            title="浏览器"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => this.onChangeTab('redTab')}>
            <Browser />
          </TabBar.Item>
          <TabBar.Item
            icon={<ImageIcon source={require('../../../assets/images/setting.png')} />}
            selectedIcon={<ImageIcon source={require('../../../assets/images/settinga.png')} />}
            title="设置"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => this.onChangeTab('greenTab')}>
            <Setting />
          </TabBar.Item>
        </TabBar>
      </Container>
    );
  }
}
