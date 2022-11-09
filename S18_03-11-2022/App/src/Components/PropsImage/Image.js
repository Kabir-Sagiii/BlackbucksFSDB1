import React from "react";

function PropsImage(props) {
  return (
    <div id="img">
      <img src={props.img} width="300" height="300" />
    </div>
  );
}

export default PropsImage;
