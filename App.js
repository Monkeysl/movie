// import { StatusBar } from 'expo-status-bar'
import { StyleSheet, StatusBar, Text, View } from 'react-native'
import { Provider } from 'mobx-react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import store from './store'
import PlayerIndex from './pages/player/Index'  // 播放器
import FilmsIndex from './pages/films/Index'  // 电影

import ITunesImport from './pages/player/ITunesImport/'  // iTunes导入
import SystemPhoto from './pages/player/SystemPhoto/'  // 系统相册
import WIFITransfer from './pages/player/WIFITransfer/'  // wifi传输


const Stack = createStackNavigator ()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#0397FF"
        barStyle="light-content"
        translucent={false}
        hidden={false}
      />
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="PlayerIndex"
            component={PlayerIndex}
            options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: '#0397ff',
                height: 0
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
          </Stack.Screen>
          <Stack.Screen name="iTunesImport" component={ITunesImport} ></Stack.Screen>
          <Stack.Screen name="SystemPhoto" component={SystemPhoto} ></Stack.Screen>
          <Stack.Screen name="WIFITransfer" component={WIFITransfer} ></Stack.Screen>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
