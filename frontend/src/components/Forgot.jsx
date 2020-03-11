import React from "react";

export default class Forgot extends React.Component {
  render() {
    return (
      <>
        <div className="content_rgt">
          <div className="register_sec">
            <h1>Forgot Password</h1>
            <ul>
              <li>
                <span>Enter E-mail ID</span>
                <input type="text" placeholder="User@gmail.com" />
              </li>
              <li>
                <input type="submit" defaultValue="Submit" />
              </li>
            </ul>
          </div>
        </div>
       
      </>
    );
  }
}
