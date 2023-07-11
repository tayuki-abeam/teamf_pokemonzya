import { Link } from "react-router-dom";
   
   //デザイン
  import '../App.css';
  import './Rule.css';
  import React, {Component} from 'react';
  import Backgroundaudio from './images/audio.wav';
  import Ruleimage from './images/ルール説明.png';
  import Buttonimage5 from './images/ホームボタン.png';

  
  const Rule = () => {
    return(
      <div class="Back">
        <body>
        <center>
          <div class="Images">
          <img src={Ruleimage} alt="ルールイメージ" vspace="5"/>
          </div>
          <Link to={`/`}><button class="Button5"><img src={Buttonimage5} alt="ボタンイメージ5"/></button></Link>
          <audio src={Backgroundaudio} controls></audio>
        </center>
        
        </body>
      </div>
    )
  }

  export default Rule;
