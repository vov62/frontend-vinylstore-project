import React from "react";
import "./turnTableList.css";

const TurnTableList = ({ item, small_id }) => {
  return (
    <div className="grid-wrapper-card">
      <div className="grid-image-img">
        <img src={item.imgLink} alt={item.title} />
        <div className="grid-details">
          <div className="grid-title">{item.title}</div>
          <span> &euro;{item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default TurnTableList;
