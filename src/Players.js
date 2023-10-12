import React, { Component, useState } from "react";
import { data } from "./shared/ListOfPlayers";
import { Link } from "react-router-dom";
import { Icon, CardTitle, Row, Col, Card, Container } from "react-materialize";

export default function Player() {
  const [player, setplayer] = useState({});

  return (
    <div className="row">
      {data.map((player) => (
        <div className="col-md-4" key={player.id} >
          <Card>
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={player.img} alt={player.name} />
            </div>
            <div className="card-content">
              <p className="card-title activator grey-text text-darken-4">
                {player.name}
                <i className="material-icons right">more_vert</i>
              </p>
              <p>
                <Link to={`detail/${player.id}`}>Detail</Link>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                {player.name}<Icon className="right">close</Icon>
              </span>
              <p>
                Here is some more information about {player.name} that is only revealed once clicked on.
              </p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
