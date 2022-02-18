import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@ant-design/react-native'

import PlayerIndex from './pages/player/Index'
import FilmsIndex from './pages/films/Index'

export default function App() {
  return (
    <PlayerIndex />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
