// React additions
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Individual Pages
import Home from "./pages/home";
import Feed from "./pages/feed";
import Error404 from "./pages/error404";
import Post from "./pages/post";
import Publish from "./pages/publish";
import Profile from "./pages/profile";
import Search from "./pages/search";
import Settings from "./pages/settings"
import Login from './pages/Login'
import Register from '../src/pages/Register'
import ForgetPassword from '../src/pages/ForgetPassword'

function App() {
  return (
    <div>
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/feed" component={Feed}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/publish" component={Publish}></Route>
            <Route exact path="/search" component={Search}></Route>
            <Route exact path="/settings" component={Settings}></Route>
            <Route exact path="/post" component={Post}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/forget-password" component={ForgetPassword}></Route> 
            <Route component={Error404}></Route>
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
