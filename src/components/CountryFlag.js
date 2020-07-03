import React from "react";

const CountryFlag = ({ country, city }) => {
  return (
    <div className="main_content__flag">
      {country === "" ? (
        <img
          alt="loader"
          src={require("../img/loader.gif")}
          className="main_content__loader"
        />
      ) : (
        <img
          alt="flag"
          src={`https://cdn.ip2location.com/assets/img/flags/${country.toLowerCase()}.png`}
        />
      )}
      <p className="main_content__flag-city">{city}, </p>
      <p className="main_content__flag-country"> {country}</p>
    </div>
  );
};

export default CountryFlag;
