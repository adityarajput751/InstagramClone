import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const footer = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        height: 60,
        alignItems: 'center',
      }}>
      <TouchableOpacity>
        <Image
          style={{height: 37, width: 35}}
          source={require('../assets/footer/homeButton.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{height: 37, width: 35}}
          source={require('../assets/footer/search.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{height: 37, width: 35}}
          source={require('../assets/footer/addPost.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{height: 35, width: 36}}
          source={require('../assets/footer/reel.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{height: 37, width: 35}}
          source={require('../assets/footer/user.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default footer;
