import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColors} from '../utils/Colors';

const CustomButton = ({buttonTitle, onPress, disabled}) => {
  return (
    <View style={{alignItems:'center'}}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View
          style={[
            styles.buttonContainer,
            {
              backgroundColor: disabled
                ? AppColors.BUTTON_DISABLED
                : AppColors.BUTTON,
            },
          ]}>
          <Text style={styles.textStyle}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 350,
    borderRadius: 5,
    // alignItems:'center'
  },
  textStyle: {
    color: 'white',
    paddingVertical: 12,
    fontSize: 18,
    textAlign: 'center',
  },
});
