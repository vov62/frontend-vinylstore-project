import React from "react";
import Card from "react-bootstrap/Card";
import noImage from "../../assets/no image.jpeg";
import { Link } from "react-router-dom";
import "./DataCardStyle.css";

const DataCard = ({ image, title, id, format, label, country }) => {
  // console.log(cart);

  return (
    <Card>
      <Link to={`/vinyl/${id}`}>
        <img
          src={image ? image : noImage}
          alt={title}
          className="card-img-top"
        />
        <div className="card-body">
          <h6 className="card-text ">{title}</h6>
          <div className="cardVinylDetails">
            <span className="cardVinylDetails-country">{country}</span>
            <span className="cardVinylDetails-format">{format}</span>
          </div>
          <span>{label}</span>
        </div>
      </Link>
    </Card>
  );
};

export default DataCard;
