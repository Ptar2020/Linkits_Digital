import React from "react";
import photo1 from "../images/photo1.png";
import photo2 from "../images/logo-color.png";
import photo3 from "../images/logo.gif";
import photo4 from "../images/young-blogger.png";

function Photos() {
  return (
    <div id="photos" className="mt-4 pt-4">
      <h1 id="title" className="title  text-center">
        SAMPLE DESIGNS{" "}
      </h1>
      <hr />
      <div className="photo-container">
        <img alt="photo1" src={photo4} className="photo" />
        <img alt="photo4" src={photo3} className="photo" />
        <img alt="photo5" src={photo1} className="photo" />
        <img alt="photo2" src={photo2} className="photo" />
      </div>
    </div>
  );
}

export default Photos;
