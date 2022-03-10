import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import React, { Component } from "react";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";

import * as ScreenOrientation from "expo-screen-orientation";
import { Audio, Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import { setStatusBarHidden } from "expo-status-bar";
const { height, width } = Dimensions.get("window");

import { ImageIcon } from "./StyledIndex";

export default class MoviewDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inFullscreen: 1,
      videowidth: Dimensions.get("window").width,
      videoheight: (Dimensions.get("window").width * 9) / 10,
    }
    this._onPress = this._onPress.bind(this)
  }

  _onPress(routerNm) {
    this.props.navigation.navigate(routerNm)
  }

  render() {
    const { videowidth, videoheight, inFullscreen } = this.state;
    return (
      <>
        {/* { screenFlag!=1&&<StatusBar hidden={true}/>} */}
        {/* <StatusBar hidden={true}/> */}
        <SafeAreaView style={styles.container}>
          {/* tabbar背景start */}
          <SafeAreaInsetsContext.Consumer>
            {(insets) => (
              <View style={{ width: '100%', height: insets.top, backgroundColor: '#000', marginTop: -insets.top }}></View>
            )}
          </SafeAreaInsetsContext.Consumer>
          {/* tabbar背景end */}

          {/* 返回按钮start */}
          <TouchableWithoutFeedback onPress={()=> {this._onPress('FilmsIndex')}}>
            <View style={styles.headBack}>
              <ImageIcon source={require('../../../assets/images/back.png')} />
              <Text style={{ color: '#fff' }}>电影</Text>
            </View>
          </TouchableWithoutFeedback>
          {/* 返回按钮end */}
          
          <ScrollView>
            {/* 视频播放器start */}
            <View>
              <VideoPlayer
                inFullscreen={true}
                videoProps={{
                  shouldPlay: true,
                  resizeMode: Video.RESIZE_MODE_CONTAIN,
                  source: {
                    uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                  },
                }}
                style={{
                  videoBackgroundColor: "black",
                  height: inFullscreen ? Dimensions.get("window").width : 211,
                  width: inFullscreen ? Dimensions.get("window").height : 375,
                }}
                fullscreen={{
                  inFullscreen: inFullscreen,
                  enterFullscreen: async () => {
                    setStatusBarHidden(true, "fade");
                    this.setState({ inFullscreen: !inFullscreen });
                    await ScreenOrientation.lockAsync(
                      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
                    );
                  },
                  exitFullscreen: async () => {
                    setStatusBarHidden(false, "fade");
                    this.setState({ inFullscreen: !inFullscreen });
                    await ScreenOrientation.lockAsync(
                      ScreenOrientation.OrientationLock.PORTRAIT_UP
                    );
                  },
                }}
                
              />
            </View>
            {/* 视频播放器end */}

            {/* 标题start */}
            <View style={styles.title}>
              <Text style={{ fontSize: 15 }}>萌宠果酱</Text>
              <View style={styles.desc}>
                <Text style={{ fontSize: 12, color: '#ff6959' }}>9.0</Text><Text style={{ fontSize: 12 }}>·大陆</Text><Text style={{ fontSize: 12, color: '#777878',marginLeft: 15 }}>简介&gt;</Text>
              </View>
            </View>
            {/* 标题end */}

            {/* 剧集 start */}
            <View style={styles.play}>
              <Text style={styles.playTitle}>缓存线路（共36集）</Text>
              <View style={styles.scollNumber}>
                <View style={styles.numberCon}><Text style={styles.number}>1</Text></View>
              </View>

              <Text style={styles.playTitle}>缓存线路（共36集）</Text>
              <View style={styles.scollNumber}>
                { [1,2,3,4,5,6,7,8,9,10].map(item => (<View style={styles.numberCon}><Text style={styles.number}>{item}</Text></View>)) }
              </View>
            </View>
            {/* 剧集 end */}


          </ScrollView> 
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#eeeeee"
    // justifyContent: "center",
  },
  headBack: {
    position: "absolute",
    left: 15,
    top: 30,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  desc: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12
  },
  play: {
    paddingTop: 17,
    paddingBottom: 17,
    paddingHorizontal: 16,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  playTitle: {
    fontSize: 15
  },
  scollNumber: {
    flexDirection: "row",
    marginTop: 17, 
    marginBottom: 48,
    width: 345,
    overflow: "scroll" 
  },
  numberCon: {
    width: 40,
    height: 40,
    borderRadius: 2,
    overflow: "hidden",
    marginRight: 10
  },
  number: {
    width: 40,
    height: 40,
    textAlign: "center",
    lineHeight: 40,
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#eee",
  }
});
