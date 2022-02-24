import { StyleSheet, Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import { 
  SafeAreaInsetsContext
} from 'react-native-safe-area-context';

import { Container, SubTitle, ImageIcon, MainTitle } from './StyledIndex';

export default class SearchHeaderBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
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