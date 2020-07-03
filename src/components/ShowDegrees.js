import React from "react";
import TimeandDate from "./TimeandDate";

const ShowDegrees = ({ grade, icon, desc }) => {
  let newIcon;
  switch (icon) {
    case "01d":
    case "01n":
      newIcon = require("../img/01.png");
      break;
    case "02d":
    case "02n":
      newIcon = require("../img/02.png");
      break;
    case "03d":
    case "03n":
      newIcon = require("../img/03.png");
      break;
    case "04d":
    case "04n":
      newIcon = require("../img/04.png");
      break;
    case "09d":
    case "09n":
      newIcon = require("../img/09.png");
      break;
    case "10d":
    case "10n":
      newIcon = require("../img/10.png");
      break;
    case "11d":
    case "11n":
      newIcon = require("../img/11.png");
      break;
    case "13d":
    case "13n":
      newIcon = require("../img/13.png");
      break;
    case "50d":
    case "50n":
      newIcon = require("../img/50.png");
      break;
    default:
      newIcon = "nothing found";
  }

  return (
    <div className="main_content__celcius">
      <div className="main_content__celcius-degree">
        {grade !== null ? <h1>{grade.toFixed(0)} °C</h1> : <h1>°C</h1>}
      </div>
      <div className="main_content_icon">
        <img alt="icon" src={newIcon} />
      </div>
      <TimeandDate desc={desc} />
    </div>
  );
};

export default ShowDegrees;
