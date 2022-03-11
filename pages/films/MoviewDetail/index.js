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
      showDesc: false,
      showSelections: true,
      anthology: [1,2,3,4,5,6,7,8]
    }
    this._onPress = this._onPress.bind(this)
    this.setShowDesc = this.setShowDesc.bind(this)
    this.setShowSelections = this.setShowSelections.bind(this)
    this.reverseAnthology = this.reverseAnthology.bind(this)
    
  }

  _onPress(routerNm) {
    this.props.navigation.navigate(routerNm)
  }

  setShowDesc(bool) {
    this.setState({
      ...this.state,
      showDesc: bool
    })
  }

  setShowSelections(bool) {
    this.setState({
      ...this.state,
      showSelections: bool
    })
  }

  reverseAnthology() {
    this.setState({
      ...this.state,
      anthology: this.state.anthology.reverse()
    })
  }

  render() {
    const { videowidth, videoheight, inFullscreen, showDesc, showSelections, anthology } = this.state;
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
          
          <ScrollView>

            {
              showDesc &&
              <View style={styles.descCon}>
                {/* 介绍start */}
                <View>

                  <View style={styles.titleDesc}>
                    <Text style={{ fontSize: 15 }}>简介</Text>
                    <TouchableWithoutFeedback onPress={() => { this.setShowDesc(false) }}><ImageIcon source={require('../../../assets/images/close.png')} /></TouchableWithoutFeedback>
                  </View>
                  <View style={styles.mainDesc}>
                    <Text style={styles.mainDescRow}>主演：某某某 某某某</Text>
                    <Text style={styles.mainDescRow}>导演：徐峥</Text>
                    <Text style={styles.mainDescRow}>地区：合适的v和</Text>
                    <Text style={styles.mainDescRow}>年代：2018</Text>
                  </View>

                  <View style={styles.plotDesc}>
                    <Text style={styles.plotTitle}>剧情介绍</Text>
                    <Text style={styles.plotDetail}>电影，是由活动照相术和幻灯放映术结合发展起来的一种连续的影像画面，是一门视觉和听觉的现代艺术，也是一门可以容纳戏剧、摄影、绘画、动画、音乐、舞蹈、文字、雕塑、建筑等多种艺术的现代科技与艺术的综合体。电影是一种视觉艺术，用于模拟通过录制或...</Text>
                  </View>
                </View>
                {/* 介绍end */}
              </View>
            }
            {
              showSelections &&
              <View style={styles.selectionsCon}>
                <View style={styles.titleSelections}>
                  <Text style={{ fontSize: 15 }}>选集</Text>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableWithoutFeedback onPress={this.reverseAnthology}><ImageIcon source={require('../../../assets/images/sort.png')} /></TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => { this.setShowSelections(false) }}><ImageIcon style={{ marginLeft: 20 }} source={require('../../../assets/images/close.png')} /></TouchableWithoutFeedback>
                  </View>
                </View>
                <View style={styles.contentSelection}>
                { anthology.map(item => (<Text key={item} style={styles.numberSelection}>{item}</Text>)) }
                </View>
              </View>
            }
            {
              !showSelections && !showDesc &&
              <View>
                {/* 标题start */}
                <View style={styles.title}>
                  <Text style={{ fontSize: 15 }}>萌宠果酱</Text>
                  <View style={styles.desc}>
                    <Text style={{ fontSize: 12, color: '#ff6959' }}>9.0</Text><Text style={{ fontSize: 12 }}>·大陆</Text><Text style={{ fontSize: 12, color: '#777878',marginLeft: 15 }} onPress={() => { this.setShowDesc(true) }}>简介&gt;</Text>
                  </View>
                </View>
                {/* 标题end */}

                {/* 剧集 start */}
                <View style={styles.play}>
                  <View style={styles.playTitle}>
                    <Text style={{fontSize: 15}}>缓存线路（共36集）</Text>
                    <Text onPress={() => { this.setShowSelections(true) }} style={styles.selections}>选集</Text>
                  </View>
                  <View style={styles.scollNumber}>
                    <Text style={styles.number}>1</Text>
                  </View>

                  <View style={styles.playTitle}>
                    <Text style={{fontSize: 15}}>超清qq（共36集）</Text>
                    <Text onPress={() => { this.setShowSelections(true) }} style={styles.selections}>选集</Text>
                  </View>
                  <View style={styles.scollNumber}>
                    { [1,2,3,4,5,6,7,8,9,10].map(item => (<Text key={item} style={styles.number}>{item}</Text>)) }
                  </View>
                </View>
                {/* 剧集 end */}
              </View>
            }
            


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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selections: {
    borderRadius: 10,
    backgroundColor: "#ff7403",
    color: "#fff",
    fontSize: 14,
    paddingHorizontal: 15,
    lineHeight: 20,
    overflow: "hidden",
  },
  scollNumber: {
    flexDirection: "row",
    marginTop: 17, 
    marginBottom: 48,
    width: 345,
    overflow: "scroll" 
  },
  number: {
    width: 40,
    height: 40,
    borderRadius: 2,
    overflow: "hidden",
    marginRight: 10,
    textAlign: "center",
    lineHeight: 40,
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#eee",
  },
  descCon: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    minHeight: "100%"
  },
  titleDesc: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  mainDesc: {
    marginTop: 16,

  },
  mainDescRow: {
    lineHeight: 22,
    fontSize: 15
  },
  plotDesc: {
    marginTop: 30,
  },
  plotTitle: {
    fontSize: 15,
  },
  plotDetail: {
    fontSize: 14,
    marginTop: 22,
    lineHeight: 25
  },
  selectionsCon: {
    backgroundColor: "#fff",
    minHeight: "100%" 
  },
  titleSelections: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  contentSelection: {
    paddingHorizontal: 6,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  numberSelection: {
    width: 40,
    height: 40,
    lineHeight: 40,
    textAlign: "center",
    borderRadius: 2,
    overflow: "hidden",
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 10,
    backgroundColor: "#eee",
    marginTop: 25
  }

});
