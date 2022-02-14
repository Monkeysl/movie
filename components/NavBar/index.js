import { Text, View } from 'react-native'
import React, { Component } from 'react'

import { Container, SubTitle, ImageIcon, MainTitle } from './StyledIndex';

export default class navBar extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { title, subTitle, isShowBack, backUrl } = this.props
    const subTitleCon = () => <SubTitle>{subTitle}</SubTitle>

    return (
      <Container>
        {!!isShowBack&&<ImageIcon source={require('../../assets/images/back.png')} />}
        <MainTitle>{title}</MainTitle>
        {!!subTitle&&subTitleCon()}
      </Container>
    )
  }
}