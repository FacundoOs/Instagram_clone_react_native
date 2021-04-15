import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import logo from '../assets/images/Instagram-Logo.png';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Value} from 'react-native-reanimated';

const SignIn = () => {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);

  const nameChange = (text) => {
    if (text.length !== 0) setName(true);
    else setName(false);
  };

  const emailChange = (text) => {
    if (text.length !== 0) setEmail(true);
    else setEmail(false);
  };

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
        <Text style={styles.inputTitle}>Name</Text>
        <View style={styles.input}>
          <SimpleLineIcons name="people" color="#05375a" size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Your name..."
            onChangeText={(text) => nameChange(text)}
          />
          {name ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={24} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={styles.inputTitle}>E-MAIL</Text>
        <View style={styles.input}>
          <FontAwesome name="user-o" color="#05375a" size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Your email..."
            onChangeText={(text) => emailChange(text)}
          />
          {email ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={24} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={styles.inputTitle}>Password</Text>
        <View style={styles.input}>
          <FontAwesome name="lock" color="#05375a" size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Your password..."
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={securePassword}
          />
          <TouchableOpacity onPress={() => setSecurePassword(!securePassword)}>
            {securePassword ? (
              <Feather name="eye-off" color="#AEB6BF" size={24} />
            ) : (
              <Feather name="eye" color="#AEB6BF" size={24} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.inputTitle}> Confirm Password</Text>
        <View style={styles.input}>
          <FontAwesome name="lock" color="#05375a" size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Your password..."
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={securePassword}
          />
          <TouchableOpacity onPress={() => setSecurePassword(!securePassword)}>
            {securePassword ? (
              <Feather name="eye-off" color="#AEB6BF" size={24} />
            ) : (
              <Feather name="eye" color="#AEB6BF" size={24} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signInButton}
          // onPress={() => props.navigation.navigate()}
        >
          <Text style={styles.signIn}>Sign Up</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SignIn;

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
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  inputTitle: {
    fontSize: 20,
    color: '#05375a',
  },
  input: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
  },
  forgotPassword: {
    color: '#009bd1',
  },
  signInButton: {
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
});
