import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'

import { Container } from './StyledIndex'

export default class FilmsSectionTitle extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, subTitle, icon, isHiddenBorder, clickHandler } = this.props
    return (
      <Container isHiddenBorder={isHiddenBorder}>
        <View style={styles.LeftTileCon}>
          <Image style={styles.titleIcon} source={icon} />
          <Text style={{fontSize: 14, marginLeft: 12}}>{title}</Text>
        </View>

        <TouchableWithoutFeedback onPress={() => { clickHandler('FilmsIndex') }}>
          <View style={styles.RightTileCon}>
            {subTitle&&<Text style={styles.subTitle}>{subTitle}</Text>}
            {!subTitle&&<Image style={styles.titleIcon} source={require('../../assets/images/nextRect.png')} />}
          </View>
        </TouchableWithoutFeedback>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  titleIcon: {
    width: 24,
    height: 24
  },
  LeftTileCon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  RightTileCon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  subTitle: {
    fontSize: 12,
    color: '#707070'
  }
})