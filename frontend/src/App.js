import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import LoginPage from  './pages/loginPage';
import Forgotpage from './pages/Forgotpage';
import Timeline from './pages/Timeline';

function App() {
  return (
    <>
         <Route path='/' component={Header} />
         <Switch>
         <Route exact path="/" component={RegisterPage} />
         <Route path="/loginpage" component={LoginPage} />
         <Route path="/forgotpage" component={Forgotpage} />
         <Route path='/timeline' component={Timeline} />
         </Switch>
      <Footer />
    </>
  );
}

export default App;
