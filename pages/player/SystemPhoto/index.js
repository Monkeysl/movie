import { StyleSheet, Text, View, Image } from 'react-native'
import CameraRoll from '@react-native-community/cameraroll'
import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view'; 

import { NavBar } from '../../../components'

import { Container } from './StyledIndex'

//照片获取参数
var fetchParams = {
  first: 6,
  groupTypes:  'All' ,
  assetType:  'Photos'
}
export default class SystemPhoto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: null
    }
  }

  componentDidMount () {
    var _that = this
    var  promise = CameraRoll.getPhotos(fetchParams)
    promise.then( (data) => {
            var  edges = data.edges;
            var  photos = [];
            for  ( var  i  in  edges) {
                photos.push(edges[i].node.image.uri);
            }
            _that.setState({
                photos:photos
            });
    }, function (err){
        alert( '获取照片失败！' );
    });
  }

  render() {
    var  photos =  this .state.photos || [];
    var  photosView = [];
    // for ( var  i = 0; i < 6 ; i += 2){
    //   photosView.push(
    //     <View key={i} style={styles.row}>
    //       <View style={styles.flex}>
    //         <Image resizeMode= "stretch"  style={styles.image} source={{uri:photos[i]}}/>
    //       </View>
    //       <View style={styles.flex}>
    //         <Image resizeMode= "stretch"  style={styles.image} source={{uri:photos[i+1]}}/>
    //       </View>
    //     </View>
    //   )
    // }

    return (
      <SafeAreaView style={styles.container}>
        <NavBar title="系统相册" subTitle=" " subTitleClickHandler={this.subTitleClickHandler} isShowBack={true}  backHandler={() => {this.props.navigation.navigate('PlayerIndex')}} />
        {photosView}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  flex:{
    flex:1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    // paddingTop: 30,
    // alignItems: 'center'
  },
  row:{
    flexDirection:  'row'
  },
  image:{
    height: 120,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderColor:  '#ddd'
  },
});