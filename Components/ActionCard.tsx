import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Blog Card</Text>
        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              What's new in the Javascript 21-ES12
            </Text>
            <Image
              source={require('../assets/images/redsky.jpg')}
              style={styles.cardImage}
            />
            <View style={styles.bodyContainer}>
              <Text numberOfLines={3}>
                flex-start: Items align to the left side of the container.
                flex-end: Items align to the right side of the container.
                center: Items align at the center of the container.
                space-between: Items display with equal spacing between them.
                space-around: Items display with equal spacing around them.
              </Text>
            </View>
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://www.google.com/search?q=blog+post&rlz=1C5CHFA_enPK1097PK1097&oq=blog+post&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDM1NTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
                )
              }>
              <Text style={styles.socialLink}>Read more</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://github.com/HamzaSarwar99/second-app.git')
              }>
              <Text style={styles.socialLink}>Follow me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 6,
  },
  card: {
    height: 410,
    width: 400,
    marginHorizontal: 6,
    marginTop: 4,
    marginBottom: 4,
  },
  elevatedCard: {
    backgroundColor: '#1287A5',
    borderRadius: 6,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  headingContainer: {
    height: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    marginHorizontal: 6,
    fontSize: 18,
    fontWeight: '600',
  },
  cardImage: {
    height: 250,
    width: 400,
    // marginHorizontal: 2,
    // borderRadius: 4,
    marginTop: 4,
  },
  bodyContainer: {
    fontSize: 14,
    fontWeight: '300',
    //   marginHorizontal: 6,
    padding: 4,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLink: {
    fontSize: 20,
    //   marginHorizontal: 6,
    color: '#000',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 4,
    borderRadius: 6,
  },
});
