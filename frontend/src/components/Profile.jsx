import React from "react";
import axios from "axios";
import { Link} from "react-router-dom";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picSrc: "/uploads/" + localStorage.getItem("picture"),
      FirstName: localStorage.getItem("FirstName"),
      LastName: localStorage.getItem("LastName"),
      postArray: [],
      picpath: "/uploads/",
      UserName: ""
    };
  }

  componentDidMount = () => {
    window.scrollTo(0,0);
    if (localStorage.getItem("Email")) {
      axios
        .post("http://192.168.100.111:9000/auth/showpost")
        .then(response => {
          if (response.data) {
            this.setState({ postArray: response.data });
          } else {
            alert("Please Post");
          }
        })
        .catch(err => {
          alert(err);
          console.log(err);
        });
    } else {
      this.props.history.push("/");
    }
  };

  myUploads = e => {
    // console.log(props.Categories1)
  };

  latestFirst = e => {
    this.state.postArray.sort(function(a, b) {
      return new Date(a.Date) - new Date(b.Date);
    });
    this.setState({ postArray: this.state.postArray });
  };

  oldestFirst = e => {
    this.state.postArray.sort(function(a, b) {
      return new Date(b.Date) - new Date(a.Date);
    });
    this.setState({ postArray: this.state.postArray });
  };

  mostLikes = () => {
    this.state.postArray.sort(function(a, b) {
      return new Date(a.likes.length) - new Date(b.likes.length);
    });
    this.setState({ postArray: this.state.postArray });
  };

  render() {
    var temp = 0;
    return (
      <>
        <div className="content_lft">
          {localStorage.getItem("profile") ? (
            <div className="contnt_1">
              <div className="list_1">
                <ul>
                  <li>
                    <input type="checkbox" className="chk_bx" />
                    Friends
                  </li>
                  <li>
                    <input type="checkbox" className="chk_bx" />
                    Flaged
                  </li>
                </ul>
              </div>
              <div className="timeline_div">
                <div className="timeline_div1">
                  <div className="profile_pic">
                    <img src={this.state.picSrc} alt='up'/>
                    <div className="profile_text">
                      <a href>Change Profile Pic</a>
                    </div>
                  </div>
                  <div className="profile_info">
                    <div className="edit_div">
                      <a href>
                        Edit <img src="/images/timeline_img.png" alt='altp'/>
                      </a>
                    </div>
                    <div className="profile_form">
                      <ul>
                        <li>
                          <div className="div_name1">FirstName :</div>
                          <div className="div_name2">
                            {this.state.FirstName}
                          </div>
                        </li>
                        <li>
                          <div className="div_name1">LastName :</div>
                          <div className="div_name2">{this.state.LastName}</div>
                        </li>
                        <li>
                          <div className="div_name1">Description :</div>
                          <div className="div_name3">
                            This is an example of a comment. You can create as
                            many comments like this one or sub comments as you
                            like and manage all of your content inside Account.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="timeline_div2">
                  <ul>
                    <li>
                      <a href className="active">
                        Timeline{" "}
                      </a>
                    </li>
                    <li>
                      <a href>About </a>
                    </li>
                    <li>
                      <a href>Album</a>
                    </li>
                    <li>
                      <a href> Pets</a>
                    </li>
                    <li>
                      <a href onClick={this.myUploads}>
                        My Uploads{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="contnt_1">
              <div className="list_1">
                <ul>
                  <li>
                    <input type="checkbox" className="chk_bx" />
                    Friends
                  </li>
                  <li>
                    <input type="checkbox" className="chk_bx" />
                    Flaged
                  </li>
                </ul>
              </div>
              <div className="post_div">
                <div className="post_list">
                  <ul>
                    <li>
                      <a href onClick={this.latestFirst}>
                        <span className="list_img">
                          <img src="images/img_1.png" alt='img_1'/>
                        </span>
                        Latest First
                      </a>
                    </li>
                    <li>
                      <a href onClick={this.oldestFirst}>
                        <span className="list_img">
                          <img src="images/img_2.png" alt='img_2'/>
                        </span>
                        Oldest First
                      </a>
                    </li>
                    <li>
                      <a href onClick={this.mostLikes}>
                        <span className="list_img">
                          <img src="images/img_4.png" alt='img_4'/>
                        </span>
                        Most Likes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {this.state.postArray.reverse().map((data, id) => {
            if (
              this.props.Categories1.toLowerCase() ===
                data.Category.toLowerCase() ||
              this.props.Categories1 === "All" ||
              this.state.UserName === data.UserName
            ) {
              {
                temp = 1;
              }
              return (
                <Link to={{ pathname: "/timeline/singlepost", state: data }}>
                  <div className="contnt_2">
                    <div className="div_a">
                      <div className="div_title">
                        User Interface PSD Source files Web Designing for web
                      </div>
                      <div className="btm_rgt">
                        <div className="btm_arc">{data.Category}</div>
                      </div>
                      <div className="div_top">
                        <div className="div_top_lft">
                          <img src="/images/img_6.png" alt='img_6'/>
                          {data.UserName}
                        </div>
                        <div className="div_top_rgt">
                          <span className="span_date">{data.Date}</span>
                        </div>
                      </div>
                      <div className="div_image">
                        <img src={this.state.picpath + data.Post} alt="pet" />
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
                              <a href>
                                <span className="btn_icon">
                                  <img src="/images/icon_003.png" alt="share" />
                                </span>
                                {data.likes.length} Likes
                              </a>
                            </li>
                            <li>
                              <a href>
                                <span className="btn_icon">
                                  <img src="/images/icon_004.png" alt="share" />
                                </span>
                                Comments
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
          {temp === 0 ? (
            <div className="content_lft">
              <div className="contnt_1">
                <div className="list_1">
                  <div className="post_div">
                    <div className="post_txt" style={{backgroundColor:'red'}}>No One Post Available of this Category </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
