import { Text, View } from 'react-native'
import React, { Component } from 'react'

import { Container, SectionTitleCon, LeftCon, RightCon, RightText, SubTitle, ImageIcon,  } from './StyledIndex';

export default class SectionTitle extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { title, rightText, isShowBack, justify, backUrl } = this.props
    const subTitleCon = () => <SubTitle>{subTitle}</SubTitle>

    return (
      <Container justify={justify}>
        <SectionTitleCon>
          <LeftCon>
            <Text>{title}</Text>
          </LeftCon>
          <RightCon>
            <RightText>{rightText}</RightText>
            <ImageIcon source={require('../../assets/images/next.png')} />
          </RightCon>
        </SectionTitleCon>
      </Container>
    )
  }
}