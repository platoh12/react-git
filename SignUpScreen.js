import React, {useState} from 'react-native';
import {View, TextInput, Button, StyleSheet,Alert} from 'react-native';

const SignUpScreen = ()=> {
 const [fullName, setFullName]= useState('');
 const [emailOrPhoneNumber, setEmailOrPhoneNumber]=useState('');;
 const [password, setPasssword]= useState('');

 const handleSignUp=()=> {
  if(fullName.trim() === '') {
   Alert.alert('Error', 'pLlease enter your full name');
   return;
  }

  if (emailOrPhoneNumber.trim()=== '') {
   Alert.alert('Error', 'Please enter your email or phone number');
   return;
  }

  if(!isValidEmail(emailOrPhoneNumber)) {
   Alert.alert('Error', 'Please enter a valid email address');
   return;
  }

  if(!ValidPassword(password)) {
   Alert.alert(
    'Error',
    'Passwor must be at least 8 characters long and contain at least one uppercase letter, one lower case later, and one digit'
   );
   return;
  }
  // Perform sign-up logic here, such as calling an API to create a new user account
  console.log('Sign-up initiated:', fullName, emailOrPhoneNumber, password);
  // Add your/our sign-up logic here
 };

 const isValidEmail=email => {
  // Simple email format validation using regular expression
  const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegrex.test(email);
 };

 const isValidPassword= password=> {
  // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit
  const passwordRegrex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegrex.test(password);
 };

 return (
  <View style={Styles.container}>
   <TextInput
   style={styles.input}
   placeholder="Full Name"
   value= {fullName}
   onChangeText= {text => setFullName(text)}
   />
   <TextInput
   style= {styles.input}
   placeholder= "Email or Phone Number"
   value= {emailOrPhoneNumber}
   onChangeText= {text => setEmailOrPhoneNumber(text)}
   ketboardType= "email-address"
   />
   <TextInput
   style= {styles.input}
   placeholder= "Password"
   value= {password}
   onChangeText= {text => setPasssword(text)}
   secureTextEntry
   />
   <Button title= "Sign Up" onPress= {handleSignUp} />
  </View>
 );
};

const styles= StyleSheet.create({
 container: {
  flex: 1,
  padding: 16,
  alignItems: 'center',
  justifyContent: 'center',
 },
 input : {
  width: '100%',
  height: 40,
  borderWidth: 'gray',
  marginBottom: 12,
  paddingHorizontal: 10,
 },
});

export default SignUpScreen;