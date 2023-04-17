import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import Album from './components/Album';
import store from './redux';
const data = JSON.stringify(store.getState());
const App = () => (
  <View>
    <SafeAreaView style={styles.container}>
      <Album />
    </SafeAreaView>
    <Text style={styles.text}>{data}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    marginTop: 100,
  },
});
export default App;