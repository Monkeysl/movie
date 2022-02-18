import { Text, View, StatusBar } from 'react-native'
import React, { Component } from 'react'

import { Container, SubTitle, ImageIcon, MainTitle } from './StyledIndex';

export default class navBar extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { title, subTitle, isShowBack, justify, backUrl } = this.props
    const subTitleCon = () => <SubTitle>{subTitle}</SubTitle>

    return (
      <Container justify={justify}>
        <StatusBar backgroundColor="blue" />
        {!!isShowBack&&<ImageIcon source={require('../../assets/images/back.png')} />}
        <MainTitle>{title}</MainTitle>
        {!!subTitle&&subTitleCon()}
      </Container>
    )
  }
}