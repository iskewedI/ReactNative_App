import React from 'react';
import { ImageBackgroundComponent, View, StyleSheet, Image, Text } from 'react-native';

import colors from '../config/colors';

const WelcomeScreen = () => {
  <ImageBackgroundComponent
    style={styles.background}
    source={require('../assets/Bsackground.jpg')}
  >
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../assets/icon.png')} />
      <Text>Sell What You Don't Need</Text>
    </View>
    <View style={styles.loginButton}></View>
    <View style={styles.registerButton}></View>
  </ImageBackgroundComponent>;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: '70%',
    alignItems: 'center',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
