import React from "react";

const WaitingMap = () => {
  return (
    <div className="mapDisabled">
      <div className="mapDisabled_content">
        <img alt="marker" src={require("../img/unknow-marker.png")} />
        <p>Add a location to load map</p>
      </div>
    </div>
  );
};

export default WaitingMap;
