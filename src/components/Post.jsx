import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {UserData} from '../utils/UserData';

const Post = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={{marginTop: 2}}>
      {UserData.map(item => {
        return (
          <View key={item.id} style={{marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                marginBottom: 8,
              }}>
              <Image
                style={{height: 30, width: 30, borderRadius: 15}}
                source={item.profile}
              />
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  color: 'black',
                }}>
                {item.name}
              </Text>
            </View>
            <View>
              <Image
                style={{height: 400, width: screenWidth}}
                source={item.post.image}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 13,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <TouchableOpacity>
                <Image
                  style={{height: 24, width: 28}}
                  source={require('../assets/Like.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{height: 24, width: 24, marginLeft: 15}}
                  source={require('../assets/Comment.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{height: 24, width: 28, marginLeft: 15}}
                  source={require('../assets/Messanger.png')}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                marginLeft: 13,
                marginTop: 10,
                fontSize: 16,
                fontWeight: '600',
                color: 'black',
              }}>
              {item.post.like} likes
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 13,
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
                {item.name}{' '}
              </Text>
              <Text style={{color: 'black'}}>{item.post.caption}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
