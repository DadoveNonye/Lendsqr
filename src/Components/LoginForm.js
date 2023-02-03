import React from "react";

function LoginForm() {
  return (
    <div className="loginform">
      <div className="logincontent">
        <h1>Welcome!</h1>
        <h3 className="details">Enter details to login</h3>
        <input placeholder="Email" alt="User Email for login" />
        <input placeholder="Password" alt="User password" />
        <h3 className="forgetpassword">FORGET PASSWORD?</h3>
        <button>LOG IN</button>
      </div>
    </div>
  );
}

export default LoginForm;
