import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/screens/auth/Login'
import Signup from './src/screens/auth/Signup'
import Home from './src/screens/dashboard/Home'

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Login /> */}
      {/* <Signup /> */}
      <Home />
    </View>
  )
}

export default App