import { StyleSheet, StatusBar, Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view'; 
import { 
  SafeAreaInsetsContext
} from 'react-native-safe-area-context';

import * as ScreenOrientation from 'expo-screen-orientation'
import { Audio, Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
const {height, width} = Dimensions.get('window');

export default class MoviewDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenFlag: 1,
      videowidth: Dimensions.get('window').width,
      videoheight: Dimensions.get('window').width*9/10
    }
  }

  render() {
    const { screenFlag, videowidth, videoheight } = this.state
    return (
      <>
        <SafeAreaView style={styles.container}>
          {/* { screenFlag!=1&&<StatusBar hidden={true}/>} */}
          <SafeAreaInsetsContext.Consumer>
            {(insets) => (
              <View style={{ width: '100%', height: insets.top, backgroundColor: '#000', top: -insets.top }}></View>
            )} 
          </SafeAreaInsetsContext.Consumer>
          <VideoPlayer
            inFullscreen={true}
            videoProps={{
                shouldPlay: true,
                resizeMode: Video.RESIZE_MODE_CONTAIN,
                source: {
                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                },
            }}
            width= {videowidth}
            height= {videoheight}
            
            switchToPortrait={()=>{
                if(screenFlag==1){
                    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
                    setscreenFlag(0)
                    setvideowidth(Dimensions.get('window').height)
                    setvideoheight(Dimensions.get('window').width)
                }else{
                    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
                    setscreenFlag(1)
                    setvideowidth(width)
                    setvideoheight(width*9/10-1)
                    //console.log(videowidth+","+videoheight)
                }
                
            }}
          />
        </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})