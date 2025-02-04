import React from "react";
import Lottie from "lottie-react";
import AI from "../Assets/heli.json";

function heli() {
  return (
    <div className="flex justify-end items-right">
      <Lottie
        animationData={AI}
        loop={true}
        autoplay={true}
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
}

export default heli;
