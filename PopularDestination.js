import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const popularDestinations = () => {
 return (
  <View style = {StyleSheet.container}>
   <Text style= {Style.container}>popular Destinations</Text>
   {/* Add your popular destinations here*/}
  </View>
 );
};

const styles = StyleSheet.create ({
 container: {
  paddingHorizontal: 16,
  marginTop : 16,
 },
 title: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 8,
 },
});

export default populsrDestination;