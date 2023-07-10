import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
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
    <View style={{backgroundColor: 'black', flex: 1}}>
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
          style={{
            height: screenHeight - 100,
            width: screenWidth,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
          source={selectedItem.story.image}
        />
        <KeyboardAvoidingView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10
          }}>
          <TextInput
            style={{
              borderWidth: 1,
              marginHorizontal: 30,
              borderRadius: 30,
              width: 300,
              paddingHorizontal: 15,
              color: 'white',
              borderColor: 'white'
            }}
            placeholder="Message"
            placeholderTextColor={'white'}
          />
          <TouchableOpacity>
          <Image
            style={{marginRight: 10, tintColor: 'white'}}
            source={require('../assets/Messanger.png')}
          />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default StoryView;
