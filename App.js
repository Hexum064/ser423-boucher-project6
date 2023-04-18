/*

Author: Branden Boucher
Class: SER423
Project: 6

*/

import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,

} from 'react-native';
import Album from './components/Album';

const App = () => (

  <SafeAreaView style={styles.container}>
    <Album />
  </SafeAreaView>
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