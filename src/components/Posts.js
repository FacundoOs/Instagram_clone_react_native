import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Post from '../components/Post';

const Posts = (postsData) => {
  return (
    <View>
      <FlatList
        data={postsData.post}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Posts;
