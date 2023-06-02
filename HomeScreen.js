import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Header from './Header';
import Categories from './Categories';
import FeaturedPropeties from './FeaturedProperties';
import PopularDestinations from './PopularDestinations';

const HomeScreen = () => {
 return (
  <View style = {StyleSheet.container}>
   <Header/>
   <ScrollView contentContainerstyle = {StyleSheet.contentContainer}>
    <Categories/>
    <FeaturedProperties/>
    <popularDestinations/>
   </ScrollView>
  </View>
 );
};

const styles = stylesheet.create ({
 container: {
  flex: 1,
  backgroundColor: '#ffffff'
 },
 contentContainer: {
  flexGrow: 1,
 },

});

export default HomeScreen;