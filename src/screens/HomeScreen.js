import React from 'react';
import Stories from '../components/Stories';
import Posts from '../components/Posts';
import {postsData} from '../modules/data'

const data = {
  user: {
    imageUri:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Lukas',
  },
  imageUri:
    'https://images.unsplash.com/photo-1614771161235-5f761f2c65f3?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  caption: 'Honda weight 485kg',
  likesCount: 230,
  postedAt: '6 minutes ago',
};

const HomeScreen = () => {
  return (
    <>
      <Stories />
      <Posts post={postsData} />
    </>
  );
};

export default HomeScreen;
