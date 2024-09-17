import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards';
import FancyCards from './Components/FancyCards';
import ActionCard from './Components/ActionCard';
import ContactList from './Components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
          <FancyCards />
          <FancyCards />
          <ActionCard />
          <ContactList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
