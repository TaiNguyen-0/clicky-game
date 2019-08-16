import React from "react";
import "./style.css";

// This just displays the card and gives the onClick trigger

function Cards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.randomCard(props.id)}/>
      </div>
    
      {/* <span className="remove" onClick={() => props.randomCard(props.id)}>𝘅</span> */}
    </div>
  );
}

export default Cards;
