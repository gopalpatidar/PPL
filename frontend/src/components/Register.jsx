import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { Image: "" };
  }

  regiform = e => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("FirstName", this.state.FirstName);
    formData.append("LastName", this.state.LastName);
    formData.append("Email", this.state.Email);
    formData.append("Password", this.state.Password);
    formData.append("Username", this.state.Username);
    formData.append("Image", this.state.Image);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios
      .post("http://192.168.100.111:9000/auth/header", formData, config)
      .then(response => {
        if (response.data) {
          this.props.history.push("loginpage");
        } else {
          alert("Already Exit");
          this.props.history.push("loginpage");
        }
      })
      .catch(err => {
        alert(err);
        console.log(err);
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleUploade = e => {
    this.setState({ Image: e.target.files[0] });
  };

  componentDidMount = e => {
    if (localStorage.getItem("Email")) {
      this.props.history.push("/timeline");
    }
  };
  render() {
    return (
      <div className="content_rgt">
        <div className="register_sec">
          <h1>Create An Account</h1>
          <form id="fromre" onSubmit={this.regiform}>
            <ul>
              <li>
                <span>Username</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  name="Username"
                  onChange={this.handleChange}
                  required
                />
              </li>
              <li>
                <span>Password</span>
                <input
                  type="password"
                  maxlength="8"
                  minLength="5"
                  name="Password"
                  onChange={this.handleChange}
                  placeholder="Enter your password"
                  required
                />
              </li>
              <li>
                <span>Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="Email"
                  onChange={this.handleChange}
                  required
                />
              </li>
              <li>
                <span>First Name</span>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  onChange={this.handleChange}
                  name="FirstName"
                  required
                />
              </li>
              <li>
                <span>Last Name</span>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  onChange={this.handleChange}
                  name="LastName"
                  required
                />
              </li>
              <li>
                <span>Upload Picture</span>
                <input
                  type="file"
                  onChange={this.handleUploade}
                  name="Image"
                  required
                />
              </li>
              <li>
                <input type="checkbox" onChange={this.handleChange} required />I
                agree to Term &amp; Conditions
              </li>
              <li>
                <input type="submit" value="submit" />
              </li>
            </ul>
          </form>
          <div className="addtnal_acnt">
            I already have an account.
            <Link to="loginpage">Login My Account !</Link>
          </div>
        </div>
      </div>
    );
  }
}
