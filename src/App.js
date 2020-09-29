import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";

import { projects } from "./data";

function App() {
  return (
    <div className="app">
      <Header />
      {projects.length !== 0 && <Cards />}
    </div>
  );
}

export default App;
