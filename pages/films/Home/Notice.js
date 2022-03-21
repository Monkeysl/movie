import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect } from 'react'

import { Carousel } from '@ant-design/react-native'

const Notice = (props) => {
  const { listData=[], chlickHandler } = props

  const onHorizontalSelectedIndexChange = () => {}

  return (
    <Carousel
      style={styles.wrapper}
      dotStyle={{ width: 5, height: 5,  }}
      dotActiveStyle={{ backgroundColor: '#ff7403' }}
      selectedIndex={2}
      autoplay
      infinite
      afterChange={onHorizontalSelectedIndexChange}
      vertical
    >
      {
        listData.map((item, index) => 
          <TouchableWithoutFeedback key={index} onPress={() => {((_item) => { chlickHandler(_item) })(item)}}>
            <View style={styles.notice}>
              <Image style={styles.noticeIcon} source={require('../../../assets/images/notice.png')} />
              <Text style={styles.noticeText}>最新通知咨询都在这里了</Text>
            </View>
          </TouchableWithoutFeedback>
        )
      }
    </Carousel>
  )
}

const styles = StyleSheet.create({
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
  }
})

export default Notice