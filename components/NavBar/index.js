import { Text, View } from 'react-native'
import React, { Component } from 'react'

import { Container } from './StyledIndex';

export default class navBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, subTitle, isShowBack, backUrl } = this.props

    return (
      <Container>
        <Text>{title}</Text>
        {subTitle}
      </Container>
    )
  }
}