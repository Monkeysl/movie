// import { StatusBar } from 'expo-status-bar'
import { StyleSheet, StatusBar, Text, View } from 'react-native'
import { Provider } from 'mobx-react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import store from './store'
import PlayerIndex from './pages/player/Index'  // 播放器
import FilmsIndex from './pages/films/Index'  // 电影

// 播放器
import ITunesImport from './pages/player/ITunesImport'  // iTunes导入
import SystemPhoto from './pages/player/SystemPhoto/'  // 系统相册
import WIFITransfer from './pages/player/WIFITransfer/'  // wifi传输
// 电影
import Login from './pages/films/Login'
import Search from './pages/films/Search'
import WatchHistory from './pages/films/WatchHistory'
import Favorite from './pages/films/Favorite'
import Download from './pages/films/Download'
import MoviewDetail from './pages/films/MoviewDetail'

const Stack = createStackNavigator ()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
        />
        <Provider store={store}>
          <Stack.Navigator initialRouteName="MoviewDetail">
            
            {/* 播放器 */}
            <Stack.Screen name="PlayerIndex" component={PlayerIndex} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="WIFITransfer" component={WIFITransfer} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="ITunesImport" component={ITunesImport} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="SystemPhoto" component={SystemPhoto} options={{ headerShown: false }}></Stack.Screen>
            {/* 影视 */}
            <Stack.Screen name="MoviewDetail" component={MoviewDetail} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="FilmsIndex" component={FilmsIndex} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="WatchHistory" component={WatchHistory} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Favorite" component={Favorite} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Download" component={Download} options={{ headerShown: false }}></Stack.Screen>
            
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
