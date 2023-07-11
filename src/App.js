/* App.js */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import GamePlay from "./components/GamePlay";
import Library from "./components/Library";
import Rule from "./components/Rule";

//Login
import './App.css';
import axios from "axios";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import React, { useEffect, useState } from 'react';
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

const App = (signOut) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Menu />} />
        <Route path={`/GamePlay`} element={<GamePlay />} />
        <Route path={`/Library`} element={<Library />} />
        <Route path={`/Rule`} element={<Rule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default withAuthenticator(App);
