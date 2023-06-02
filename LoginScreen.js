import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const LoginScreen= ()=> {
 const[email, setEmail]= useState('');
 const[password,setPaaword]= useState('');
 const[phoneNumber, setPhoneNumber]= useState('');
 const[LginMethod, setLoginMethod]= useState('email');

 const handleLogin=()=> {
  if(LoginMethod==='email') {
   // Perform email login authentication logic
   authenticateWithEmail(email,password);
  } else if(LoginMethod=== 'phone'){
   // Perform phone number login authentication logic
   authenticateWithPhoneNumber(phoneNumber);
  }
 };
 const authenticateWithEmail=(email,password) => {
  // Replace with your/our actual email authentication logic
  if(email && password) {
   console.log('Logging in with email:', email);
   console.log('Password:', password);
   // call your/our authentication service or API here
   // Handle success or error based on the response
  } else {
   console.log('Email and Password fields are required.');
  }
 };
 const authenticateWithPhoneNumber=(phoneNumber)=> {
  // replace with your/our actual phone number authentication logic
  if(phoneNumber) {
   console.log ('logging in with phone number:', phoneNumber);
   // Call your authentication service or error based on the response
   //Handle success or error based on the response
  } else {
   console.log ('phone number field is required.');
  }
 };
 return (
  <View>
   {loginMethod=== 'email' && (
    <>
    <TextInput
    placeholder = "Email"
    value= {email}
    onChangeText= {setEmail}
    />
    <TextInput
    placeholder="password"
    secureTextEntry
    value={password}
    onChangeText= {setPassword}
    />
    </>
 )}
 {loginMethod=== 'phone' && (
  <TextInput
  placeholder= "phone Number"
  value={phoneNumber}
  onChangeText={setPhoneNumber}
  />
 )}
 <Button title= "Login" onPress= {handleLogin}/>
 <Button
 title= "sign in with Email"
 onPress={() => setLoginMethod('email')}
 />
 <Button
 title= "Sign in with Phone Number"
 onPress= {()=>setLoginMethod('phone')}
 />
  </View>
 );
};

export default LoginScreen;