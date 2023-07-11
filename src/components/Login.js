
/*
import logo from './images/logo.svg';
import '../App.css';
import axios from "axios";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
  Menu,
} from "@aws-amplify/ui-react";
import React, { useEffect, useState } from 'react'
import {Amplify, API, Auth, Hub } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'ap-northeast-1_qrcJMUTdN',
    userPoolWebClientId: 'nfv9aek2nittvirdff403ahtq',
    identityPoolId: 'ap-northeast-1:537418d8-ca1e-4718-9b32-fd6f73a36e37',
    oauth: {
      domain: 'https://pokemonzya.auth.ap-northeast-1.amazoncognito.com',
      scope: ['openid'],
      redirectSignIn: 'https://localhost:3000/',
      redirectSignOut: 'https://localhost:3000/',
      responseType: 'code'
    }
  }
})

function Login({ signOut, user }) {  

  //
  axios
  .get(' https://u3y3rezg17.execute-api.ap-northeast-1.amazonaws.com/Test')
  .then((response) => {
      console.log(response);
  })
  .catch((error) => {
      console.log(error);
  });
  

  
  <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  

  
  return (

    <View className="">
      <Card>
    
      </Card>
       <Button onClick={signOut}>Sign Out</Button> 
    </View>
  );
  
}

export default withAuthenticator(Login, {
  signUpAttributes: ['email'],
})
*/