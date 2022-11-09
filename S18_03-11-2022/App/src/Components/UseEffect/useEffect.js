import React, { useEffect, useState } from "react";
import "./UseEffect.css";

function UseEffect() {
  const [state, setState] = useState("Kabir Sagar");

  useEffect(function () {
    setTimeout(function () {
      setState("React JS from Facebook");
    }, 5000);
  });

  return (
    <div className="effect">
      <h2>{state}</h2>
    </div>
  );
}

export default UseEffect;
