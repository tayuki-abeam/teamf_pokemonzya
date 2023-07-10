import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
