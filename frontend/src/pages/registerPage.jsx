import React from "react";
import Leftloginreg from "../components/leftloginreg";
import Register from "../components/Register";

const RegisterPage = props => {
  return (
    <div className="container">
      <div className="content">
        <Leftloginreg />
        <Register {...props} />
      </div>
    </div>
  );
};

export default RegisterPage;
