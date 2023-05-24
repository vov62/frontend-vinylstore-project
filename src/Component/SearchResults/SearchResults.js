import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";
import ErrorMessage from "../Error";
import Loading from "../Loading";
import "./searchResults.css";

const SearchResults = ({ data }) => {
  const {
    loading,
    error,
    filterState: { filter_products_formats, filter_products_category },
  } = useGlobalContext();

  return (
    <>
      <div className="search-results-container">
        {loading ? <Loading /> : null}
        {error ? (
          <ErrorMessage
            variant="danger"
            children={"Connection Error, please check your connection"}
          />
        ) : null}
        {filter_products_category.length > 0 ? (
          filter_products_category.map((vinyl, i) => (
            <Link to={`/vinyl/${vinyl.id}`} key={i}>
              <Card>
                <img
                  src={vinyl?.cover_image}
                  alt="coverImage"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h6 className="card-text ">{vinyl?.title}</h6>

                  <div className="cardVinylDetails">
                    <span>{vinyl?.country}</span>
                    <span className="cardVinylDetails-format">
                      {vinyl?.format[1] ? vinyl.format[1] : vinyl.format[0]}
                    </span>
                  </div>
                  <span>{vinyl?.label[0]}</span>
                </div>
              </Card>
            </Link>
          ))
        ) : filter_products_formats.length > 0 ? (
          filter_products_formats.map((vinyl, i) => (
            <Link to={`/vinyl/${vinyl.id}`}>
              <Card key={i}>
                <img src={vinyl.cover_image} alt="" className="card-img-top" />
                <div className="card-body">
                  <h6 className="card-text ">{vinyl.title}</h6>
                  <div className="cardVinylDetails">
                    <span>{vinyl?.country}</span>
                    <span className="cardVinylDetails-format">
                      {vinyl?.format[1] ? vinyl.format[1] : vinyl.format[0]}
                    </span>
                  </div>
                  <span>{vinyl?.label[0]}</span>
                </div>
              </Card>
            </Link>
          ))
        ) : (
          <>
            {data.length > 0 &&
              data.map((vinyl, i) => (
                <Card key={i}>
                  <Link to={`/vinyl/${vinyl.id}`}>
                    <img
                      src={vinyl.cover_image}
                      alt="cover_image"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h6 className="card-text ">{vinyl.title}</h6>
                      <div className="cardVinylDetails">
                        <span className="cardVinylDetails-country">
                          {vinyl?.country}
                        </span>
                        <span className="cardVinylDetails-format">
                          {vinyl?.format[1] ? vinyl.format[1] : "LP"}
                        </span>
                      </div>
                      <span>{vinyl?.label[0]}</span>
                    </div>
                  </Link>
                </Card>
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default SearchResults;
