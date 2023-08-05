// import { View, Text, Button, Alert, Image } from 'react-native';
// import React, { useState } from 'react';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// const Search = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   console.log(selectedImage); // This will log the selected image URI to the console

//   const handleImagePicker = () => {
//     Alert.alert(
//       'Select Image',
//       'Choose an option:',
//       [
//         {
//           text: 'Open Camera',
//           onPress: () => openCamera(),
//         },
//         {
//           text: 'Open Image Library',
//           onPress: () => openImageLibrary(),
//         },
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//       ],
//       { cancelable: true }
//     );
//   };

//   const openCamera = () => {
//     const options = {
//       mediaType: 'photo',
//       maxWidth: 300,
//       maxHeight: 300,
//       quality: 1,
//     };

//     launchCamera(options, handleImageResponse);
//   };

//   const openImageLibrary = () => {
//     const options = {
//       mediaType: 'photo',
//       maxWidth: 300,
//       maxHeight: 300,
//       quality: 1,
//     };

//     launchImageLibrary(options, handleImageResponse);
//   };

//   const handleImageResponse = (response) => {
//     if (response.didCancel) {
//       console.log('User cancelled image picker');
//     } else if (response.error) {
//       console.log('ImagePicker Error: ', response.error);
//     } else if (response.uri) {
//       setSelectedImage(response.uri);
//     }
//   };

//   return (
//     <View style={{flex: 1}}>
//       {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
//       <Button title="Select Image" onPress={handleImagePicker} />
//     </View>
//   );
// };

// export default Search;

import { View, Text } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}

export default Search