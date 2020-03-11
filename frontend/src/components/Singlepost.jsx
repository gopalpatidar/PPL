import React from "react";
import axios from "axios";

export default class Singlepost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picpath: "/uploads/",
      Postid: this.props.location.state._id,
      UserName: localStorage.getItem("UserName"),
      postArray: [],
      Comments: "",
      likes: props.location.state.likes.length
    };
  }

  resetPost = () => {
    this.setState({ Postid: null });
  };

  addComments = e => {
    if (localStorage.getItem("Email")) {
    } else {
      this.props.history.push("/loginpage");
    }
    e.preventDefault();
    axios
      .post("http://192.168.100.111:9000/auth/comment", this.state)
      .then(response => {
        if (response.data) {
          this.setState({ postArray: response.data, Comments: "" });
          this.resetData();
        } else {
        }
      })
      .catch(err => {
        alert(err);
        console.log(err);
      });
  };

  likePost = e => {
    let users = {
      postId: this.state.Postid,
      userName: this.state.UserName
    };
    axios
      .post("http://192.168.100.111:9000/auth/likepost", users)
      .then(response => {
        if (response.data) {
          console.log("likepost", response.data);
          this.setState({ likes: response.data.like });
        } else {
          alert("false");
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
  resetData = () => {
    document.getElementById("coment").reset();
  };
  componentDidMount = () => {
    if (localStorage.getItem("Email")) {
    axios
      .post("http://192.168.100.111:9000/auth/showcomment", {
        Postid: this.state.Postid
      })
      .then(response => {
        if (response.data) {
          this.setState({ postArray: response.data });
        } else {
        }
      })
      .catch(err => {
        alert(err);
        console.log(err);
      });
    } else {
      this.props.history.push("/loginpage");
    }
  };

  render() {
    return (
      <>
        <div className="content_lft">
          <div className="contnt_2">
            <div className="div_a">
              <div className="div_title">
                User Interface PSD Source files Web Designing for web
              </div>
              <div className="btm_rgt">
                <div className="btm_arc">
                  {this.props.location.state.Category}
                </div>
              </div>
              <div className="div_top">
                <div className="div_top_lft">
                  <img src="/images/img_6.png" alt='img_6'/>
                  {this.props.location.state.UserName}
                </div>
                <div className="div_top_rgt">
                  <span className="span_date">
                    {this.props.location.state.Date}
                  </span>
                  <span className="span_time">11:15am</span>
                </div>
              </div>
              <div className="div_image">
                <img
                  src={this.state.picpath + this.props.location.state.Post}
                  alt="pet"
                />
              </div>
              <div className="div_btm">
                <div className="btm_list">
                  <ul>
                    <li>
                      <a href>
                        <span className="btn_icon">
                          <img src="/images/icon_001.png" alt="share" />
                        </span>
                        Share
                      </a>
                    </li>
                    <li>
                      <a href>
                        <span className="btn_icon">
                          <img src="/images/icon_002.png" alt="share" />
                        </span>
                        Flag
                      </a>
                    </li>
                    <li>
                      <a onClick={this.likePost}>
                        <span className="btn_icon">
                          <img src="/images/icon_003.png" alt="share" />
                        </span>
                        {this.state.likes} Likes
                      </a>
                    </li>
                    <li>
                      <a href>
                        <span className="btn_icon">
                          <img src="/images/icon_004.png" alt="share" />
                        </span>
                        {this.state.postArray.length} Comments
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="contnt_3">
            <ul>
              {this.state.postArray.reverse().map((data, id) => {
                return (
                  <li>
                    <div className="list_image">
                      <div className="image_sec">
                        <img src="/images/post_img.png" alt='post_img'/>
                      </div>
                      <div className="image_name">{data.UserName}</div>
                    </div>
                    <div className="list_info">{data.Comments}</div>
                    <input
                      type="button"
                      defaultValue="Reply"
                      className="orng_btn"
                    />
                  </li>
                );
              })}

              <li>
                <div className="cmnt_div1">
                  <form id="coment" onSubmit={this.addComments}>
                    <input
                      type="text"
                      placeholder="Enter your Comment"
                      name="Comments"
                      className="cmnt_bx1"
                      onChange={this.handleChange}
                      required
                    />
                    <input
                      type="submit"
                      className="sub_bttn1"
                      defaultValue="Submit Comment"
                    />
                  </form>
                </div>
              </li>
            </ul>
            <div className="view_div">
              <a href>View more</a>
            </div>
          </div>

          {/*  */}
        </div>
      </>
    );
  }
}
