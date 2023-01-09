import React from "react";
import { Link } from "react-router-dom";
import "./turnTableList.css";

const TurnTableList = ({ item, id }) => {
  return (
    <Link to={`/turnTable/${id}`}>
      <div className="grid-wrapper-card" key={id}>
        <div className="grid-image-img">
          <img src={item.imgLink} alt={item.title} />
          <div className="grid-details">
            <div className="grid-title">{item.title}</div>
            <span> &euro;{item.price}</span>
            {/* <div className="grid-image-price">&euro; {item.price}</div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TurnTableList;
