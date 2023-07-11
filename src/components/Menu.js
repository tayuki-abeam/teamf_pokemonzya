import './Menu.css';
import Titleimage from './images/pokemonzya.png';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

//デザイン
import Menuimage from './images/メニュー最終.png';
import Buttonimage1 from './images/プレイボタン.png';
import Buttonimage2 from './images/図鑑ボタン最終.png';
import Buttonimage3 from './images/ルールボタン最終.png';
import Buttonimage4 from './images/制作ボタンm.png';
import Backgroundaudio from './images/audio.wav';

//class Menu extends Component{
const Menu = () => {

  return(
  <div class="Back">
    <body>
    <center>
    <div>
      <div class="Images">
      <img src={Titleimage} alt="タイトルイメージ" vspace="10"/><br/>
      <img src={Menuimage} alt="メニューイメージ" vspace="20"/><br/>
      <Link to={`/GamePlay/`}><button class="Button"><img src={Buttonimage1} alt="ボタンイメージ1"/></button></Link>
      <Link to={`/Library/`}><button class="Button"><img src={Buttonimage2} alt="ボタンイメージ2"/></button></Link><br/>
      <Link to={`/Rule/`}><button class="Button"><img src={Buttonimage3} alt="ボタンイメージ3"/></button></Link>
      <Link to={`/`}><button class="Button"><img src={Buttonimage4} alt="ボタンイメージ4"/></button></Link>
      </div>
    <audio src={Backgroundaudio} controls></audio>
    </div>
    </center>
    </body>
  </div>
  )
  
}

export default Menu;
