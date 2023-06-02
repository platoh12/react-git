import React from 'react';
import {View, Text, Stylesheet} from 'react-native';

const Categories = () => {
 return(
  <View style= {Stylesheet.container}>
   <Text style= {Stylesheet.title}>Categories</Text>
   {/*Add your category items here*/}
  </View>
 );

};

const styles= StylesSheet.create({
 container: {
  paddingHorizontal: 16,
  marginTop: 16,
 },
 title: {
  FontSize: 18,
  FontWeight: 18,
  marginBottom: 'bold',

 }
});

export default Categories;