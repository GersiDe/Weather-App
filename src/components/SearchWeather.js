import React, { useState } from "react";
import axios from "axios";
import DisplayWeather from "./DisplayWeather";
import Modal from "./Modal";
require("dotenv").config();

const SearchWeather = () => {
  const [location, setLocation] = useState("");
  const [city, setCity] = useState(
    "Enter a location to display weather information"
  );
  const [grade, setGrade] = useState(null);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [icon, setIcon] = useState("03n");
  const [desc, setDesc] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [country, setCountry] = useState("");
  const [modal, setModal] = useState(false);
  let [number, setNumber] = useState(true);
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  function submitForm(e) {
    e.preventDefault();

    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: location,
          appid: API_KEY,
          units: "metric",
        },
      })
      .then((response) => {
        setCity(response.data.name);
        setGrade(response.data.main.temp);
        setPressure(response.data.main.pressure);
        setHumidity(response.data.main.humidity);
        setLat(response.data.coord.lat);
        setLon(response.data.coord.lon);
        setWind(response.data.wind.speed);
        setIcon(response.data.weather[0].icon);
        setDesc(response.data.weather[0].description);
        setCountry(response.data.sys.country);
        setNumber(!number);

        alertMessage("", "");
      })
      .catch((error) => {
        alertMessage(
          location,
          "is not a valid place , please choose another location"
        );
        console.log(error.message);
      });
  }

  function toggleModal() {
    setModal(!modal);
  }

  let alertMessage = (location, message) => {
    document.querySelector(".error-msg").innerHTML = `<p>
    ${location} ${message}
  </p>`;
  };

  return (
    <div className="main_content">
      <div className="search_bar">
        <div></div>
        <form onSubmit={submitForm}>
          <input
            type="text"
            name="weather"
            placeholder="Add a location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <input
            type="image"
            src={require("../img/search.png")}
            border="0"
            alt="Submit"
            className="zoomIcon"
          />
          <div className="error-msg"></div>
        </form>
        <div onClick={toggleModal} className="search_bar__help">
          <img src={require("../img/question.png")} alt="help" />
        </div>

        {modal ? (
          <Modal>
            <div className="popup">
              <div>
                <p>
                  A web application made using React , JavaScript, HTML, SCSS,
                  axios, OpenWeather API, Leaflet
                </p>
              </div>
              <input
                type="image"
                onClick={toggleModal}
                alt="close"
                src={require("../img/close.png")}
              />
            </div>
          </Modal>
        ) : null}
      </div>

      <DisplayWeather
        lat={lat}
        lon={lon}
        desc={desc}
        icon={icon}
        city={city}
        grade={grade}
        pressure={pressure}
        humidity={humidity}
        wind={wind}
        country={country}
        number={number}
      />
    </div>
  );
};

export default SearchWeather;
