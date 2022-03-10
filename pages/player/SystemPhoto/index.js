import { StyleSheet, Text, View, Image, Button } from 'react-native'
import CameraRoll from '@react-native-community/cameraroll'
import * as ImagePicker from 'expo-image-picker'
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
      image: null
    }
    this.pickImage = this.pickImage.bind(this)
  }

  async pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({
        image: result.uri
      }) 
    }
  }

  componentDidMount () {
    // this.pickImage()
  }

  render() {
    // var  photos =  this .state.photos || [];
    // var  photosView = [];
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

    const { image } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <NavBar title="系统相册" subTitle=" " subTitleClickHandler={this.subTitleClickHandler} isShowBack={true}  backHandler={() => {this.props.navigation.navigate('PlayerIndex')}} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Pick an image from camera roll" onPress={this.pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
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