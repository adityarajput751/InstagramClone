import {View, Text, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const StoryView = ({route}) => {
  const selectedItem = route.params.item;
  const navigation = useNavigation();
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const storyHr = currentHour - selectedItem.story.time;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.goBack();
    }, 30000);
  }, []);
  return (
    <View>
      <View
        style={{
          paddingTop: 12,
          paddingLeft: 12,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
        <Image
          style={{height: 40, width: 40, borderRadius: 20, marginRight: 15}}
          source={selectedItem?.profile}
        />
        <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>
          {selectedItem.name}
        </Text>
        <Text style={{fontSize: 18, paddingLeft: 10, color: 'white'}}>
          {storyHr} hr
        </Text>
      </View>
      <View style={{position: 'absolute'}}>
        <Image
          style={{height: screenHeight - 90, width: screenWidth}}
          source={selectedItem.story.image}
        />
      </View>
    </View>
  );
};

export default StoryView;
