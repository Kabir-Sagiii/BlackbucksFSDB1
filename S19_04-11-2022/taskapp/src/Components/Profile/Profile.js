import React from "react";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="profile">
      <div>
        <img
          src="https://jooinn.com/images/male-model-5.jpg"
          width="100%"
          height="300"
        />
      </div>
      <div>
        <h3>Darsh Verma</h3>
        <h4>Male</h4>
        <button>Profile</button>
      </div>
    </div>
  );
}

export default Profile;
