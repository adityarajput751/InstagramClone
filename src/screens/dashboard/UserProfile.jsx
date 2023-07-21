import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import {UserData, typeData} from '../../utils/UserData';
import Post from '../../components/Post';
import ProfilePosts from '../../components/ProfilePosts';
import ProfileDetails from '../../components/ProfileDetails';

const UserProfile = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ProfileHeader />
      <ProfileDetails />
      <ProfilePosts />
    </View>
  );
};

export default UserProfile;
