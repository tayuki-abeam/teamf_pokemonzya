  /*  Home.js */
  /*
  import { Link } from "react-router-dom";
  import pokemonzyaImage from './images/poke_logo.png'

  const Libraly = () => {
    return (
      <div>
        <center><div>
          <img src = {pokemonzyaImage} alt = ""/> 
          <h1>あなたが出会ったポケモンたち</h1>
        </div></center>

        <center><div>
          <input></input>
          <button>-検索-</button>
        </div></center>

        <center><div>
          <Link to={`/`}><button>ホームに戻る-</button></Link>
        </div></center>
      </div>
      
    );
  };
  
  export default Libraly;
  */

import "./Library.css";
import {useEffect, useState } from 'react';
import Card from './LibraryParts/Card';
import { getAllPokemon, getPokemon } from './LibraryParts/pokemon.js';
import Navbar from "./LibraryParts/Navbar";
import { Link } from "react-router-dom";



  function Library() {
    //"https://pokeapi.co/api/v2/pokemon"にアクセスするとIDが0～20番の｛名前・アクセスURL｝が返ってくる
    const initialURL = "https://pokeapi.co/api/v2/pokemon";
    const [loading,setLoading] = useState(true);
    const [pokemonData,setPokemonData]=useState([]);

    useEffect(() => {

      const fetchPokemonData =async () => {
        //20体分のポケモンのURLを取得
        let res = await getAllPokemon(initialURL);
        //各ポケモンの詳細データ取得
        loadPokemon(res.results);
        console.log(res);
        //ロードの終了フラグを立てる
        setLoading(false);
      };

      //上記関数を呼び出す
      fetchPokemonData();
    },[]);

    //1匹ずつポケモンの情報にアクセスして、pokemonData[]という配列に情報を入れていく
    const loadPokemon =async(data) =>{
      let _pokemonData = await Promise.all(
        data.map((pokemon)=>{
          //console.log(pokemon);
          let pokemonRecord = getPokemon(pokemon.url);
          return pokemonRecord;
        })
      );
      setPokemonData(_pokemonData);
    };
    //console.log(pokemonData);

    const handleNextPage = () => {
    };
    const handlePrevPage = () => {

    };

    //HTMLで記述
    //pokemonData[]を
    return (
    <>
    <Navbar />
    <div className="App">
      {loading ? (
        <h1>ロード中</h1>
        ):<>

        {/* pokemonData[]＝配列に入っているポケモンカードを1枚ずつ展開している */}
        <div className = "pokemonCardContainer">
          {pokemonData.map((pokemon,i) =>{
          return <Card key ={i} pokemon = {pokemon} />;
          })}
        </div>

        <div className="btn">
          <button onClick={handlePrevPage}>前へ</button>
          <button onClick={handleNextPage}>次へ</button>
          <Link to={`/`}><button>Menuへ</button></Link>
        </div>
        </>}
    </div>;
    </>
    );

    
  }

export default Library;