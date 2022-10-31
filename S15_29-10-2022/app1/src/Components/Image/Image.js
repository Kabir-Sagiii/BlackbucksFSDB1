import React, { useState } from "react";
import "./Image.css";

function Image() {
  var [state, setState] = useState(
    "https://media1.thehungryjpeg.com/thumbs2/ori_3628649_qsuzn8mk8l57a0wouqet504au6scpnd6dbayc2bo_js-monogram-logo-design.jpg"
  );

  var [btnData, setBtnData] = useState("Update to React");

  function updateImage() {
    setState("https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe");
    setBtnData("Update to Javascript");
  }
  return (
    <div id="img">
      <img src={state} width="300" height="300" />
      <br />
      <button id="btn" onClick={updateImage}>
        {btnData}
      </button>
    </div>
  );
}

export default Image;
