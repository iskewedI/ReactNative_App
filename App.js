import React from 'react';
import { SafeAreaView, Platform, StyleSheet, StatusBar, View } from 'react-native';
import AppButton from './app/components/AppButton';
// It will import the AppText for plaform where are in
import AppText from './app/docs/AppText';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppButton title='Login' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
