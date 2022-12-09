import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/Context";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Component/Loading";
import Error from "../../Component/Error";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import TrackList from "../../Component/TrackList/TrackList";
import noImage from "../../assets/no image.jpeg";
import { BsHeart } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import "./singleVinyl.css";

const DISCOGS_URL = process.env.REACT_APP_DISCOGS_URL;
const DISCOGS_KEY = process.env.REACT_APP_DISCOGS_KEY;

const SingleVinyl = () => {
  const { id } = useParams();
  // console.log(id);
  const [trackList, setTrackList] = useState([]);
  const [imgDesc, setImgDesc] = useState([]);
  // const [quantity, setQuantity] = useState(1);
  const [newData, setNewData] = useState();
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
      const data = response.data;

      if (data) {
        dispatch({ type: "FETCH_SINGLE_VINYL", payload: data });
        setTrackList(data.tracklist);
      }
      if (data.images) {
        setImgDesc(data.images);
      }
      if (data.videos) {
        setVideos(data.videos[0].uri);
      }

      setNewData(data.formats[0].descriptions[0]);
    } catch (err) {
      const message = err.message;
      dispatch({ type: "FETCH_ERROR", payload: message });
    }
  };

  useEffect(() => {
    fetchSingleVinyl();
  }, []);

  const {
    released,
    artists_sort,
    title,
    country,
    num_for_sale,
    lowest_price,
    genres,
  } = singleVinyl;

  return (
    <div className="wrapper">
      <div className="back-home-link">
        <Link to="/">
          <BsArrowLeft fill="#000" />
          Go Back
        </Link>
      </div>
      {error && <Error variant="danger">{error}</Error>}
      {loading && <Loading />}
      <div className="data-container">
        <div className="vinyl-details">
          <div className="vinyl-img">
            <Carousel className="vinyl-img-carousel" showIndicators={false}>
              {imgDesc.map((item, i) => (
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
          <h1>{title}</h1>
          <p>
            {newData} | {genres}
          </p>
          <h4 style={{ color: "yellowgreen" }}>
            &euro;
            {lowest_price && lowest_price > 1
              ? lowest_price.toString().split(".")[0]
              : "not in stock"}
          </h4>
          <hr />
          <h4> {artists_sort}</h4>
          <h4> {country}</h4>
          <h4> {released ? released : "unknown"}</h4>
          <h4>{num_for_sale ? `${num_for_sale} for sale` : "not in stock"}</h4>
          {/* {wishlist ? (
            <button
              className="wishlist-btn"
              style={{ border: "none" }}
              onClick={() => {
                // console.log(singleVinyl);
                dispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: singleVinyl,
                });
              }}
            >
              {num_for_sale ? <AiFillHeart size={"25px"} fill="red" /> : null}
            </button>
          ) : (
            <button
              className="wishlist-btn"
              style={{ border: "none" }}
              onClick={() => {
                dispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: singleVinyl,
                });
              }}
            >
              {/* {num_for_sale ? <BsHeart size={"22px"} fill="#000" /> : null} */}
          {/* {wishlist ? (
                <BsHeart size={"22px"} fill="#000" />
              ) : (
                <AiFillHeart size={"25px"} fill="red" />
              )} */}
          {/* </button> */}
          {/* )} */}

          {wishlist.some((v) => v.id === singleVinyl.id) ? (
            <button
              className="wishlist-btn"
              style={{ border: "none" }}
              onClick={() => {
                // console.log(singleVinyl);
                dispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: singleVinyl,
                });
              }}
            >
              {num_for_sale ? <AiFillHeart size={"25px"} fill="red" /> : null}
            </button>
          ) : (
            <button
              className="wishlist-btn"
              style={{ border: "none" }}
              onClick={() => {
                dispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: singleVinyl,
                });
              }}
            >
              <BsHeart size={"22px"} fill="#000" />
            </button>
          )}

          <hr />
          <div>
            {cart.some((v) => v.id === singleVinyl.id) ? (
              <button
                className="removeCard-btn"
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
                className="btn-btn "
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
        </div>
      </div>
      <div>
        <TrackList trackList={trackList} video={video} />
      </div>
    </div>
  );
};

export default SingleVinyl;
