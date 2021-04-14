/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, SafeAreaView, View, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './src/router/authRoute'

import Router from './src/router/';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Auth />
    </NavigationContainer>
  );
};

export default App;
