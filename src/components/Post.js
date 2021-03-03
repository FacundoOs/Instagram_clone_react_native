import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import CommentIcon from 'react-native-vector-icons/Fontisto';
import ShareIcon from 'react-native-vector-icons/Ionicons';
import BookmarkIcon from 'react-native-vector-icons/FontAwesome';

const Post = ({post}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.header_left}>
          <Image style={styles.image} source={{uri: post.user.imageUri}} />
          <Text style={styles.name}>{post.user.name}</Text>
        </View>
        <View style={styles.header_rigth}>
          <Icon name="dots-three-vertical" size={18} />
        </View>
      </View>
      <View>
        <Image style={styles.post_image} source={{uri: post.imageUri}} />
      </View>
      <View style={styles.footer_container}>
        <View style={styles.icons_container} >
          <View style={styles.left_icons} >
            <HeartIcon name="hearto" size={20} />
            <CommentIcon name="comment" size={20} />
            <ShareIcon name="paper-plane-outline" size={20} />
          </View>
            <BookmarkIcon name="bookmark-o" size={20} />
        </View>
        <Text style={styles.likes_counter}>{post.likesCount}</Text>
        <Text style={styles.caption}>{post.caption}</Text>
        <Text style={styles.posted_at}>{post.postedAt}</Text>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  header_container: {
    marginLeft: 9,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header_left: {
    flexDirection: 'row',
  },
  header_rigth: {
    marginRight: 15,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 40,
    // borderWidth: 1,
    // borderColor: '#fff',
  },
  name: {
    paddingLeft: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  post_image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  footer_container: {
    margin: 5,
  },
  icons_container: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  left_icons: {
    flexDirection:"row",
    width: 80,
    justifyContent: "space-between"
  },
  likes_counter: {
    fontWeight: 'bold',
  },
  caption: {},
  posted_at: {
    color: '#8c8c8c',
  },
});
