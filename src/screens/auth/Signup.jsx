import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import InputBox from '../../components/InputBox';
import LoginButton from '../../components/LoginButton';
import {Formik} from 'formik';
import {SignupValidationSchema, signupInitialValue} from './utils';

const Signup = () => {
  const handleSignup = values => {
    console.log(values);
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize: 25, fontWeight: '700', marginBottom: 20}}>
        What's your mobile number?
      </Text>
      <Formik
        initialValues={signupInitialValue}
        onSubmit={handleSignup}
        validationSchema={SignupValidationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => {
          return (
            <View>
              <InputBox
                placeholder={'Mobile number'}
                onChangeText={handleChange('mobileNumber')}
                onBlur={handleBlur('mobileNumber')}
                value={values.mobileNumber}
                touched={touched.mobileNumber}
                errors={errors.mobileNumber}
                keyboardType={'numeric'}
                maxLength={10}
              />
              <LoginButton
                buttonTitle={'Sign up'}
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </View>
          );
        }}
      </Formik>
      <TouchableOpacity style={{marginTop: 20, alignSelf: 'center'}}>
        <Text style={{fontSize: 16}}>Sign up with email address</Text>
      </TouchableOpacity>
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 20}}>
        <TouchableOpacity>
          <Text style={{fontSize: 16, alignSelf: 'center'}}>
            Already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  logoImage: {
    marginBottom: 50,
    alignSelf: 'center',
  },
});
