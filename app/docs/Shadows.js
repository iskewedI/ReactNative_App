import React from 'react';
import { SafeAreaView, Platform, StyleSheet, StatusBar, View } from 'react-native';

export default App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.REPLACE}></View>
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
  REPLACE: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
    //iOS - At least this three
    shadowColor: 'grey',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,

    // Just for ANDROID
    elevation: 20,
  },
});
// There is NO STYLE INHERITANCE in React Native
