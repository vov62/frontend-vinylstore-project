import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DataList from "../../Component/DataList/DataList";
import Loading from "../../Component/Loading";
import SearchResults from "../../Component/SearchResults/SearchResults";
import { useGlobalContext } from "../../context/Context";
import "./searchVinyl.css";

const DISCOGS_URL = process.env.REACT_APP_DISCOGS_URL;
const DISCOGS_KEY = process.env.REACT_APP_DISCOGS_KEY;

const SearchVinyl = () => {
  const { searchVinylResults, loading, error, dispatch } = useGlobalContext();

  const [query, setQuery] = useState("");

  const searchData = async () => {
    try {
      const response = await axios(
        `${DISCOGS_URL}/database/search?&q=${query}&genre=reggae&format=vinyl&token=${DISCOGS_KEY}`
      );
      const data = response.data.results;

      if (data) {
        dispatch({ type: "SEARCH_VINYL_DATA", payload: data });
      }
      // console.log(response.data.results);
    } catch (err) {
      const message = err.message;
      dispatch({ type: "FETCH_ERROR", payload: message });
    }
  };

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query === "") {
      alert("Please enter a valid name");
      console.log("error");
    } else {
      searchData();
      setQuery("");
    }
  };

  useEffect(() => {
    searchData();
  }, [dispatch]);

  return (
    <div className="search-vinyl-container">
      <div className="left">
        <div className="filterItem">
          <h6>Genres</h6>
          <Form.Check type="checkbox" id="1" value={1} label="Reggae" />
          <Form.Check type="checkbox" id="2" value={2} label="Dancehall" />
          <Form.Check type="checkbox" id="3" value={3} label="Digital" />
          <Form.Check type="checkbox" id="4" value={4} label="Dub" />
          <Form.Check type="checkbox" id="5" value={5} label="Rocksteady" />
        </div>
        <div className="filterItem">
          <h6>Formats</h6>
          <Form.Check type="checkbox" id="1" value={1} label="7 Inch" />
          <Form.Check type="checkbox" id="2" value={2} label="LP" />
          <Form.Check type="checkbox" id="3" value={3} label="12 Inch" />
        </div>
        {/* 
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="success">Clear Filters</Button>
        </div> */}
      </div>
      <div className="right">
        <div className="search-vinyl-input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search artists, albums..."
              onChange={handleInput}
              value={query}
            />
          </form>
        </div>
        <div>
          {loading ? <Loading /> : <SearchResults data={searchVinylResults} />}
        </div>
      </div>
    </div>
  );
};

export default SearchVinyl;
