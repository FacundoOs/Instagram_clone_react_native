import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Story from './Story';

const data = [
  {
    imageUri:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Lukas',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Tommy',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Ingrid',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Emilia',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Lit',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Cleo',
  },
];

const Stories = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={({name}) => name}
        horizontal
        renderItem={({item}) => (
          <Story imageUri={item.imageUri} name={item.name} />
        )}
      />
    </View>
  );
};

export default Stories;
