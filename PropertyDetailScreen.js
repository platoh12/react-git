import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

const propertyDetailsScreen= ({property}) => {
 return (
  <ScrollView style= {Styles.container}>
   <Image source= {{uri:property.image}} style={Styles.image}></Image>
   <View style = {styles.content}>
    <Text style ={styles.title}>{property.title}</Text>
    <Text style = {styles.location}>{property.location}</Text>
    <Text style= {styles.description}>{property.description}</Text>
    <Text styles= {styles.price}>price: ${property.price} per month</Text>
    <Text style= {styles.bedrooms}>{property.bedrooms} Bedrooms</Text>
    <Text style= {styles.bathrooms}>{property.bathrooms} Bathrooms</Text>
    <Text style = {styles.amenities}>Amenities:</Text>
    <View style= {styles.amenitiesList}>
     {property.amenities.map(( amenity,index) =>(
     <Text key={index} style={styles.amenity}>
      {amenity}
     </Text>
     ))}
    </View>
    <Text style= {styles.contact}>Contact Information:</Text>
    <Text style= {styles.ownerName}>{property.owner.name}</Text>
    <Text style={styles.ownerEmail}>{property.owner.email}</Text>
    {/*Add more property details or features here*/}
   </View>
  </ScrollView>
 );
};

const styles= StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#ffffff'
 },
 image: {
  width: '100%',
  height: 300,
  resizeMode: 'cover',
 },
 content: {
  padding: 16,
 },
 title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 8,
  color: '#333333'
 },
 location: {
  fontSize: 18,
  marginBottom:16,
  color: '#666666',
 },
 Price: {
  fontSize: 20,
  marginBottom: 8,
  fontWeight: 'bold',
  color: '#333333'
 },
 bedrooms: {
  fontSize: 18,
  marginBottom: 8,
  color: '#666666',
 },
 bathrooms: {
  fontSize: 18,
  marginBottom:8,
  color: '#666666',
 },
 amenities: {
  fontSize: 18,
  marginBotom: 8,
  fontWeight: 'bold',
  color: '#333333',
  amenitiesList: {
   flexDirection: 'row',
   flexWrap: 'wrap',
  },
  amenity:{
   fontSize: 16,
   marginBottom: 4,
   marginRight: 8,
   paddingHorizontal: 8,
   paddingVerical:4,
   backgroundColor:'#ebebeb',
   borderRadius: 4,
   color: '#333333',
  },
  contact: {
   fontSize: 18,
   marginBottom: 8,
   marginTop: 16,
   fontWeight: 'bold',
   color: '#333333',
  },
  ownerName: {
   fontSize: 16,
   marginBottom: 4,
   color: '#666666',
  },
  ownerEmail:{
   fontSize: 16,
   color: '#666666',
  },
 },

});
export default propertyDetailsScreen;