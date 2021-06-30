import React from 'react';
import { SafeAreaView, Platform, StyleSheet, StatusBar, View } from 'react-native';

export default App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: '50%',
          height: '30%',
        }}
      ></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
