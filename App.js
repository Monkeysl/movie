import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'mobx-react'

import PlayerIndex from './pages/player/Index'
import FilmsIndex from './pages/films/Index'

export default function App() {
  return (
    <Provider>
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
