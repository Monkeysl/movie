import { Text, View, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import { 
  SafeAreaInsetsContext
} from 'react-native-safe-area-context';

import { Container, SubTitle, ImageIcon, MainTitle } from './StyledIndex';

export default class navBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, subTitle, subTitleClickHandler, isShowBack, justify, backHandler } = this.props

    return (
      <SafeAreaInsetsContext.Consumer>
        {(insets) => 
          <Container justify={justify} navBarTop={insets.top}>
            <TouchableWithoutFeedback onPress={() => backHandler&&backHandler()}><View>{!!isShowBack&&<ImageIcon source={require('../../assets/images/back.png')} />}</View></TouchableWithoutFeedback>
            <MainTitle>{title}</MainTitle>
            <SubTitle onPress={() => subTitleClickHandler&&subTitleClickHandler()}>{subTitle}</SubTitle>
          </Container> 
        }
      </SafeAreaInsetsContext.Consumer>
    )
  }
}