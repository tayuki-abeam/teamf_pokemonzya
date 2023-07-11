  import { Link } from "react-router-dom";
  import pokemonzyaImage from './images/poke_logo.png'
  import pokeDemoImage from './images/pokeDemo.jpg'
  import React, { useEffect, useState } from 'react';

  //データ受け渡し
  import { useContext } from 'react';
  import { UserName } from '../App';

  //デザイン
  import '../App.css';
  import './GamePlay.css';
  import Backgroundaudio from './images/audio.wav';
  import Buttonimage5 from './images/ホームボタン.png';
  import Gamecount from './images/ゲームカウント.png';

  import Player01_0 from './images/P1 0PT.png';
  import Player01_1 from './images/P1 1PT.png';
  import Player01_2 from './images/P1 2PT.png';
  import Player01_3 from './images/P1 3PT.png';
  import Player01_4 from './images/P1 4PT.png';
  import Player01_5 from './images/P1 5PT.png';

  import Player02_0 from './images/P2 0PT.png';
  import Player02_1 from './images/P2 1PT.png';
  import Player02_2 from './images/P2 2PT.png';
  import Player02_3 from './images/P2 3PT.png';
  import Player02_4 from './images/P2 4PT.png';
  import Player02_5 from './images/P2 5PT.png';

  import Player03_0 from './images/P3 0PT.png';
  import Player03_1 from './images/P3 1PT.png';
  import Player03_2 from './images/P3 2PT.png';
  import Player03_3 from './images/P3 3PT.png';
  import Player03_4 from './images/P3 4PT.png';
  import Player03_5 from './images/P3 5PT.png';

  import Player04_0 from './images/P4 0PT.png';
  import Player04_1 from './images/P4 1PT.png';
  import Player04_2 from './images/P4 2PT.png';
  import Player04_3 from './images/P4 3PT.png';
  import Player04_4 from './images/P4 4PT.png';
  import Player04_5 from './images/P4 5PT.png';

  import Next from './images/次へボタン.png';
  import Answer from './images/答えボタン.png';
  import Text from './images/Text.png';
  import Flame from './images/Flame.png';

  //-----内部管理変数-----
  //ゲーム進行に必要なデータ
  let poke_differentname_array = {} //シャッフルした名前のペア情報
  let poke_number_array = {}  //ポケモンの出現順番
  let maxGameCount = 0  //ゲームカウント
  //point関連
  const maxPlayerPoint = 5;  //プレイヤーの得点条件
  const player01_imageDic = {0:Player01_0, 1:Player01_1, 2:Player01_2, 3:Player01_3, 4:Player01_4, 5:Player01_5}
  const player02_imageDic = {0:Player02_0, 1:Player02_1, 2:Player02_2, 3:Player02_3, 4:Player02_4, 5:Player02_5}
  const player03_imageDic = {0:Player03_0, 1:Player03_1, 2:Player03_2, 3:Player03_3, 4:Player03_4, 5:Player03_5}
  const player04_imageDic = {0:Player04_0, 1:Player04_1, 2:Player04_2, 3:Player04_3, 4:Player04_4, 5:Player04_5}

  //現状の一時保存用データ
  let poke_previous_array = {}  //既出ポケモン一覧辞書
  let DB_count = 0
  let poke_previous_array_DB = {} //DBに登録するためのポケモン辞書
  let nextGameInfo = {}
  let gameCount_IN = 0
  //let currentPokeImage = "ここに画像のURL"
  let currentPokeImageID = -1;
  let currentPokeName = "currentPokeName"

  //Playerのポイント
  let player01_IN = 0;
  let player02_IN = 0;
  let player03_IN = 0;
  let player04_IN = 0;
  
  //ゲーム画面メイン処理
  const GamePlay = () => {
    console.log("-----GamePlay_Main-----")
    
    //ユーザ情報の取得
    const userName_IN = useContext(UserName);
    console.log("username is " + userName_IN)

    //-----変数（画面表示する情報）-----
    //文字型_Message_メイン
    const [msgName, setMsg] = useState("NEXTでスタート") 
    //文字型_Message_解答
    const [msgAns, setMsg_Ans] = useState("頑張ってね！")
    //数字型_ゲームのターン数
    const [gameCount, setGameCount] = useState(0) 
    //数字型_ポケモンの画像
    const [pokeImage,setPokeImage] = useState(pokeDemoImage) 
    //Playerのポイント(画像にするかも)
    const [player01,setPlayer01] = useState(Player01_0)
    const [player02,setPlayer02] = useState(Player02_0)
    const [player03,setPlayer03] = useState(Player03_0)
    const [player04,setPlayer04] = useState(Player04_0)

    //-----変数（Demo用）-----
    //デバックで内部の動作を確認するための値
    const [pokeImageID, setPokeImageID] = useState(-1)  //ポケモンの画像ID

    //NEXTボタンが押されたときの処理（ゲームカウントで分岐）
    const nextFunc = () => {
      //ゲームカウントによって処理が分岐
      console.log("----------NEXT----------")
      console.log("gameCount was " + gameCount_IN)
      if(gameCount_IN <= 0){
        gameStart()
        gamePlay()
      }else if(0 < gameCount_IN && gameCount_IN < maxGameCount){
        console.log("gameConut 0 < maxGameCont")
        gamePlay()
      }else{
        gameEnd()
      }
      console.log("gameCount is " + gameCount_IN)
    } 
    
    //Playerの点数管理
    
    const pointManager01 = () => {
      if(player01_IN < 5){
        player01_IN++
        setPlayer01(player01_imageDic[player01_IN])
      }  
    }
        
    const pointManager02 = () => {
      if(player02_IN < 5){
        player02_IN++
        setPlayer02(player02_imageDic[player02_IN])  
      }
    }
        
    const pointManager03 = () => {
      if(player03_IN < 5){
        player03_IN++
        setPlayer03(player03_imageDic[player03_IN])
      }
    }
        
    const pointManager04 = () => {
      if(player04_IN < 5){
        player04_IN++
        setPlayer04(player04_imageDic[player04_IN])
      }
    }

    //ゲーム開始時に各変数を初期化
    const gameStart = () => {
      console.log("--gameStart--")
      console.log("playUser is " + userName_IN)
      //-----内部変数の準備-----
      const pokeGameDic = getGameInfoDic()
      poke_differentname_array = pokeGameDic["poke_differentname_array"];
      poke_number_array = pokeGameDic["poke_number_array"];
      maxGameCount = Object.keys(pokeGameDic.poke_number_array).length; //ゲームの最大ターン数
      console.log("maxGameCount is " + maxGameCount)
      //-----表示変数の準備-----
      //メインメッセージを初期化
      setMsg("NEXTでゲームスタート!")
      //解答メッセージを初期化
      setMsg_Ans("※ここに解答が出るよ")
      //ポケモンの画像を初期化
      setPokeImage(pokeDemoImage)
      //ポケモン画像を初期化
      DB_count = 0
      poke_previous_array_DB = {"user":userName_IN}
      poke_previous_array = {}
      //カウントを初期化
      gameCount_IN = 0
      setGameCount(gameCount_IN)
      //-----getInfo-----
    }
    //ゲーム中のメッセージ・画像を管理・更新
    const gamePlay = () => {

      console.log("--gamePlay--")
      //次のポケモン情報を取得
      //nextGameInfo = getNextPokeInfo(gameCount_IN)
      nextGameInfo = getNextPokeIDInfo(gameCount_IN)
      //最新のポケモン情報を更新_Demo
      currentPokeImageID = nextGameInfo["nameID"]

      //初回のポケモンと既出のポケモンで分岐
      if(isFirstPoke(gameCount_IN)){
        console.log("--gameStart_first--")
        //メインメッセージ
        setMsg("名前は「" + nextGameInfo["nameID"] + "」")
        //解答メッセージ
        setMsg_Ans("初めてのポケモンだね！！")
        //ポケモンの画像
        //setPokeImage(pokeDemoImage)
        setPokeImageID(nextGameInfo["imageID"])
        //カウント更新
        gameCount_IN++
        setGameCount(gameCount_IN)
      }else{
        console.log("--gamePlay_previus--")
        //メインメッセージを初期化
        setMsg("このポケモンの名前は：XXX")
        //解答メッセージを初期化
        setMsg_Ans("見たことあるポケモンだぞ…？")
        //ポケモンの画像
        //setPokeImage(pokeDemoImage)
        setPokeImageID(nextGameInfo["imageID"])
        //カウントを初期化
        gameCount_IN++
        setGameCount(gameCount_IN)
      }
    }
    //ゲーム終了時に情報を初期化し、出会ったポケモンをデータベースに登録する
    const gameEnd = () => {
      console.log("--gameEnd--")
      //メインメッセージ
      setMsg("遊んでくれてありがとう!")
      //解答メッセージを初期化
      setMsg_Ans("また会おうね！")
      //ポケモンの画像を初期化
      setPokeImage(pokeDemoImage)
    }
    //解答
    const setAnser = () => {
      console.log("--setAnser--")
      setMsg_Ans("正解は…" + currentPokeImageID)
    }
    //Homeへ戻る
    const toMenu = () => {
      gameCount_IN = 0

      //PlayerPointを初期化
      player01_IN = 0;
      player02_IN = 0;
      player03_IN = 0;
      player04_IN = 0;
      setPlayer01(player01_imageDic[player01_IN])
      setPlayer02(player02_imageDic[player02_IN])
      setPlayer03(player03_imageDic[player03_IN])
      setPlayer04(player04_imageDic[player04_IN])

      //出会ったポケモンをDBに登録
      console.log("--registDB--")
      console.log(poke_previous_array_DB)
      /////Lambda接続/////
      /////Lambda接続/////
      //配列の初期化
      poke_previous_array_DB = {"user":userName_IN}

      gameEnd()
    }

    //ここからHTML
    /*
    return (
      <div>
        <center><div>
          <img src = {pokemonzyaImage} alt = ""/> 

          <div>{msgName}</div>
          <div>{msgAns}</div>
          <div>「ゲームカウント」＝{gameCount}</div>
          <div>「画像情報」＝{pokeImageID}</div>

          <div><button onClick={nextFunc}>NEXT</button></div>
          <div><button onClick={setAnser}>ANSWER</button></div>
        </div></center>
        <center><div>
          <button>-PLYAER-</button>
          <button>-PLAYER-</button>
          <button>-PLAYER-</button>
          <button>-PLAYER-</button>
        </div></center>
        <center><div>
          <Link to={`/`}><button onClick={toMenu}>-ゲームを中断してホームに戻る-</button></Link>
        </div></center>
      </div>
      
    );
    */
    return(
    <div class="Back">
    <body>
    <center>
        <div>
        <img class="Count" src={Gamecount} alt="ゲームカウント" vspace="10"/><br/>

        {/* ゲームカウント */}
          <div class="Countposition">{gameCount}</div>

        <img class="Text" src={Text} alt="テキスト背景"/><br/>
        <div class="Messageposition">
          <div>{msgName}</div>
          <div>{msgAns}</div>
        </div>
        <img class="Flame" src={Flame} alt="フレーム画像" vspace="10"/><br/>

        {/*'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'*/}
        {/* <div>「画像情報」＝{pokeImageID}</div> */}
        <img class="Pokemon" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}/><br/>
        <button class="Button" id="Next" onClick={nextFunc}><img src={Next}/></button><br/>
        <button class="Button" id="Answer" onClick={setAnser}><img src={Answer}/></button>
        </div>
    </center>
                <button class="Button" id="Player1"onClick={pointManager01}><img src={player01} alt="プレイヤー1"/></button>
                <button class="Button" id="Player4"onClick={pointManager04}><img src={player04} alt="プレイヤー4"/></button><br/>
                <button class="Button" id="Player2"onClick={pointManager02}><img src={player02} alt="プレイヤー2"/></button>
                <button class="Button" id="Player3"onClick={pointManager03}><img src={player03} alt="プレイヤー3"/></button><br/>
                <Link to={`/`}>
                  <button class="Button"id="Position1"><img src={Buttonimage5} alt="ボタンイメージ5"onClick={toMenu}/></button>
                </Link>
    <audio id="Position2" src={Backgroundaudio} controls></audio>
    </body>
  </div>
    )
  };
  
  export default GamePlay;

  //Lambda_ゲームに必要な配列を受け取り、辞書型で返す
  const getGameInfoDic = () =>{
    ///////////////////////////APIに接続////////////////////////////////
    const gameInfoDic = {poke_differentname_array:{11: 91, 18: 44, 44: 11, 58: 58, 64: 124, 69: 116, 75: 64, 91: 75, 116: 69, 124: 18},
      poke_number_array:{0: 58, 1: 91, 2: 75, 3: 58, 4: 11, 5: 18, 6: 124, 7: 64, 8: 58, 9: 44, 10: 91, 11: 124, 12: 124, 13: 69, 14: 44, 15: 116, 16: 18, 17: 64, 18: 11, 19: 11, 20: 116, 21: 75, 22: 69, 23: 91, 24: 44, 25: 75, 26: 18, 27: 64, 28: 116, 29: 69}};
    ///////////////////////////APIに接続////////////////////////////////
    return gameInfoDic
  }

  //Lambda_ターン数を受けとり次のポケモンの「画像」と「名前」を辞書型で返す
  const getNextPokeInfo = (gameCount) =>{
    let pokeInfoDic = getNextPokeIDInfo(gameCount,poke_number_array,poke_differentname_array)
    ///////////////////////////APIにpokeInfoDicを送信////////////////////////////////
    pokeInfoDic = {'nextImage':'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', 'nextName': 'ヒトカゲ'}
    ///////////////////////////APIからpokeInfoDicを受信////////////////////////////////
    return pokeInfoDic
  }


  //gamecount情報から、次のターンの｛ポケモンの画像のID：ポケモンの名前のID｝を返す
  function getNextPokeIDInfo(gameCount){
    let pokeImageNum = poke_number_array[gameCount];
    let pokeNameNum = poke_differentname_array[pokeImageNum]
    let nextPokeDic = {"imageID":pokeImageNum, "nameID":pokeNameNum};
    return nextPokeDic;
}

  //ポケモンの出現が初めてかどうかを判定する
  //1回目の時はtrueを、2回目以降はfalseを返す
  const isFirstPoke = (gameCount) => {
    //現在のターンに表示されているポケモンのIDを取得
    const currentPokeID = poke_number_array[gameCount]
    //既出のポケモンか確認
    if(currentPokeID in poke_previous_array){
      //既出の場合
      return false
    }else{
      //初回の場合
      poke_previous_array[currentPokeID] = "ok"
      poke_previous_array_DB[DB_count] = currentPokeID
      DB_count++
      return true
    }
  }

//プレイヤーの得点が変動
function playerPointPlus(player){
  console.log("--playerPointPlus--")
  if(player == 1){
    player01_IN++
  }else if(player == 2){
    player02_IN++
  }else if(player == 3){
    player03_IN++
  }else if(player == 4){
    player04_IN++
  }else{
    console.log("playerPointError")
  }

}
function playerPointMinu(player){
  console.log("--playerPointMinu--")
  if(player == 1){
    player01_IN--
  }else if(player == 2){
    player02_IN--
  }else if(player == 3){
    player03_IN--
  }else if(player == 4){
    player04_IN--
  }else{
    console.log("playerPointError")
  }
}

  