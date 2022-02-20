import { Text, View } from 'react-native'
import React, { Component } from 'react'

import { NavBar, SectionTitle } from '../../../components'

import {
  Container,
  ItemsCon
} from './StyledIndex'

export default class ITunesImport extends Component {
  constructor(props) {
    super(props)
   
  }

  async componentDidMount() {

  }

  render() {
    return (
      <Container>
        <NavBar title="iTunes导入" subTitle=" " isShowBack={true} />
        <ItemsCon></ItemsCon>
      </Container>
    )
  }
}