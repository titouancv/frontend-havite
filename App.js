import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Footer from './src/Footer';
import HomePage from './src/Pages/HomePage';

export default function App() {
  const renderItem = ({ item }) => (
    <ListItem name={item.name} imageUrl={item.imageUrl} />
  );

  return (
    <View className="flex flex-col h-screen w-full bg-white">
      <HomePage className=""></HomePage>
      <Footer className=""></Footer>
    </View>
  );
}
