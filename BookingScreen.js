import React, {useState} from 'react';
import {View, Text, TextInput,Button,StyleSheet,Alert} from 'reat-native';

const BookingScreen = ({property}) => {
 const [startDate, setStartDate]= useState('');
 const [endDate, setEndDate]= useState('');
 const [cardNumber, setCardNumber]= useState('');
 const [expiryDate, setExpiryDate]= useState('');
 const [cvv, setCvv]= useState('');
 const handleBooking = ()=> {
  if(!startDate || !endDate || !cardNumber || !expiryDate || !cvv) {
   Alert.alert ('Error', 'p;ease fill in all fields');
   return;
  }

  // perform validation card number, expiry date, and CVV
  if(!validateCardNumber(cardNumber)|| !validateExpiryDate(expiryDate)|| !validateCvv(cvv)){
   Alert.alert('Error', 'Invalid payment nformation');
   return;
  }

  //Perform booking logic and payment processing here
  //we/you can make API calls to book the property and process the payment
  // based on the provided information
  // add your code here

  //Show a success message to the user
  Alert.alert('Success', 'Booking confirmed!');
 };
 const validateCrdNumber= (cardNumber) => {
  //perform validation for card number
  // Add your validation logic here
  return true;
 };

 const validateCvv = (cvv)=> {
  // perform validation for CVV
  // Add your validation logic here
  return true;
 };

 return (
  <View style= {Styles.container}>
   <Text style ={styles.title}>Book property</Text>
   <Text style = {styles.propertyTitle}>{property.title}</Text>
   <View style = {styles.form}>
    <TextInput 
    style = {styles.input}
    placeholder = "Start Date"
    value = {startDate}
    onChangeText = {setStartDate}
    />
    <TextInput 
    style = {styles.input}
    placeholder = "End Date"
    value = {endDate}
    onChangeText = {setEndDate}
    />
    <TextInput
    style= {styles.input}
    placeholder= "Card Number"
    value = {cardNumber}
    onChangeText= {setCardNumber}
    />
    <TextInput
    style= {styles.input}
    placeholder = "Expiry Date (MM/YY)"
    value = {expiryDate}
    onChangeText= {setExpiryDate}
    />
    <TextInput
    style= {styles.input}
    placeholder= "CVV"
    value= {Cvv}
    onChangeText = {setCvv}
    />
    <Button title = "Book Now" onPress= {handleBooking}></Button>
   </View>
  </View>
 );
};

const styles = StyleSheet.create ({
 container: {
  flex: 1,
  padding: 16,
  backgroundColor: '#ffffff',
 },
 title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 16,
 },
 propertyTitle: {
  fontSize: 20,
  marginBottom: 16,
 },
 form: {
  marginBottom: 16,
 },
 input: {
  height: 40,
  borderWidth: 40,
  borderColor: '#cccccc',
  borderRadius: 4,
  marginBottom: 16,
  paddingHorizontal: 12,
 },
});

export default BookingScreen;