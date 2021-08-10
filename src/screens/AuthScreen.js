import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  TouchableOpacity,
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
        <Text style={styles.textStyle}>
          Sign up to see photos and videos from your friends.
        </Text>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => props.navigation.navigate('SignIn')}>
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.signUpFooter}>
          <View style={styles.separatorLine}></View>
          <Text style={styles.textStyle}>
            Don't have an account?
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </Animatable.View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5851DB',
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
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
  },
  signInButton: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#405DE6',
    borderRadius: 20,
  },
  signIn: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  signUpFooter: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  separatorLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#aeb6bf',
  },
  signUp: {
    fontWeight: 'bold',
    paddingLeft: 5,
    fontSize: 18,
    alignItems: 'flex-end',
    color: "#323437"
  },
});
