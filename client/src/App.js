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

// Indivdual Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <>
        <Router>
          {/* <Navbar first_name="Tashik" title={"Terrabuzz"} /> */}

          <Switch>

            <Route exact path="/" component={home}></Route>
            <Route exact path="/feed" component={feed}></Route>
            <Route exact path="/profile" component={profile}></Route>
            <Route exact path="/publish" component={publish}></Route>
            <Route exact path="/search" component={search}></Route>
            <Route exact path="/settings" component={settings}></Route>
            <Route exact path="/post" component={post}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route component={error404}></Route>
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
