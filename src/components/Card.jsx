import React from "react";
import Avatar from "./image";
import Details from "./details";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar imglink={props.imglink} />
        </div>
        <Details phone={props.tel} email={props.email} />
      </div>
    </div>
  );
}

export default Card;
