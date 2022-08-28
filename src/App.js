import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home.js";
import Projects from "./Projects.js";
import AboutMe from "./AboutMe.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Projects" component={Projects} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;