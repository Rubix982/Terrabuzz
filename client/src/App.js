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

// Indivdual Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <>
        <Router>
          <Navbar first_name="Tashik" title={"Terrabuzz"} />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/feed" component={Feed}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/publish" component={Publish}></Route>
            <Route exact path="/search" component={Search}></Route>
            <Route exact path="/settings" component={Settings}></Route>
            <Route exact path="/post" component={Post}></Route>
            <Route component={Error404}></Route>
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
