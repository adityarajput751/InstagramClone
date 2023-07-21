import {View, Text, Image} from 'react-native';
import React from 'react';

const ProfileHeader = () => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingTop: 10,
        height: 55,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '500',
            // lineHeight: 28,
            color: 'black',
          }}>
          codebuilderstudio
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: 24, width: 24, marginRight: 15}}
            source={require('../assets/footer/addPost.png')}
          />
          <Image
            style={{height: 20, width: 20, tintColor: 'black'}}
            source={require('../assets/icon/Menu.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
