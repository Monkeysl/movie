import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { NavBar, SectionTitle } from '../../../components'

import { Container, SettingCon } from './StyledIndex.js'


const styles = StyleSheet.create({
  rightTextStyle: {
    fontSize: 12,
    color: '#707070'
  }
})
export default class Setting extends Component {
  render() {
    return (
      <Container>
        <NavBar title="设置" justify="center" />
        <SettingCon>
          <SectionTitle title="设置" />
          <SectionTitle title="给个好评" />
          <SectionTitle title="清除缓存" isShowBack={false} rightText="23k" />
          <SectionTitle title="版本信息" isShowBack={false} rightText="已是最新版本" rightTextStyle={styles.rightTextStyle} />
        </SettingCon>
      </Container>
    );
  }
}
