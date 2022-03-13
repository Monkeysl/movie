import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect } from 'react'

import { Carousel } from '@ant-design/react-native'


const Swiper = (props) => {
  const { listData, chlickHandler } = props

  const onHorizontalSelectedIndexChange = () => {}

  useEffect(() => {
    // alert(props.listData)

  }, [])

  return (
    <View>
      <Carousel
        style={styles.wrapper}
        dotStyle={{ width: 5, height: 5,  }}
        dotActiveStyle={{ backgroundColor: '#ff7403' }}
        selectedIndex={2}
        autoplay
        infinite
        afterChange={onHorizontalSelectedIndexChange}
      >
        { listData.map((item, index) => <TouchableWithoutFeedback key={index} onPress={() => { chlickHandler(item) }}><Image source={{uri: item.image}} style={[styles.containerHorizontal]} /></TouchableWithoutFeedback>) }
      </Carousel>
    </View>
  )
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

export default Swiper