import React from 'react';
import Stories from '../components/Stories';
import Posts from '../components/Posts';
import {data} from '../modules/data';
import {SafeAreaView} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Stories stories={data} />
      <Posts post={data} />
    </SafeAreaView>
  );
};

export default HomeScreen;
