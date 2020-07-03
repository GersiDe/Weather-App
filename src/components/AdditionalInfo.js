import React from "react";

const AdditionalInfo = ({ info, infoData, img, number }) => {
  return (
    <div className="main_content__data">
      <div>
        <p>{info}</p>
      </div>
      <div className="main_content__flex">
        <img alt="img" src={img} />
        <p className="main_content__rightP">{infoData}</p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
