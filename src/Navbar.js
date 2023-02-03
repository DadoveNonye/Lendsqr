import React from "react";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logoimg" src={props.logo} alt="the logo" />
        <h2>lendsqr</h2>
      </div>
      <div className="search">
        <input placeholder="Search for anything" />
        <img src={props.vector} alt="search icon" />
      </div>
      <div className="nav-others">
        <p>DOCS</p>
        <img src={props.notification} alt="notification sign" />
        <img src={props.userimage} alt="user image" />
        <p>username</p>
      </div>
    </div>
  );
}

export default Navbar;
