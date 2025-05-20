import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import IOSModal from './IOSModal';
import IOSButton from './IOSButton';
import IOSCard from './IOSCard';

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <IOSButton title='These are updates' style={styles.text} onPress={()=> setModalVisible(true)}/>
      <IOSModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Updates" 
      >
        <IOSCard title="Reminder" subtitle="Buy groceries at 5 PM" />
        <IOSCard title="These are updates" subtitle="Adjust brightness" />
        <IOSCard title="Enable Dark Mode" subtitle="Toggle Wi-Fi" />
      </IOSModal>
    </View>
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
