import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const DashboardHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          source={require('../assets/Instagram.png')}
          style={{height: 28, width: 110}}
        />
        <View style={styles.rightContainer}>
          <TouchableOpacity style={{marginRight: 20}}>
            <Image source={require('../assets/Like.png')} />
          </TouchableOpacity>
          <View style={{position: 'relative'}}>
            <TouchableOpacity>
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
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingVertical: 15,
    // paddingHorizontal: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems:'center'
  },
  rightContainer: {
    flexDirection: 'row',
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
