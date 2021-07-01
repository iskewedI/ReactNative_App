import React from 'react';
import { View } from 'react-native';

export default FlexBox = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        // flex: .5, //Half of the screen
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          flex: 1,
        }}
      />
    </View>
  );
};
