import React from "react";

function User(props) {
  return (
    <div className="userDiv">
      <div className="img">
        <img src={props.icon} />
      </div>
      <h4>{props.name}</h4>
      <h3>{props.number}</h3>
    </div>
  );
}

export default User;
