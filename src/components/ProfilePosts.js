import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const ProfilePosts = ({profilePosts}) => {
  console.log(profilePosts);
  return (
    <TouchableOpacity >
      <Image
        style={styles.post_image}
        source={{
          uri:
            profilePosts.postImage
        }}
      />
    </TouchableOpacity>
  );
};

export default ProfilePosts;

const styles = StyleSheet.create({
  post_image: {
    height: Dimensions.get('window').width / 3,
    width: Dimensions.get('window').width / 3,
  },
});
