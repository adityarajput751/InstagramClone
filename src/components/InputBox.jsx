import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InputBox = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
  maxLength,
  secureTextEntry,
  keyboardType,
  touched,
  errors,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
        touched={touched}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
      {errors && touched && <Text style={styles.errorMsg}>{errors}</Text>}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  mainContainer: {
    height: 68,
    marginBottom: 10,
  },
  inputText: {
    borderWidth: 1,
    width: 350,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorMsg: {
    color: 'red',
    paddingLeft: 5,
  },
});
