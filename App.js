import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppContainer from './src/main.js';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppContainer/>
      </View>
    );
  }
}



