import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div class="footr">
        <div class="footr_lft">
          <div class="footer_div1">
            Copyright © Pet-Socail 2014 All Rights Reserved
          </div>
          <div class="footer_div2">
            <link href="#" />
            Privacy Policy <link />| <link href="#" /> Terms &amp; Conditions
            <link />
          </div>
        </div>
        <div class="footr_rgt">
          <ul>
            <li>
              <link href="#" />
              <img alt='abc' src="/images/social_1.png" />
              <link />
            </li>
            <li>
              <link href="#" />
              <img alt='abc' src="/images/social_2.png" />
              <link />
            </li>
            <li>
              <link href="#" />
              <img alt='abc' src="/images/social_3.png" />
              <link />
            </li>
            <li>
              <link href="#" />
              <img alt='abc' src="/images/social_4.png" />
              <link />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
