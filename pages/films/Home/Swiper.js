import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

import { Carousel } from '@ant-design/react-native'


export default class Swiper extends Component {
  constructor(props) {
    super(props)
    this.onHorizontalSelectedIndexChange = this.onHorizontalSelectedIndexChange.bind(this)
  }

  onHorizontalSelectedIndexChange() {}

  render() {
    return (
      <View>
        <Carousel
          style={styles.wrapper}
          dotStyle={{ width: 5, height: 5,  }}
          dotActiveStyle={{ backgroundColor: '#ff7403' }}
          selectedIndex={2}
          autoplay
          infinite
          afterChange={this.onHorizontalSelectedIndexChange}
        >
          <View
            style={[styles.containerHorizontal, { backgroundColor: 'red' }]}
          >
            <Text>Carousel 1</Text>
          </View>
          <View
            style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}
          >
            <Text>Carousel 2</Text>
          </View>
          <View
            style={[
              styles.containerHorizontal,
              { backgroundColor: 'yellow' },
            ]}
          >
            <Text>Carousel 3</Text>
          </View>
          <View
            style={[styles.containerHorizontal, { backgroundColor: 'aqua' }]}
          >
            <Text>Carousel 4</Text>
          </View>
          <View
            style={[
              styles.containerHorizontal,
              { backgroundColor: 'fuchsia' },
            ]}
          >
            <Text>Carousel 5</Text>
          </View>
        </Carousel>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    height: 187
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});