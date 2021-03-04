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
import {createStackNavigator} from '@react-navigation/stack';
import ShareIcon from 'react-native-vector-icons/Ionicons';
import logo from './src/assets/images/Instagram-Logo.png'

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Image source={logo} resizeMode="contain" style={{width: 120}} />
          ),
          headerTitleAlign: "left",
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
};

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
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={CreatePostScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  header_icons: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-around',
  },
});
