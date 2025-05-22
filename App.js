import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import IOSModal from './IOSModal';
import IOSButton from './IOSButton';
import IOSCard from './IOSCard';
import MetaHorizonApp from './MetaHorizonApp';

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <MetaHorizonApp/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
