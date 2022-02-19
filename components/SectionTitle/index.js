import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import { Container, SectionTitleCon, LeftCon, RightCon, SubTitle, ImageIcon,  } from './StyledIndex';

const styles = StyleSheet.create({
  red: {
    // color: 'red',
  }
})

export default SectionTitle =  (props) => {

    const { title, rightText, rightTextStyle, isShowBack = true, justify, backUrl } = props

    return (
      <Container justify={justify}>
        <SectionTitleCon>
          <LeftCon>
            <Text style={styles.red}>{title}</Text>
          </LeftCon>
          <RightCon>
            <Text style={rightTextStyle}>{rightText}</Text>
            { isShowBack && <ImageIcon source={require('../../assets/images/next.png')} /> }
          </RightCon>
        </SectionTitleCon>
      </Container>
    )
}
