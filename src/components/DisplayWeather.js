import React from "react";
import "../style.scss";
import AdditionalInfo from "./AdditionalInfo";
import ShowDegrees from "./ShowDegrees";
import CountryFlag from "./CountryFlag";
import GoogleMaps from "./GoogleMaps";
import WaitingMap from "./WaitingMap";

const DisplayWeather = ({
  lon,
  lat,
  desc,
  icon,
  city,
  grade,
  pressure,
  humidity,
  wind,
  country,
  number
}) => {
  return (
    <div className="main_content__info">
      <div className="main_content__description">
        <CountryFlag country={country} city={city} />
        <div className={`main_content__general ${number}`}>
          <AdditionalInfo
            info="Pressure"
            infoData={pressure}
            img={require("../img/meter.png")}
          />

          <AdditionalInfo
            info="Humidity"
            infoData={humidity}
            img={require("../img/humidity.png")}
          />
          <AdditionalInfo
            info="Wind"
            infoData={wind}
            img={require("../img/weather.png")}
          />
        </div>
        <ShowDegrees grade={grade} icon={icon} desc={desc} />
      </div>
      {lat !== "" ? <GoogleMaps lat={lat} lon={lon} /> : <WaitingMap />}
    </div>
  );
};

export default DisplayWeather;
