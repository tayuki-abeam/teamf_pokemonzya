import PropTypes from 'prop-types'
import React, { memo } from 'react'
import "./Card.css";

//1匹分のポケモン情報を受け取り、1匹分のカード情報を返す
const Card = ({pokemon}) => {
    console.log(pokemon)
  return  <div className="Card">
            <div className = "cardImg">
                {/* 画像情報 */}
                <img src ={pokemon.sprites.front_default} alt = ""/>
                
            </div>
            {/* 名前 */}
            <h3 className = "cardName">{pokemon.name}</h3>
            {/* タイプ */}
            <div className = "cardTypes">
                <div>タイプ</div>
                {pokemon.types.map((type)=>{
                    return <div>
                        <span className = "typeName">{type.type.name}</span>
                    </div>;
                })}
            </div>
            <div className ="cardInfo">
                <div className ="cardData">
                    {/* 重さ */}
                   <p className ="title">重さ:{pokemon.weight}</p>
                </div>
                <div className ="cardData">
                    {/* 高さ */}
                   <p className ="title">高さ:{pokemon.height}</p>
                </div>
                <div className ="cardData">
                    {/* アビリティ */}
                   <p className ="title">アビリティ:{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
          </div>;
};



export default Card;
