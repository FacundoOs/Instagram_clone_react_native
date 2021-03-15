import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, StyleSheet} from 'react-native';
import ProfileScreen from '../screens/ProfileScreen'
import FeatherIcon from 'react-native-vector-icons/Feather';
import {users} from '../modules/dataUpdated'

const ProfileStack = createStackNavigator();

const ProfileRoute = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} 
      options={{
        headerTitle: () => (
          <Text style={{fontWeight: 'bold', fontSize: 26}}>{users[0].userName}</Text>
        ),
        headerTitleAlign: "left",
        headerRight: () => (
          <View style={styles.header_icons}>
            <FeatherIcon name= "plus-square" size={25} />
            <FeatherIcon name= "menu" size={25} />
          </View>
        )

      }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileRoute;

const styles = StyleSheet.create({
  header_icons: {
    flexDirection: "row",
    width: 80,
    justifyContent: "space-around"
  }
})