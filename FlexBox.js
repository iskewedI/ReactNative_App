import React from 'react';
import { View } from 'react-native';

export default FlexBox = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        // flex: .5, //Half of the screen
        flex: 1,
        // By default, flexDirection is COLUMN.
        flexDirection: 'row',
        //  alignItems: Set the placement of each items.
        /* The "base" of the secondary axis will setted in the same place, 
           beyond what height or width they have. Used mostly in GRAPHS. */
        alignItems: 'baseline',
        /* alignContent only works if flexWrap is WRAP. Set the aligment to the
           entire content. */
        alignContent: '',
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
