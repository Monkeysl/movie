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
    const subTitleCon = () => <SubTitle onPress={subTitleClickHandler}>{subTitle}</SubTitle>

    return (
      <SafeAreaInsetsContext.Consumer>
        {(insets) => 
          <Container justify={justify} navBarTop={insets.top}>
            {!!isShowBack&&<TouchableWithoutFeedback onPress={() => backHandler()}><ImageIcon source={require('../../assets/images/back.png')} /></TouchableWithoutFeedback>}
            <MainTitle>{title}</MainTitle>
            {!!subTitle&&subTitleCon()}
          </Container> 
        }
      </SafeAreaInsetsContext.Consumer>
    )
  }
}