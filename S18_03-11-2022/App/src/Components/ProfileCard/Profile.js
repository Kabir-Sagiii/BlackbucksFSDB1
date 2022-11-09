import React from "react";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="card">
      <div>
        <img src={props.img} width="100%" height="250" />
      </div>
      <div className="userData">
        <h3>{props.name}</h3>
        <p>{props.gender}</p>
        <p>{props.email}</p>
        <button>Profile</button>
      </div>
    </div>
  );
}

export default Profile;
