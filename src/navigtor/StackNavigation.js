import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/auth/Login'
import Signup from '../screens/auth/Signup'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Home' component={Header} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation