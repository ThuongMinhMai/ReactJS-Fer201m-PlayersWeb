import React, { Component, useState } from "react";
import { data } from './shared/ListOfPlayers';
import { Link } from 'react-router-dom'
export default function Player() {
    const [player, setplayer] = useState({});
    return (
      <div className="container">
            {data.map((player)=>(
                <div className="column">
                    <div className="card">
                        <img src={player.img} alt=""/>
                        <h3>{player.name}</h3>
                        <p className="title">{player.club}</p>
                        <Link to={`detail/${player.id}`}> 
                        <p><button onClick={()=>setplayer(player)}><a href="#popup1" id="openPopUp">Detail</a></button></p>
                        </Link>
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
      // <div className="container-fluid">
      //   <div className="row">
      //     <div className="col-sm-4">
      //       <div className="card">
      //         <img src="assets/cr.jpg" alt=""/>
      //         <h3>Cristiano Ronaldo</h3>
      //         <p className="title">Manchester United</p>
      //         <p>
      //           <button>Detail</button>
      //         </p>
      //       </div>
      //     </div>
      //     <div className="col-sm-4">
      //       <div className="card">
      //         <img src="assets/kante.jpg" alt="" />
      //         <h3>Kante</h3>
      //         <p className="title">Chelsea</p>
      //         <p>
      //           <button>Detail</button>
      //         </p>
      //       </div>
      //     </div>

      //     <div className="col-sm-4">
      //       <div className="card">
      //         <img src="assets/messi.jpg" alt=""/>
      //         <h3>Messi</h3>
      //         <p className="title">PSG</p>
      //         <p>
      //           <button>Detail</button>
      //         </p>
      //       </div>
      //     </div>
      //     <div className="col-sm-4">
      //       <div className="card">
      //         <img src="assets/neymar.jpg" alt=""/>
      //         <h3>Neymar</h3>
      //         <p className="title">PSG</p>
      //         <p>
      //           <button>Detail</button>
      //         </p>
      //       </div>
      //     </div>
      //     <div className="col-sm-4">
      //       <div className="card">
      //         <img src="assets/kane.jpg" />
      //         <h3>Kane</h3>
      //         <p className="title">Tottemham</p>
      //         <p>
      //           <button>Detail</button>
      //         </p>
      //       </div>
      //     </div>
      //     <div className="col-sm-4">
      //       <div className="card">
      //         <img src="assets/haaland.jpg" alt="" />
      //         <h3>Haaland</h3>
      //         <p className="title">Manchester City</p>
      //         <p>
      //           <button>Detail</button>
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
  }
