import { Text, View, StatusBar } from 'react-native'
import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view'; 

export default class SettingMovie extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      </SafeAreaView>
    )
  }
}