import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Story from '../../components/Story'

const Dashboard = () => {
  return (
    <View style={{flex: 1,}}>
      <Header />
      <Story />
    </View>
  )
}

export default Dashboard