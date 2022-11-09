import React, { useState } from "react";
import "./Count.css";

function Count() {
  var [state, setState] = useState(1);

  function updateStateValue() {
    setState(state + 1);
  }

  return (
    <div className="countContainer">
      <h2>Counter {state}</h2>
      <button onClick={updateStateValue}>Count</button>
    </div>
  );
}

export default Count;
