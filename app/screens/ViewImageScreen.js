import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';

const ViewImageScreen = () => {
  <View style={styles.container}>
    <View style={styles.closeIcon}></View>
    <View style={styles.deleteIcon}></View>
    <Image
      resizeMode='contain'
      style={styles.image}
      source={require('../assets/adaptive-icon.png')}
    />
  </View>;
};

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: colors.primary,
    height: 50,
    left: 30,
    position: 'absolute',
    top: 40,
    width: 50,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    height: 50,
    right: 30,
    position: 'absolute',
    top: 40,
    width: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
