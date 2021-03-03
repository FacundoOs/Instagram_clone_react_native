import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Story = ({imageUri, name}) => {
  console.log({imageUri});
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageUri}} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    height: 76,
    width: 76,
    margin: 7,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#ae22e0',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#fff',
  },
  name: {
    textAlign: 'center',
  },
});
