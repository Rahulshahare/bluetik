import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Animated, ScrollView } from 'react-native';

const IOSModal = ({ visible, onClose, title, children }) => {
  const slideAnim = React.useRef(new Animated.Value(300)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Animated.View style={[styles.modal, { transform: [{ translateY: slideAnim }] }]}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeText}>Done</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.content}>
            {children}
            {children}
            {children}
            {children}

          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Translucent iOS-style background
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#F2F2F7', // iOS light gray background
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 12, // Reduced padding for smaller modal
    maxHeight: '70%', // Modal takes up 20% of screen height
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C6C6C8',
  },
  headerText: {
    fontSize: 16, // Slightly smaller font for compact modal
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'System',
  },
  closeText: {
    fontSize: 14, // Adjusted for smaller modal
    color: '#007AFF',
    fontWeight: '600',
    fontFamily: 'System',
  },
  content: {
    paddingTop: 8,
  },
});

export default IOSModal;