import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Stylesheet} from 'react-native';
// Property Listing Component 
const PropertyListing = ({property, onPress}) => {
 const handlePress= () => {
  onPress(property.id);
 };

 return(
  <TouchableOpacity style={Styles.propertyContainer}onPress= {handlePress}>
   <Text style= {Styles.propertyTitle}>{property.title}</Text>
   <Text style= {Styles.propertyLocation}>{property.location}</Text>
   <Text style= {Styles.propertySize}>Size:{property.size}</Text>
   <Text style= {Styles.propertyPrice}>Price: {property.price}</Text>
   <Text style= {Styles.propertyAvailability}>
    Availability: {property.availability}
    </Text>
    {/* Add more property details here*/}

  </TouchableOpacity>
 );
};

//property listing criteria screen
const PropertyListingScreen= ({propertyData, onSelectProperty}) => {
 const handlePropertySelection= (propertyId) => {
  onSelectProperty(propertyId);
 };

 return(
  <ScrollView contentContainerStyle= {styles.container}>
   {propertyData.map ((property) =>(
    <PropertyListing
    key = {property.id}
    proerty = {property}
    onPress = {handePropertySelection}
    />
   ))}
  </ScrollView>
 );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,

  },
  propertyContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  PropertyType: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  PropertyLocation:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  PropertyLocation:{
    fontSize: 16,
    marginBottom:8,
  },
  PropertySize:{
    fontSize:14,
    marginBottom:4,
  },
  PropertyPrice:{
    fontSize:14,
    marginBottom:4,
  },
  PropertyAvailability:{
    fontSize:14,
    marginBottom:4,
  },
});

export default PropertyListingScreen;