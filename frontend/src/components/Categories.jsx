import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Profile from './Profile'

export default class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Gmail: localStorage.getItem("Email"),
      postArray: [],
      picSrc: "/uploads/",
      dis: "none"
    };
  }

  handleCategories = e => {
    this.props.ChangeCategories(e.target.name);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUploade = e => {
    this.setState({ Icon: e.target.files[0] });
  };

  resetData = () => {
    document.getElementById("categoryre").reset();
  };
  postCategories = e => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("Category", this.state.Category12);
    formData.append("Icon", this.state.Icon);
    formData.append("Gmail", this.state.Gmail);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post("http://192.168.100.111:9000/auth/categories", formData, config)
      .then(response => {
        if (response.data) {
          this.setState({ postArray: response.data, dis: "none" });
          this.resetData();
          alert("Upload Category");
        } else {
          alert("Not Upload");
        }
      })
      .catch(err => {
        alert(err);
        console.log(err);
      });
  };
  componentDidMount = () => {
    console.log("component did mount");
    axios
      .post("http://192.168.100.111:9000/auth/showcategory", {
        Gmail: this.state.Gmail
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
  };

  render() {
    return (
      <>
        <div className="content_rgt">
          <div className="rght_btn">
            {" "}
            <span className="rght_btn_icon">
              <img src="/images/btn_iconb.png" alt="up" />
            </span>{" "}
            <span className="btn_sep">
              <img src="/images/btn_sep.png" alt="sep" />
            </span>{" "}
            <Link to="/timeline/upload">Upload Post</Link>{" "}
          </div>

          <div className="rght_cate">
            <div className="rght_cate_hd1" id="rght_cat_bg">
              <div className="rght_btn">
                {" "}
                <span className="rght_btn_icon">
                  <img src="/images/btn_iconb.png" alt="up" />
                </span>{" "}
                <span className="btn_sep">
                  <img src="/images/btn_sep.png" alt="sep" />
                </span>{" "}
                <a href> Upload Category </a>
              </div>
            </div>
            <div className="rght_list" style={{ display: this.state.dis }}>
              {/*  */}
              <div className="content_lft1">
                <div className="login_sec1">
                  <h3>Upload New Categories</h3>
                  <form id="categoryre" onSubmit={this.postCategories}>
                    <ul>
                      <li>
                        <span>Category</span>
                        <br />
                        <input
                          style={{ textTransform: "uppercase" }}
                          type="text"
                          placeholder="Enter Category"
                          name="Category12"
                          onChange={this.handleChange}
                          required
                        />
                      </li>
                      <li>
                        <span>Choose Icon</span>
                        <br />
                        <input
                          type="file"
                          name="Icon"
                          onChange={this.handleUploade}
                        />
                      </li>
                      <li>
                        <input
                          id="submit"
                          type="submit"
                          defaultValue="Log In"
                        />
                      </li>
                    </ul>
                  </form>
                  <div className="addtnal_acnt"></div>
                </div>
              </div>

              {/*  */}
            </div>
          </div>

          <div className="rght_cate">
            <div className="rght_cate_hd" id="rght_cat_bg">
              Categories
            </div>
            <div className="rght_list" style={{ display: "block" }}>
              <ul>
                {this.state.postArray.map((data, id) => {
                  return (
                    <li>
                      <a
                        href
                        onClick={this.handleCategories}
                        name={data.Category}
                      >
                        <span className="list_icon">
                          <img
                            src={this.state.picSrc + data.Icon}
                            style={{ width: "35px", height: "35px" }}
                            alt="up"
                          />
                        </span>{" "}
                        {data.Category}
                      </a>
                    </li>
                  );
                })}

                <li>
                  <a href onClick={this.handleCategories} name="All">
                    <span className="list_icon">
                      <img src="/images/icon_05.png" alt="up" />
                    </span>{" "}
                    Others
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="rght_cate">
            <div className="rght_cate_hd" id="opn_cat_bg">
              Featured
            </div>
            <div className="sub_dwn" style={{ display: "block" }}>
              <div className="feat_sec">
                <div className="feat_sec_img">
                  <img src="/images/feat_img1.png" alt="imagess" />
                </div>
                <div className="feat_txt">Lorem Ipusum Text</div>
              </div>
              <div className="feat_sec">
                <div className="feat_sec_img">
                  <img src="/images/feat_img2.png" alt="imagess" />
                </div>
                <div className="feat_txt">Lorem Ipusum Text</div>
                <div className="btm_rgt">
                  <div className="btm_arc">Dogs</div>
                </div>
              </div>
              <div className="feat_sec">
                <div className="feat_sec_img">
                  <img src="/images/feat_img3.png" alt="imagess" />
                </div>
                <div className="feat_txt">Lorem Ipusum Text</div>
                <div className="btm_rgt">
                  <div className="btm_arc">Rabbits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Profile Categories1={this.state.Categories1}/> */}
      </>
    );
  }
}
