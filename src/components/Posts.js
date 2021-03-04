import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Post from '../components/Post';

const Posts = (postsData) => {
  return (
    <View>
      <FlatList
        data={postsData.post}
        // keyExtractor={({postsData.post.user.name}) => name}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={item => item.user.name}

      />
    </View>
  );
};

export default Posts;
