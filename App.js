import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'mobx-react'
import store from './store'

import PlayerIndex from './pages/player/Index'
import FilmsIndex from './pages/films/Index'

export default function App() {
  return (
    <Provider store={store}>
      <PlayerIndex />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
