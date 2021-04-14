import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import logo from '../assets/images/Instagram-Logo.png';
import * as Animatable from 'react-native-animatable';

const AuthScreen = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          style={styles.logo}
          source={logo}
          animation="bounceIn"
          resizeMode="stretch"
          duration={1500}
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text>Sign up to see photos and videos from your friends.</Text>
        <TouchableOpacity style={styles.signInButton} onPress={() => props.navigation.navigate()} >
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.5,
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  signInButton: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#0000ff',
    borderRadius: 20,
  },
  signIn: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
