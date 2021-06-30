import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableHighlight,
  // Only for ANDROID => Works only with a View (div) inside that has a BACKGROUND COLOR.
  TouchableNativeFeedback,
  Button,
  Alert,
} from 'react-native';

export default App = () => {
  let x = 1;
  return (
    // SafeAreaView => On iOS, this will add top-padding to maintain content below the Status Bar.
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2}>Hello world!</Text>
      <TouchableHighlight
        onPress={() =>
          Alert.alert('Alert', 'Image pressed.', [
            { text: "I'm sorry." },
            {
              text: 'Blow up.',
              onPress: () => {
                console.log('Blowing up...');
                Alert.alert('Last words', 'Say your last words.', [
                  {
                    text: "I'm ready.",
                    onPress: () => Alert.alert('Explosion.', 'Boom.'),
                  },
                ]);
              },
            },
          ])
        }
      >
        <Image
          source={{ uri: 'https://picsum.photos/200/300', width: 200, height: 300 }}
        />
      </TouchableHighlight>
      <Button title='Click me' onPress={() => alert('Button pressed.')} color='red' />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Work around for Android devices (SafeAreaView don't work)
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
