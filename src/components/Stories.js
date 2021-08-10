import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Story from './Story';


const Stories = (data) => {
  return (
    <View>
      <FlatList
        data={data.stories}
        keyExtractor={({name}) => name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Story imageUri={item.user.imageUri} name={item.user.name} />
        )}
      />
    </View>
  );
};

export default Stories;
