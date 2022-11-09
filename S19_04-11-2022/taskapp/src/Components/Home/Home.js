import React from "react";
import Search from "../Search/Searcj";
import Profile from "../Profile/Profile";
import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <div className="div1">
        <Search />
      </div>
      <div className="div2">
        <Profile />
      </div>
      <div className="div3">{/* <Details /> */}</div>
    </div>
  );
}

export default Home;
