import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Hamza Sarwar',
      status: 'Developer at Echt Technologies',
      phone: '03499450559',
      imageUrl: 'https://avatars.githubusercontent.com/u/153795327?v=4',
    },
    {
      uid: 2,
      name: 'Muhammad Hassan',
      status: 'Developer at Echt Technologies and my Teacher',
      phone: '03424712554',
      imageUrl: 'https://avatars.githubusercontent.com/u/113697066?v=4',
    },
    {
      uid: 3,
      name: 'Kamran Younis',
      status: 'Ceo of Echt Technologies',
      phone: '03499450559',
      imageUrl: 'https://avatars.githubusercontent.com/u/31986011?v=4',
    },
    {
      uid: 4,
      name: 'Hamid abdullah',
      status: 'Ex-Developer at Kivyx Technologies',
      phone: '03499450559',
      imageUrl: 'https://avatars.githubusercontent.com/u/113660005?v=4',
    },
  ];
  return (
    <View>
      <Text style={[styles.headingText,styles.underLineText]}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, phone, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
            <Text style={styles.userPhone}>{phone}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 10,
    margin:6
    },
    underLineText: {
        fontSize: 20,
        textDecorationLine:'underline'
    },
  container: {
    // backgroundColor: '#498c8c',
    padding: 6,
    marginTop: 10,
  },
  userCard: {
    marginHorizontal: 4,
    marginVertical: 4,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  userName: {},
  userStatus: {},
  userPhone: {},
});
