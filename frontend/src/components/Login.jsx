import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
  }

  loginForm = e => {
    e.preventDefault();
    axios
      .post("http://192.168.100.111:9000/auth/login", this.state)
      .then(response => {
        if (response.data) {
          localStorage.setItem(
            "UserName",
            response.data[0].FirstName + " " + response.data[0].LastName
          );
          localStorage.setItem("picture", response.data[0].Image);
          localStorage.setItem("FirstName", response.data[0].FirstName);
          localStorage.setItem("LastName", response.data[0].LastName);
          localStorage.setItem("Email", this.state.Email);
          this.props.history.push("timeline", { obj: response.data });
        } else {
          alert("Insert Valid User Id and Password");
          this.setState({ color: "red" });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, color: "" });
  };
  componentDidMount = e => {
    if (localStorage.getItem("Email")) {
      this.props.history.push('/timeline');
    }
  };
  render() {
    return (
      <div className="content_rgt">
        <div className="login_sec">
          <h1>Log In</h1>
          <form onSubmit={this.loginForm}>
            <ul>
              <li>
                <span>Email-ID</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="Email"
                  style={{ backgroundColor: this.state.color }}
                  onChange={this.handleChange}
                  required
                />
              </li>
              <li>
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="Password"
                  style={{ backgroundColor: this.state.color }}
                  onChange={this.handleChange}
                  required
                />
              </li>
              <li>
                <input type="checkbox" />
                Remember Me
              </li>
              <li>
                <input type="submit" defaultValue="Log In" />
                <Link to="/forgotpage">Forgot Password</Link>
              </li>
            </ul>
          </form>
          <div className="addtnal_acnt">
            I do not have any account yet.
            <Link to="/">Create My Account Now !</Link>
          </div>
        </div>
      </div>
    );
  }
}
