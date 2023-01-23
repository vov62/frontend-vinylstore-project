import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/Context";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../Component/Loading";
import Error from "../../Component/Error";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import TrackList from "../../Component/TrackList/TrackList";
import noImage from "../../assets/no image.jpeg";
import { BsHeart, BsFillShieldFill } from "react-icons/bs";
import { FaShoppingCart, FaShippingFast } from "react-icons/fa";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import "./singleVinyl.css";

const DISCOGS_URL = process.env.REACT_APP_DISCOGS_URL;
const DISCOGS_KEY = process.env.REACT_APP_DISCOGS_KEY;

const SingleVinyl = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);
  const [trackList, setTrackList] = useState([]);
  const [imgDesc, setImgDesc] = useState([]);
  const [format, setFormat] = useState();
  const [video, setVideos] = useState([]);

  const { singleVinyl, loading, error, dispatch, cart, wishlist } =
    useGlobalContext();
  // console.log(singleVinyl);

  const fetchSingleVinyl = async () => {
    try {
      const response = await axios(`${DISCOGS_URL}/releases/${id}`, {
        headers: {
          Authorization: `Discogs token=${DISCOGS_KEY}`,
        },
      });
      const data = response?.data;

      dispatch({ type: "FETCH_SINGLE_VINYL", payload: data });

      setTrackList(data.tracklist);

      if (data.images) {
        setImgDesc(data.images);
      }
      if (data.videos) {
        setVideos(data.videos[0].uri);
      }

      if (data.formats[0]) {
        setFormat(data.formats[0].name);
      }
    } catch (err) {
      const message = err.message;
      dispatch({ type: "FETCH_ERROR", payload: message });
    }
  };

  useEffect(() => {
    fetchSingleVinyl();
  }, [dispatch]);

  const {
    released,
    artists_sort,
    title,
    country,
    num_for_sale,
    lowest_price,
    genres,
    styles,
    labels,
    community,
    notes,
  } = singleVinyl;

  // go back btn to previous page
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="wrapper">
      <div className="back-home-link">
        <div onClick={goBack} style={{ cursor: "pointer" }}>
          <BsArrowLeft fill="#000" />
          Go Back
        </div>
      </div>
      {error && <Error variant="danger">{error}</Error>}
      {loading ? (
        <Loading />
      ) : (
        <div className="data-container">
          <div className="vinyl-details">
            <div className="vinyl-img">
              <Carousel className="vinyl-img-carousel" showIndicators={false}>
                {imgDesc?.map((item, i) => (
                  <img
                    key={i}
                    src={item.resource_url ? item.resource_url : noImage}
                    alt="vinyl"
                  />
                ))}
              </Carousel>
            </div>
          </div>

          <div className="vinyl-content">
            <div className="vinyl-content-title">
              <h3>{title}</h3>
              <h4>
                <span>
                  <AiFillStar style={{ color: "rgb(255, 215, 0)" }} size={25} />
                </span>
                <strong>{community?.rating.average}</strong>
              </h4>
            </div>

            <p style={{ color: "#7a7a7a" }}>
              {format} | {styles ? styles : genres} |{" "}
              {labels ? labels[0].name : null}
            </p>
            <h3
              style={{
                fontWeight: "bold",
              }}
            >
              Price: &euro;
              {lowest_price > 1
                ? lowest_price.toString().split(".")[0]
                : !num_for_sale
                ? "Out Of Stock"
                : lowest_price}
            </h3>
            <hr />
            <h4>
              <strong> artists: </strong>
              <span>{artists_sort ?? "unknown"}</span>
            </h4>
            <h4>
              <strong>country:</strong>
              <span> {country ?? "unknown"}</span>
            </h4>
            <h4>
              <strong>year:</strong> <span>{released ?? "unknown"}</span>
            </h4>
            <h4>
              <strong>for sale: </strong>
              <span
                className={`price-stock ${
                  num_for_sale ? "inStock" : "notInStock"
                }`}
              >
                {num_for_sale ? `${num_for_sale} In Stock` : "Out of Stock!"}
              </span>
            </h4>

            <div className="vinyl-content-notes" style={{ marginTop: "10px" }}>
              <strong>Notes:</strong>
              <p>{notes ? notes : "No Description"}</p>
            </div>

            <hr />
            {/* add to Cart btn */}
            <div>
              {cart.some((v) => v.id === singleVinyl.id) ? (
                <button
                  className="btn-btn remove-Cart-btn"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: singleVinyl,
                    });
                  }}
                >
                  <span style={{ marginRight: "3px" }}>
                    <FaShoppingCart fontSize="18px" />
                  </span>
                  Remove from Cart
                </button>
              ) : (
                <button
                  disabled={!num_for_sale}
                  className={`btn-btn ${
                    !num_for_sale ? "disabled-btn" : "btn-btn"
                  }`}
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: singleVinyl,
                    });
                  }}
                >
                  <span style={{ marginRight: "3px" }}>
                    <FaShoppingCart fontSize="18px" />
                  </span>
                  Add To Cart
                </button>
              )}
            </div>

            {/* wishlist btn */}
            {wishlist.some((v) => v.id === singleVinyl.id) ? (
              <button
                className="btn-btn remove-wishlist-btn"
                disabled={!num_for_sale}
                style={{ border: "none" }}
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: singleVinyl,
                  });
                }}
              >
                <span style={{ marginRight: "2px" }}>
                  <AiFillHeart size={25} fill="red" />
                </span>
                Remove From Wishlist
              </button>
            ) : (
              <button
                disabled={!num_for_sale}
                className={`btn-btn add-wishlist-btn ${
                  !num_for_sale ? "disabled-btn" : "btn-btn-wishlist"
                }`}
                style={{ border: "none" }}
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: singleVinyl,
                  });
                }}
              >
                <span style={{ marginRight: "3px" }}>
                  <BsHeart size={22} fill="#000" />
                </span>
                Add To Wishlist
              </button>
            )}

            {/* free shipping, return policy */}
            <div className="shipping-policy">
              <div className="shipping-wrapper">
                <div className="shipping">
                  <FaShippingFast
                    style={{ color: "rgb(0, 163, 108)" }}
                    size={22}
                  />
                  <span>Free Shipping</span>
                  <p>Free flat rate shipping on orders over &euro; 20.</p>
                </div>
                <div className="return-policy">
                  <BsFillShieldFill
                    style={{ color: "rgb(0, 163, 108)" }}
                    size={22}
                  />
                  <span>Return Policy</span>
                  <p>
                    1. Items must be received within 60 days from the purchase
                    date.
                    <br />
                    2. Items must be received undamaged and in original package.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <TrackList trackList={trackList} video={video} />
      </div>
    </div>
  );
};

export default SingleVinyl;
