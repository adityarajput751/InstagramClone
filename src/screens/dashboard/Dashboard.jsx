import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Stories from '../../components/Stories';
import Post from '../../components/Post';

const Dashboard = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <Stories />
      <Post />
    </ScrollView>
  );
};

export default Dashboard;
