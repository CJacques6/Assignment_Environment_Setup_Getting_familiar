import { Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
export default function TabOneScreen() {

  const handleAlertPress = () => {
    Alert.alert("Alert", "Alert Button pressed");
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* ===== 1. HEADER ===== */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="add-circle-outline" size={28} color="white" style={{ marginRight: 15 }} />
          <Ionicons name="heart-outline" size={28} color="white" />
        </View>
      </View>

{/* ===== 2. STORIES ===== */}
<View style={styles.storiesContainer}>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    
    {/* Story 1 */}
    <View style={styles.story}>
      <Image source={{ uri: 'https://picsum.photos/seed/1/200' }} style={styles.storyImage} />
      <Text style={styles.storyUsername}>Your Story</Text>
    </View>

    {/* Story 2 */}
    <View style={styles.story}>
      <Image source={{ uri: 'https://picsum.photos/seed/2/200' }} style={styles.storyImage} />
      <Text style={styles.storyUsername}>thegoaxy</Text>
    </View>

    {/* Story 3 */}
    <View style={styles.story}>
      <Image source={{ uri: 'https://picsum.photos/seed/3/200' }} style={styles.storyImage} />
      <Text style={styles.storyUsername}>calgary_help_</Text>
    </View>

    {/* Story 4 - THIS IS THE ONE WE FIXED */}
    <View style={styles.story}>
      <Image source={{ uri: 'https://picsum.photos/seed/4/200' }} style={styles.storyImage} />
      <Text style={styles.storyUsername}>calgary_punja...</Text>
    </View>

  </ScrollView>
</View>
      {/* ===== 3. POST ===== */}
      <ScrollView>
        <View style={styles.postHeader}>
          <Image source={{ uri: 'https://picsum.photos/seed/1/200' }} style={styles.postProfileImage} />
          <Text style={styles.postUsername}>vikramgoraya</Text>
        </View>
        <Image source={{ uri: 'https://picsum.photos/seed/10/800/600' }} style={styles.postImage} />
        <View style={styles.postActions}>
          <Ionicons name="heart-outline" size={28} color="white" style={{ marginRight: 15 }} />
          <Ionicons name="chatbubble-outline" size={28} color="white" style={{ marginRight: 15 }} />
          <Feather name="send" size={28} color="white" />
        </View>
      </ScrollView>

      {/* The main tab bar is now handled automatically by the "(tabs)" folder, so we don't need to code it here */}

      {/* ===== ASSIGNMENT ALERT BUTTON ===== */}
      <View style={styles.alertButtonContainer}>
          <Button title="Alert" onPress={handleAlertPress} />
      </View>

    </SafeAreaView>
  );
}

// --- All the styles are here ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  storiesContainer: {
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },
  story: {
    alignItems: 'center',
    marginLeft: 15,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#C13584',
  },
  storyUsername: {
    color: 'white',
    marginTop: 5,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  postProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUsername: {
    color: 'white',
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  postActions: {
    flexDirection: 'row',
    padding: 10,
  },
  alertButtonContainer: {
    padding: 10,
  }
});