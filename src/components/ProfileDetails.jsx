import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ProfileDetails = () => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderWidth: 2,
            height: 85,
            width: 85,
            borderRadius: 82,
          }}>
          <Image
            style={{height: 80, width: 80, borderRadius: 40}}
            source={require('../assets/CodeBuilder.jpeg')}
          />
        </View>
        <View style={{width: 75, alignItems: 'center'}}>
          <Text style={{fontSize: 24, color: 'black', fontWeight: '400'}}>
            4
          </Text>
          <Text style={{fontSize: 16, color: 'black'}}>Posts</Text>
        </View>
        <View style={{width: 75, alignItems: 'center'}}>
          <Text style={{fontSize: 24, color: 'black', fontWeight: '400'}}>
            1.2 M
          </Text>
          <Text style={{fontSize: 16, color: 'black'}}>Followers</Text>
        </View>
        <View style={{width: 75, alignItems: 'center'}}>
          <Text style={{fontSize: 24, color: 'black', fontWeight: '400'}}>
            2
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
      <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
        See Traslation
      </Text>
      <View
        style={{
          marginTop: 18,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#E1E1E1',
              width: 150,
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 5,
              fontSize: 16,
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
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 5,
              fontSize: 16,
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
