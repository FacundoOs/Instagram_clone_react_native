import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ProfilePosts from '../components/ProfilePosts';

const Profile = ({data, user, followers, following, postsData}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.personal_info_container}>
          <Image
            style={styles.profile_image}
            source={{uri: user.profilePicture}}
          />
          <View style={styles.header_text}>
            <View>
              <Text style={styles.text_style}>
                {postsData.posts.length}
              </Text>
              <Text style={styles.text_style}>Posts</Text>
            </View>
            <View>
              <Text style={styles.text_style}>
                {followers.followers.length}
              </Text>
              <Text style={styles.text_style}>Followers</Text>
            </View>
            <View>
              <Text style={styles.text_style}>
                {following.following.length}
              </Text>
              <Text style={styles.text_style}>Following</Text>
            </View>
          </View>
        </View>
        <View style={styles.description_container}>
          <Text style={styles.description_text}>Description. This is my profile page. Description </Text>
        </View>
        <View style={styles.middle_buttons}>
          <TouchableOpacity style={styles.buttons_style}>
            <Text style={styles.text_style} >Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons_style}>
            <Text style={styles.text_style}>Saved</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.postImages}>
        <FlatList
          data={postsData.posts}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({item}) => <ProfilePosts profilePosts={item} />}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  header_container: {
    marginHorizontal: 8,
  },
  personal_info_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile_image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  header_text: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: 280,
  },
  text_style: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600'
  },
  description_container: {
    marginVertical: 14,
  },
  description_text: {
    fontSize: 18,
    fontWeight: '600'
  },
  middle_buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons_style: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get('window').width / 2 - 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 32
  },
  postImages: {
    flexDirection: 'row',
    marginTop: 12
  },
});
