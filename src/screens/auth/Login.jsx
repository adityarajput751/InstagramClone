import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';
import {Formik} from 'formik';
import {loginInitialValue, validationSchema} from './utils';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const handleLogin = values => {
    console.log(values);
    navigation.navigate('Dashboard')
  };
  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          source={require('../../assets/Instagram.png')}
          style={styles.logoImage}
        />
        <Formik
          initialValues={loginInitialValue}
          onSubmit={handleLogin}
          validationSchema={validationSchema}>
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
                  placeholder={'Username, email address or mobile number'}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  touched={touched.username}
                  errors={errors.username}
                />
                <InputBox
                  placeholder={'Password'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  touched={touched.password}
                  errors={errors.password}
                  secureTextEntry
                />
                <CustomButton
                  buttonTitle={'Login'}
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </View>
            );
          }}
        </Formik>
        <TouchableOpacity style={{marginTop: 20, alignSelf: 'center'}}>
          <Text style={{fontSize: 16}}>Forgotten Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <TouchableOpacity
          style={{marginBottom: 20, alignSelf: 'center'}}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{fontSize: 16}}>Create new account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logoImage: {
    marginBottom: 50,
    alignSelf: 'center',
  },
});
