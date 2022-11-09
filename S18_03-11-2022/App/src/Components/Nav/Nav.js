import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      {/* <a href="/">Count</a>
      <a href="/profile">Profile</a>
      <a href="/useeffect">UseEffect</a>
      <a href="/image">ImageComp</a> */}

      <Link to="/">Count</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/useeffect">UseEffect</Link>
      <Link to="/image">ImageComp</Link>
    </div>
  );
}

export default Nav;
