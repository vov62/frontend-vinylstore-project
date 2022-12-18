import React from "react";
import Card from "react-bootstrap/Card";
import noImage from "../../assets/no image.jpeg";
import { Link } from "react-router-dom";
import "./DataCardStyle.css";
// import { BsHeart } from 'react-icons/bs';
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../../context/Context";

const DataCard = ({ image, title, id, item, label }) => {
  // console.log(cart);

  return (
    <Card>
      <Link to={`/vinyl/${id}`}>
        <img
          src={!image ? noImage : image}
          alt={title}
          className="card-img-top"
        />
        <div className="card-body">
          <h6 className="card-text ">{title}</h6>
          <h6 className="card-text ">
            <span>{label}</span>
          </h6>
        </div>
      </Link>
    </Card>
  );
};

export default DataCard;
