import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { 
  SafeAreaInsetsContext
} from 'react-native-safe-area-context';
import { Tabs } from '@ant-design/react-native'

import { Container, SubTitle, ImageIcon, MainTitle } from './StyledIndex';

export default class SearchHeaderBar extends Component {
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

    const { title, justify, isSHowSearchBar } = this.props

    const SearchBar = (props) => (
      <View style={styles.SearchBarCon}>
        <Image style={styles.searchBarIcon} source={require('../../assets/images/searchBar.png')} />
        <Image style={styles.shareIcon} source={require('../../assets/images/shareWhite.png')} />
      </View>
    )

    return (
      <SafeAreaInsetsContext.Consumer>
        {(insets) => 
          <Container justify={justify} navBarTop={insets.top}>
            {title && <Text style={styles.title}>{title}</Text>}
            {isSHowSearchBar && <SearchBar />}
            <Text style={styles.title}>12312</Text>
        
            <Tabs
              tabs={tabs}
              renderTabBar={(tabProps) => (
                <View
                  style={{
                    paddingHorizontal: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                  }}>
                  {tabProps.tabs.map((tab, i) => (
                    // change the style to fit your needs
                    <TouchableOpacity
                      activeOpacity={0.9}
                      key={tab.key || i}
                      style={{
                        // width: '30%',
                        padding: 6,
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
                          color: tabProps.activeTab === i ? 'green' : undefined,
                        }}>
                        {tab.title}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}>
              <View>
                <Text>Content of First Tab</Text>
              </View>
              <View>
                <Text>Content of Second Tab</Text>
              </View>
              <View>
                <Text>Content of Third Tab</Text>
              </View>
            </Tabs>
          </Container> 
        }
      </SafeAreaInsetsContext.Consumer>
    )
  }
}

const styles = StyleSheet.create({
  SearchBarCon: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 6,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center'

  },
  searchBarIcon: {
    width: 308,
    height: 30
  },
  shareIcon: {
    width: 24,
    height: 24
  },
  title: {
    fontSize: 15,
    color: '#fff',
  }

})