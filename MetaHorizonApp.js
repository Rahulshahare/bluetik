import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Switch, TouchableOpacity, Button, Modal, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IOSModal from './IOSModal';
import IOSButton from './IOSButton';
import IOSCard from './IOSCard';

export default function MetaHorizonApp() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSheet, setShowSheet] = useState(false);
  const [postText, setPostText] = useState('');

  const themeStyles = darkMode ? styles.dark : styles.light;
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <SafeAreaView style={[styles.container, themeStyles.bg]}>
      {/* Header */}
      <View style={[styles.header, themeStyles.card]}>
        <Text style={[styles.logo, themeStyles.text]}>MetaHorizon</Text>
        <Switch
          value={darkMode}
          onValueChange={() => setDarkMode(!darkMode)}
        />
      </View>
      

      {/* Stories */}
      <ScrollView horizontal style={styles.stories} showsHorizontalScrollIndicator={false}>
        {['John', 'Emily', 'Alex', 'Sara','Wiz','June','hellie'].map((name, index) => (
          <View key={index} style={styles.story}>
            <Image
              source={{ uri: `https://i.pravatar.cc/100?u=${name}` }}
              style={styles.storyImage}
            />
            <Text style={[styles.storyText, themeStyles.text]}>{name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* IOS Button and sheet */}
      <View style={styles.IOS}>
        <IOSButton title='These are updates'  onPress={()=> setModalVisible(true)}/>
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

      {/* Button before Post Card */}
      <View style={styles.actionButtonContainer}>
        <Button
          title="Create Post"
          onPress={() => setShowSheet(true)}
          color={darkMode ? '#00b4ff' : '#007bff'}
        />
      </View>

      {/* Post */}
      <ScrollView style={styles.posts}>
        <View style={[styles.post, themeStyles.card]}>
          <Text style={[styles.postAuthor, themeStyles.text]}>Jane Doe</Text>
          <Text style={[styles.postContent, themeStyles.text]}>
            Just visited the Grand Canyon! It was breathtaking 😍
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Nav Placeholder */}
      <View style={[styles.bottomNav, themeStyles.card]}>
        {['🏠', '🔍', '➕', '🔔', '👤'].map((icon, i) => (
          <TouchableOpacity key={i}>
            <Text style={[styles.navIcon, themeStyles.text]}>{icon}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Sheet */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSheet}
        onRequestClose={() => setShowSheet(false)}>
        <View style={styles.bottomSheetWrapper}>
          <View style={[styles.bottomSheet, themeStyles.card]}>
            <Text style={[styles.sheetTitle, themeStyles.text]}>Create a Post</Text>
            <TextInput
              style={[styles.input, themeStyles.text]}
              placeholder="What's on your mind?"
              placeholderTextColor={darkMode ? '#888' : '#aaa'}
              multiline
              numberOfLines={4}
              value={postText}
              onChangeText={setPostText}
            />
            <Pressable
              style={styles.sheetButton}
              onPress={() => {
                setShowSheet(false);
                setPostText('');
              }}>
              <Text style={styles.sheetButtonText}>Post</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  IOS:{
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  stories: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  story: {
    alignItems: 'center',
    marginRight: 16,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#00b4ff',
  },
  storyText: {
    marginTop: 4,
    fontSize: 12,
  },
  actionButtonContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  posts: {
    flex: 1,
    paddingHorizontal: 16,
  },
  post: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  postAuthor: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 16,
  },
  postContent: {
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  navIcon: {
    fontSize: 20,
  },
  bottomSheetWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  bottomSheet: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    marginBottom: 16,
  },
  sheetButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  sheetButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  light: {
    bg: { backgroundColor: '#ffffff' },
    text: { color: '#000000' },
    card: { backgroundColor: '#f0f0f0', borderColor: '#ddd' },
  },
  dark: {
    bg: { backgroundColor: '#121212' },
    text: { color: '#f1f1f1' },
    card: { backgroundColor: '#1f1f1f', borderColor: '#444' },
  },
});