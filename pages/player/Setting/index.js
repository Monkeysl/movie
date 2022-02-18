import { Text, View } from 'react-native';
import React, { Component } from 'react';

import NavBar from '../../../components/NavBar'

import { Container, SettingCon } from './StyledIndex.js'

export default class Setting extends Component {
  render() {
    return (
      <Container>
        <NavBar title="设置" justify="center" />
        <SettingCon>
          <Text>设置</Text>
        </SettingCon>
      </Container>
    );
  }
}
