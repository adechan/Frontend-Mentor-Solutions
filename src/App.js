import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { mentorProjects, reactjsProjects, projects } from "./data";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/reactjs-projects">
            <Header />
            <Cards projects={reactjsProjects} />
          </Route>

          <Route path="/mentor-projects">
            <Header />
            <Cards projects={mentorProjects} />
          </Route>

          <Route path="/">
            <Header />
            <Cards projects={projects} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
