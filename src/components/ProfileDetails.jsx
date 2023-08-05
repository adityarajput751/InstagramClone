import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ProfileDetails = () => {
  return (
    <View style={{paddingHorizontal: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 80, width: 80, borderRadius: 4}}
          source={require('../assets/CodeBuilder.jpeg')}
        />
        <View style={{width: 75, alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: '400', color: 'black'}}>
            4
          </Text>
          <Text style={{fontSize: 16, color: 'black'}}>Posts</Text>
        </View>
        <View style={{width: 75, alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: '400', color: 'black'}}>
            1.2 M
          </Text>
          <Text style={{fontSize: 16, color: 'black'}}>Followers</Text>
        </View>
        <View style={{width: 75, alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: '400', color: 'black'}}>
            1
          </Text>
          <Text style={{fontSize: 16, color: 'black'}}>Following</Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          fontWeight: '500',
          marginTop: 10,
        }}>
        Code Builder Studio
      </Text>
      <Text style={{color: 'black'}}>React Native</Text>
      <Text style={{color: 'black'}}>Instagram Clone</Text>
      <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
        See Translation
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#E1E1E1',
              width: 150,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              textAlign: 'center',
              color: 'black',
            }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#E1E1E1',
              width: 150,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              textAlign: 'center',
              color: 'black',
            }}>
            Share Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileDetails;
