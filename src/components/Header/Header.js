import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__titleInfo">
        <Link to="/">
          <h2>Projects</h2>
        </Link>
        <p>
          Created by <a href="https://github.com/adechan">Ade</a> ❤
        </p>
      </div>

      <div className="header__options">
        <Link to="/mentor-projects">
          <p>Mentor Solutions</p>
        </Link>
        <Link to="/reactjs-projects">
          <p>ReactJS</p>
        </Link>
      </div>
    </div>
  );
}
