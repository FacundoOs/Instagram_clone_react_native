import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {data} from '../modules/data';
import Profile from '../components/Profile';
import {users} from '../modules/dataUpdated'
import {postsData} from '../modules/dataUpdated'
import {followers} from '../modules/dataUpdated'
import {following} from '../modules/dataUpdated'

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Profile data={data[0]} user={users[0]} followers={followers[0]} following={following[0]} postsData={postsData[0]} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
