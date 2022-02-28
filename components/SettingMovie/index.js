import { StyleSheet, Text, View, Image, StatusBar, ScrollView, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view'; 

const SetCheck = ({checked}) => (<>
  <TouchableWithoutFeedback onPress={() => checked = !checked}>
    <View style={{ marginRight: 8}}>
      {checked 
        ? <Image source={require('../../assets/images/checked.png')} />
        : <Text style={{ width: 24, height: 24, backgroundColor: '#dbdbdb', borderRadius: 4, overflow: 'hidden' }}></Text>
      }
    </View>
  </TouchableWithoutFeedback>
</>)
export default class SettingMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false
    }

    this.setCheck = this.setCheck.bind(this)
  }

  setCheck (isEditStatus) {
    this.setState({
      isEdit: isEditStatus
    })
  }

  render() {
    const { title, subTitle, backHandler, type  } = this.props
    const { isEdit } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <View style={styles.movieBar}>
          <TouchableWithoutFeedback onPress={() => { backHandler() }}>
            <Image style={{ width: 22, height: 22 }} source={require('../../assets/images/backBlack.png')} />
          </TouchableWithoutFeedback>
          <Text style={styles.font15}>{title}</Text>
          {isEdit ? <Text onPress={() => this.setCheck(true)} style={styles.font15}>选择全部</Text> : <Text onPress={() => this.setCheck(true)} style={styles.font15}>编辑</Text>}
        </View>

        <ScrollView>
          {
            [{checked: false, downloaded: 1},{checked: true, downloaded: 0},{checked: false, downloaded: 0},{checked: false, downloaded: 0},{checked: false, downloaded: 1},{checked: false, downloaded: 1},{checked: false, downloaded: 0},{checked: false, downloaded: 0},{checked: false, downloaded: 0}].map((item, index) => (
              <View style={styles.movieItem} key={index}>
                {isEdit && <SetCheck checked={item.checked} /> }
                <View style={styles.movieItemRt}>
                  <ImageBackground style={styles.movieImage} source={{ uri: 'https://iph.href.lu/110x150?text=CMYS&fg=999999&bg=cccccc'}}>
                    <Text style={styles.set}>观看至12集</Text>
                  </ImageBackground>
                  <View style={styles.movieRt}>
                    <View>
                      <View style={styles.movieInfo}>
                        <Text style={styles.movieTile}>影视名称</Text>
                        {type == 'download' && <Text style={{ fontSize: 12, color: item.downloaded ? '#777878' : '#ff7403'}}>正在下载80%</Text>}
                      </View>
                      <Text style={styles.font12Gray}>电影： 2021</Text>
                    </View>
                    <Text style={styles.font12Gray}>陈小春，张智霖，言承旭，李云迪，林志炫，黄贯中，谢天华，林晓峰...</Text>
                  </View>
                </View>
              </View>
            ))
          }
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movieBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 7,
  },
  font15: {
    fontSize: 15
  },
  font12Gray: {
    fontSize: 12,
    color: '#777878',
    width: 188
  },
  movieList: {

  },
  movieItem: {
    flexDirection: 'row',
    paddingTop: 15,
    marginHorizontal: 15,
  },
  movieItemRt: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#dbdbdb',
    paddingBottom: 13,
    borderBottomWidth: 1,
  },
  movieImage: {
    width: 75,
    height: 102,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  set: {
    lineHeight: 15,
    backgroundColor: 'rgba(0,0,0,.2)',
    textAlign: 'right',
    color: '#fff',
    fontSize: 10,
    paddingHorizontal: 4
  },
  movieRt: {
    flex: 1,
    paddingLeft: 20,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  movieInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  movieTile: {
    marginBottom: 8
  },
  downloadTitle: {
    fontSize: 12
  }
})