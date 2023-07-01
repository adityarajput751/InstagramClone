import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const DashboardHeader = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/Instagram.png')}
          style={{height: 28, width: 110}}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{marginRight: 20}}>
            <Image source={require('../assets/Like.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{position: 'relative'}}>
              <Image source={require('../assets/Messanger.png')} />
              <View style={{position: 'absolute', bottom: 15, left: 10}}>
                <Text
                  style={{
                    color: 'white',
                    backgroundColor: 'red',
                    alignSelf: 'center',
                    paddingHorizontal: 5,
                    borderRadius: 10,
                  }}>
                  7
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DashboardHeader;
