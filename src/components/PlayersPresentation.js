import React from "react";
import { useState } from "react";
import Player from "../Players";
export default function PlayersPresentation({ players }) {
    const [player, setplayer] = useState([])
    //console.log(players);
    return (
        <div className="container">
            {players.map((player)=>(
                <div className="column">
                    <div className="card">
                        <img src={player.img} alt=""/>
                        <h3>{player.name}</h3>
                        <p className="title">{player.club}</p>
                        <p><button onClick={()=>setplayer(player)}><a href="#popup1" id="openPopUp">Detail</a></button></p>
                    </div>
                </div>
            ))}
            <div id="popup1" className="overlay">
                <div className="popup">
                    <img src={player.img}/>
                    <h2>{player.name}</h2>
                    <a className="close" href="#">&times;</a>
                    <div className="content">
                        {player.info}
                    </div>
                </div>

            </div>
        </div>
    )
}