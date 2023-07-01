import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'

const Home = () => {
  return (
    <View style={styles.mainContainer} >
      <DashboardHeader />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})