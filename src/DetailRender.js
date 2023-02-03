import React from "react";
import dotted from "./Icons/dotted.png";

function DetailRender(props) {
  return (
    <div className="Renderdetails">
      <p>{props.org}</p>

      <p>{props.username}</p>
      <p>{props.email}</p>
      <p>
        {props.phone}{" "}
        <span>
          <img src={dotted} />
        </span>
      </p>
      <hr></hr>
    </div>
  );
}

export default DetailRender;
