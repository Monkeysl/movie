import { Text, View } from 'react-native';
import React, { Component } from 'react';

import { NavBar, SectionTitle } from '../../../components'

import { Container, SettingCon } from './StyledIndex.js'

export default class Setting extends Component {
  render() {
    return (
      <Container>
        <NavBar title="设置" justify="center" />
        <SettingCon>
          <SectionTitle title="设置" />
          <SectionTitle title="给个好评" />
          <SectionTitle title="清除缓存" rightText="23k" />
          <SectionTitle title="版本信息" rightText="已是最新版本" />
        </SettingCon>
      </Container>
    );
  }
}
