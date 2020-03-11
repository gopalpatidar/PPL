import React from "react";
import Categories from "../components/Categories";
import { Switch, Route } from "react-router-dom";
import Uploadpost from "../components/Uploadpost";
import Profile from "../components/Profile";
import Singlepost from "../components/Singlepost";

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Categories1: "All" };
  }
  changeCategories = e => {
    this.setState({ Categories1: e});
  };

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.location.state && nextProps.location.state.fromHeader) {
      nextProps.location.state.fromHeader = false;
      return {  Categories1: "All" }    
    }
  }

  render() {
    console.log(this.state.temp, "ggggg");
    return (
      <>
        <div className="container">
          <div className="content">
            <Categories
              ChangeCategories={this.changeCategories}
              {...this.props}
            />
            <Switch>
              <Route
                exact
                path="/timeline"
                render={props => (
                  <Profile
                    {...this.props}
                    ChangeCategories={this.changeCategories}
                    Categories1={this.state.Categories1}
                  />
                )}
              />
              <Route
                path="/timeline/upload"
                component={Uploadpost}
                {...this.props}
              />
              <Route
                path="/timeline/singlepost"
                component={Singlepost}
                {...this.props}
              />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}
