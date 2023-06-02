import React from 'react';
import {View,Image, TextInput, StyleSheet} from 'resct-native';

const Header = () => {
 return(
  <View style = {StyleSheet.container}>
   <Image 
   source = {require('.\logo.png')}
   style = {StyleSheet.logo}
   resizeMode = "contain"
   />
   <TextInput
   style= {StyleSheet.searchBar}
   placeholder = "Search for property"
   />
   {/* Other navigation component can be added here*/}
  </View>
 );
};

const styles = Stylesheet.create ({
 container: {
  flexDirection: 'row',
  allignItems: 'center',
  justifyContent: 'space-between',
  padingVertical: 10,
  paddingHorizontal: 16,
  backgroundColor: '#ffffff'
 },
 logo: {
  width: 120,
  height: 40,
 },
 Searchbar: {
  flex: 1,
  marginLeft: 16,
  paddingHorizontal: 10,
  paddingVertical: 8,
  borderRadius: 8,
  backgroundColor: '#f0f0f0',
 },
})

export default Header;