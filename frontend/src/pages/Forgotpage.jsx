import React from "react";
import Leftloginreg from "../components/leftloginreg";
import Forgot from "../components/Forgot";

export default class Forgotpage extends React.Component {
  constructor(props) {
    super(props);
    console.log("Forgotpage", props);
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <Leftloginreg />
          <Forgot {...this.props} />
        </div>
      </div>
    );
  }
}
