import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import ShareIcon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import logo from '../assets/images/Instagram-Logo.png';

const HomeStack = createStackNavigator();

const HomeRoutes = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitle: () => (
          <Image source={logo} resizeMode="contain" style={{width: 120}} />
        ),
        headerTitleAlign: 'left',
        headerRight: () => (
          <View style={styles.header_icons}>
            <FeatherIcon name="plus-square" size={25} />
            <ShareIcon name="paper-plane-outline" size={25} />
          </View>
        ),
      }}
    />
  </HomeStack.Navigator>
);

export default HomeRoutes;

const styles = StyleSheet.create({
  header_icons: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-around',
  },
});
