import React from "react";

import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.addres}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <button>VER</button>
          <button>EDITAR</button>
          <button>DELETAR</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
