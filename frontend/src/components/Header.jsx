import React from "react";
export default class Header extends React.Component {
  signOut = e => {
    // console.log(props.Categories1)
    localStorage.clear();
    this.props.history.push("/");
  };
  viewProfile = () => {
    localStorage.setItem("profile", "profile");
    this.props.history.push({
      pathname: "/timeline",
      state: { fromHeader: true }
    });
  };
  viewHome = () => {
    localStorage.removeItem("profile");
    this.props.history.push({
      pathname: "/timeline",
      state: { fromHeader: true }
    });
  };
  render() {
    return (
      <>
        <div className="header">
          <div className="header_lft">
            <div className="logo" onClick={this.viewHome}>
              <a href>
                <img alt="abc" src="/images/logo.png" />
              </a>
            </div>
            <div className="navigatn">
              <ul>
                <li>
                  <a href onClick={this.viewHome} className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href> E-Coupons </a>
                </li>
                <li>
                  <a href>E-Brands </a>
                </li>
                <li>
                  <a href> Resuse Market </a>
                </li>
                <li>
                  {localStorage.getItem("Email") ? (
                    <a href onClick={this.signOut}>
                      signOut
                    </a>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
          </div>
          {localStorage.getItem("Email") ? (
            <div className="header_rgt">
              <div className="flag_div">
                <img alt="abc" src="/images/flag.png" />
              </div>
              <input type="text" placeholder="Search" className="txt_box" />
              <div className="msg_box">
                <a href>
                  <span className="msg_count">100</span>
                </a>
              </div>
              <div className="info_div" onClick={this.viewProfile}>
                <div className="image_div">
                  {" "}
                  <img alt="abc" src="/images/pic.png" />{" "}
                </div>
                <div className="info_div1">Me</div>
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
