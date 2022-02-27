import { Text, View } from 'react-native'
import React, { Component } from 'react'

import { SettingMovie } from '../../../components'

export default class Download extends Component {
  constructor(props) {
    super(props)
    this._onPress = this._onPress.bind(this)
  }

  _onPress(routerNm) {
    this.props.navigation.navigate(routerNm)
  }


  render() {
    return (
      <SettingMovie title="我的下载" subTitle="编辑" type="download" backHandler={() => { this._onPress('FilmsIndex') }}></SettingMovie>
    )
  }
}