import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

// There is NO STYLE INHERITANCE in React Native, so we create a custom text component to ALL texts in the app

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default AppText;
