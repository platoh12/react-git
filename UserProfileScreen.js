import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const UserProfileScreen= ()=> {
 const [fullName, setFullName]= useState ('');
 const [email, setEmail]= useState('');
 const [phoneNumber, setPhoneNumber]= useState('');
 const [address, setAddress]= useState('');
 const [occupation, setOccupation]= useState('');

 const handleSaveProfile= ()=> {
  //Perform validation before saving the user's profile data
  if(!fullName || !email || !phoneNumber || !address || !occupation){
   alert ('please fill in all fields');
   return;
  }
  //Save the user's profile data to the server or performing any neccessary action
  console.log('User profile saved:', {
   fullName,
   phoneNumber,
   adddress,
   occupation,
  });
 };

 return(
  <View style={styles.container}>
   <Text style={styles.sectionTitle}>Personal Information</Text>
   <TextInput
   style={styles.input}
   placeholder= "Full Name"
   value = {fullName}
   onChangeText={setFullName}
   />
   <TextInput
   style={style.input}
   placeholder="Email"
   value={email}
   onChangeText={setEmail}
   keyboardType="email-address"
   />
   <TextInput
   style={styles.input}
   placeholder="setPhoneNumber"
   keyboardType= "phone-pad"
   />
   <TextInput
   style={styles.input}
   placeholder="Address"
   value= {address}
   onChangeText={setAddress}
   />
   <TextInput
   style= {styles.input}
   placeholder= "occupation"
   value= {occupation}
   onChangeText={setOccupation}
   />
   <TouchableOpacity style= {styles.saveButton}  onPress= {handleSaveProfile}>
    <Text style= {styles.saveButtonText}>Save profile</Text>
   </TouchableOpacity>
  </View>
 );
};

const styles= StyleSheet.create({
 container: {
  flex: 1,
  padding: 20,
 },
 sectionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
 },
 input: {
  height:40,
  borderColor: 'gray',
  borderWidth:1,
  marginHorizontal:10,
  paddingHorizontal:10,
 },
 saveButton: {
  backgroundColor: '#007AFF',
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 5,
  alignItems: 'center',
 },
 saveButtonText: {
  color: '#FFFFFF',
  fontSize: 16,
 },
 
});
export default UserProfileScreen