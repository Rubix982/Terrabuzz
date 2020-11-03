import React from "react";
import home from "./pages/home";
import feed from "./pages/feed";
import error404 from "./pages/error404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/feed" component={feed}></Route>
          <Route exact path="/feed" component={feed}></Route>
          <Route component={error404}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
