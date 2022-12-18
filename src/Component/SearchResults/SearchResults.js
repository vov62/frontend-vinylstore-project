import React from "react";
import { Button, Card } from "react-bootstrap";
import { AiFillHeart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";
import ErrorMessage from "../Error";
import Loading from "../Loading";
import "./searchResults.css";

const SearchResults = ({ data }) => {
  const { dispatch, wishlist, singleVinyl, loading, error } =
    useGlobalContext();

  return (
    <>
      <div className="search-results-container">
        {loading && <Loading />}
        {error && <ErrorMessage />}
        {data.length > 0 ? (
          data.map((vinyl, i) => (
            <Link to={`/vinyl/${vinyl.id}`} key={i}>
              <Card className="modal-card">
                <img src={vinyl.cover_image} alt="" className="card-img-top" />
                <div className="card-body">
                  <h6 className="card-text ">{vinyl.title}</h6>
                </div>
                <span>{vinyl?.label[0]}</span>
              </Card>
            </Link>
          ))
        ) : (
          <ErrorMessage
            variant="danger"
            children={"No matching records found."}
          />
        )}
      </div>
    </>
  );
};

export default SearchResults;
