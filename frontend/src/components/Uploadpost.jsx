import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Uploadpost extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "uploadpost");
    this.state = {
      Category: "cat",
      UserName: localStorage.getItem("UserName")
    };
  }

  postPic = e => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("Title", this.state.Title);
    formData.append("Category", this.state.Category);
    formData.append("Post", this.state.Post);
    formData.append("UserName", this.state.UserName);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios
      .post("http://192.168.100.111:9000/auth/post", formData, config)
      .then(response => {
        if (response.data) {
          this.props.history.push("/timeline", { obj: response.data });
          console.log(response.data, "uploadpot axios");
        } else {
          alert("not upload");
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
    this.setState({ Post: e.target.files[0] });
  };

  render() {
    return (
      <>
        <div className="content_lft">
          <div className="login_sec">
            <h1>Upload New Post</h1>
            <form onSubmit={this.postPic}>
              <ul>
                <li>
                  <span>Title</span>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    name="Title"
                    onChange={this.handleChange}
                    required
                  />
                </li>
                <li>
                  <span>Category</span>

                  <select
                    onChange={this.handleChange}
                    value={this.state.Category}
                    name="Category"
                    required
                  >
                    <option>CATS </option>
                    <option>DOGS </option>
                    <option>RABBIT </option>
                    <option>BIRDS </option>
                    <option>OTHERS </option>
                  </select>
                </li>
                <li>
                  <input
                    type="file"
                    name="Post"
                    onChange={this.handleUploade}
                  />
                </li>
                <li>
                  <input type="submit" defaultValue="Log In" />
                  <Link
                    style={{ padding: "10px", backgroundColor: "#f58c20" }}
                    to="/timeline"
                  >
                    Back
                  </Link>
                </li>
              </ul>
            </form>
            <div className="addtnal_acnt"></div>
          </div>
        </div>
      </>
    );
  }
}
