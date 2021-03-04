import React from 'react';
import Stories from '../components/Stories';
import Posts from '../components/Posts';
import {data} from '../modules/data'

const HomeScreen = () => {
  return (
    <>
      <Stories stories={data}/>
      <Posts post={data} />
    </>
  );
};

export default HomeScreen;
