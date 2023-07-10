import logo from './logo.svg';
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



function App({ signOut }) {    
  axios
  .get(' https://u3y3rezg17.execute-api.ap-northeast-1.amazonaws.com/Test')
  .then((response) => {
      console.log(response);
  })
  .catch((error) => {
      console.log(error);
  });

  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );


  
}

export default withAuthenticator(App);
;