import React from "react";

const TimeandDate = ({ desc }) => {
  const optionCurrentDay = { weekday: "long" };
  const optionFullDate = { year: "numeric", month: "long", day: "numeric" };
  const currentDay = new Date().toLocaleDateString("en-us", optionCurrentDay);
  const fullDate = new Date().toLocaleDateString("en-us", optionFullDate);
  return (
    <div className="main_content__celcius-desc">
      <p>{currentDay}</p>
      <p className="main_content__gray">{fullDate}</p>
      <h4 className="main_content__capitalize">{desc}</h4>
    </div>
  );
};

export default TimeandDate;
