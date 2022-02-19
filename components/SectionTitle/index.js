import { Text, View } from 'react-native'
import React, { Component } from 'react'

import { Container, SectionTitleCon, LeftCon, RightCon, RightText, SubTitle, ImageIcon,  } from './StyledIndex';

export default SectionTitle =  (props) => {

    const { title, rightText, rightTextStyle, isShowBack = true, justify, backUrl } = props

    return (
      <Container justify={justify}>
        <SectionTitleCon>
          <LeftCon>
            <Text>{title}</Text>
          </LeftCon>
          <RightCon>
            <RightText style={rightTextStyle}>{rightText}</RightText>
            { isShowBack && <ImageIcon source={require('../../assets/images/next.png')} /> }
          </RightCon>
        </SectionTitleCon>
      </Container>
    )
}