import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';


const  SearchScreen = () => {
 const [Location, setLocation] = useState ('');
 const [priceRange, setPriceRange] = useState ('');
 const [bedroooms, setBedrooms] = useState('');
 const [bathrooms, setBathrooms] = useState('');
 const [propertyType, setPropertyType]= useState('');
 const [isFurnished, setIsFurnished] = useState(false);


 const handleSearch = () => {
  // Perform API filters or calls based on the selected criteria
  //Customize it according to your project's requirements

  if(validateIput()) {
   //perform the search action 

   const filters = {
    location,
    priceRange,
    bedrooms,
    bathrooms,
    propertyType,
    isFurnished,
   };

   // call your API or perform filtering based on the selected criteria
   console.log('Filters:', filters);
   //Add your API call or filtering logic here
  }
 };

 const validateInput = () => {
  // perform validation here based on your projects requirements
  // Return false if any validation errors occurs

  if(! location.trim()) {
   alert ('please enter a location');
   return false;
  }

  if(!priceRange.trim()) {
   alert ('please enter a price range');
   return false;
  }

  //Add more validation checks for other criteria if needed 
  return true;
 };


 retun (
  <View style = {Styles.container}>
   <Text style = {styles.title}>Search for property</Text>
   <TextInput
   style = {styles.input}
   placeholder = "Location"
   value = {Location}
   onChangeText = {setLocation}
   />
   <TextInput
   style = {styles.input}
   placeholder = "price Range"
   value = {priceRange}
   onChangeText = {setPriceRange}
   />
   <TextInput
   style = {styles.input}
   placeholder = "Number of Bedrooms"
   value = {bedrooms}
   onChangeText = {setBedrooms}
   />
   <TextInput
   style = {styles.input}
   placeholder = "property Type"
   value = {propertyType}
   onChangeText = {setPropertyType}
   />
   <View style = {styles.checkboxContainer}>
    <Text style= {styles.checkboxlabel}>isFurnished</Text>
    <View style = {styles.checkbox}>
     <Buttton
     title = {isFurnished? 'Yes': 'No'}
     onPress={() => setIsFurnished(!isFurnished)}
     />
    </View>
   </View>
   <Button title = "search" onPress= {handleSearch} />

  </View>
 );

};

const styles = StyleSheet. create({
 container: {
  flex : 1,
  padding : 16,
  backgroundColor : '#ffffff',
 },
 title : {
  fontSize : 18,
  fontWeight : 'bold',
  marginBottom : 16,
 },
 input : {
  height : 40,
  borderColor : 'gray',
  borderWidth : 1,
  marginBottom : 16,
  padddingHorizontal : 8,
 },
checkboxContainer : {
 flexDirection : 'row',
 allignItems : 'center',
 marginBottom: 'center',
},
checkboxlabel : {
 marginRight : 8,
},
checkbox : {
 borderWidth : 1,
 borderRadius: 5,
 paddingHorizontal: 8,
},


})

export default  SearchScreen;



