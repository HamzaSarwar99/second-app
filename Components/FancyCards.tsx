import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.headingText}>Trending places</Text>
        <View style={[styles.card, styles.Elevated]}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-photo/view-breathtaking-beach-nature-landscape_23-2151682891.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}></View>
          <Text style={styles.cardTitle}></Text>
          <Text style={styles.cardLabel}>
            Captivating Sunset view at somewhere in the world 🌍
          </Text>
          <Text style={styles.cardDescription}>
            Here is the beautiful creature of Allah Almighty! that look awsome
            at first glance.Say MashaAllah and enjoy the memorizing view.
          </Text>
          <Text style={styles.cardFooter}>15 KM Away !</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  card: {
    height: 300,
    width: 400,
    borderRadius: 6,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  Elevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    borderRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    height: 380,
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    // flex: 1,
    // flexGrow:1
  },
  cardTitle: {
    color: '#000000',
    marginHorizontal: 4,
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardLabel: {
    color: '#000000',
    marginHorizontal: 4,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    color: '#2F363F',
    marginHorizontal: 4,
    fontSize: 14,
    marginTop: 6,
  },
  cardFooter: {
    color: '#000000',
    marginHorizontal: 4,
    marginTop: 6,
    fontSize: 16,
    fontWeight:'500'
  },
});
