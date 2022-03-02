import { StyleSheet, Text, View, StatusBar, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view'; 


export default class MoviewDetail extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <Text>light-content</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})