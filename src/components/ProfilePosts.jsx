import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, {useState} from 'react'
import { UserData, typeData } from '../utils/UserData';

const ProfilePosts = () => {
    const [selected, setSelected] = useState(1);
    console.log(selected, 'fmdskm');
  
    const renderItem = item => {
      return (
        <View>
          <Image
            style={{height: 130.9, width: 130.9}}
            source={item.item.profile}
          />
        </View>
      );
    };
  return (
    <View style={{marginTop: 20}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      {typeData.map(item => {
        return (
          <View
          key={item.id}
            style={{
              width: 196.36,
              paddingBottom: 15,
              borderBottomWidth: selected === item.id ? 1 : 0,
            }}>
            <TouchableOpacity onPress={() => setSelected(item.id)}>
              <Image
                style={{tintColor: 'black', alignSelf: 'center'}}
                source={item.image}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
    {selected == 1 && (
      <FlatList
        data={UserData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
      />
    )}
  </View>
  )
}

export default ProfilePosts