import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

const Controllers = () => {
  return (
    <View style={styles.container}>
      {['Change Password', 'Privacy Policy', 'Theme', 'Language', 'Contact Us', 'My Profile'].map((setting) => {
        <View key={setting} style={styles.settingItem}>
          <Text style={styles.settingText}>{setting}</Text>
        </View>
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Controllers;
