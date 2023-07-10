
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
*/

//----------login処理追加部分----------
import { Amplify } from 'aws-amplify';
import config from './components/aws-exports.js';
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

Amplify.configure(config);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
