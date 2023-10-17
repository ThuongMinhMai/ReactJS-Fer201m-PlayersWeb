import { useParams } from "react-router-dom";
import { data } from "../shared/ListOfPlayers";
import { useState } from "react";
import { Icon } from "react-materialize";
import ModalCase from "./ModalCase";
export default function Detail() {
  const userName = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const player = data.find((obj) => {
    return obj.id == userName.id;
  });
  let cost = player.cost.toLocaleString();
  return (
    <div className="container">
      <div className="product-card">
        <div className="badge">
          <span className="name">{player.name}</span>
        </div>
        <div className="product-tumb">
          <img src={`../${player.img}`} />
        </div>
        <div className="product-details">
          <a
            onClick={() => setIsOpen(true)}
            className="btn-floating waves-effect waves-light red"
          >
            <Icon>ondemand_video</Icon>
          </a>

          <h4>{player.club}</h4>
          <div className="product-price">Market value: € {cost}</div>
          <p>{player.info}</p>
        </div>
      </div>
	  {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
    </div>
  );
}
