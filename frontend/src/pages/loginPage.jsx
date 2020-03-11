import React from "react";
import Leftloginreg from "../components/leftloginreg";
import Login from "../components/Login";

const LoginPage = props => {
  return (
    <div className="container">
      <div className="content">
        <Leftloginreg />
        <Login {...props} />

        {/* <Route exact path='/loginpage' component={Leftloginreg}/>
        <Switch>
          <Route exact path='/loginpage' component={Login}/>
          <Route  path='/loginpage/forgot' component={Forgotpage}/>
        </Switch> */}
      </div>
    </div>
  );
};

export default LoginPage;
