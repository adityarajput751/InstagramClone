import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/screens/auth/Login'
import Signup from './src/screens/auth/Signup'
import StackNavigation from './src/navigator/StackNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Home /> */}
      <StackNavigation />
    </SafeAreaView>
  )
}

export default App