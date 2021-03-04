/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DiscoveryScreen from './src/screens/DiscoveryScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              return <FoundationIcon name="home" size={size} color={color} />;
            }
            if (route.name === 'Discovery') {
              return <FeatherIcon name="search" size={size} color={color} />;
            }
            if (route.name === 'Post') {
              return (
                <FeatherIcon name="plus-square" size={size} color={color} />
              );
            }
            if (route.name === 'Notifications') {
              return <AntDesignIcon name="hearto" size={size} color={color} />;
            }
            if (route.name === 'Profile') {
              return (
                <IoniconsIcon name="person-outline" size={size} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: '#777777',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={CreatePostScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
