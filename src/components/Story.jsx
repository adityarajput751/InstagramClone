import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {UserData} from '../utils/UserData';
import {useNavigation} from '@react-navigation/native';

const Story = () => {
  const navigation = useNavigation()
  return (
    <View style={{flexDirection: 'row', marginTop: 8}}>
      {UserData.map(item => {
        return (
          <View style={{marginLeft: 10}}>
            <TouchableOpacity onPress={() => navigation.navigate("StoryPage", { item })}>
              <View style={{borderWidth: 5, borderRadius: 40, padding : 2}}>
                <Image
                  source={item.story.image}
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 37.5,
                    borderWidth: 5,
                  }}
                />
              </View>
            </TouchableOpacity>
            <Text style={{textAlign: 'center'}}>{item.username}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Story;
