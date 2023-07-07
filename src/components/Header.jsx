import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
      }}>
      <View>
        <Image
          style={{height: 28, width: 110}}
          source={require('../assets/Instagram.png')}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginRight: 15}}>
          <Image source={require('../assets/Like.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{position: 'relative'}}>
            <Image source={require('../assets/Messanger.png')} />
            <View style={{position: 'absolute', bottom: 12, left: 13}}>
              <Text
                style={{
                  backgroundColor: 'red',
                  paddingHorizontal: 5,
                  borderRadius: 10,
                }}>
                5
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
