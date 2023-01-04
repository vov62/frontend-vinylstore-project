import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FilterSearch from "../../Component/FilterSearch";
import Loading from "../../Component/Loading";
import PaginationCustom from "../../Component/Pagination/PaginationCustom";
import SearchResults from "../../Component/SearchResults/SearchResults";
import { useGlobalContext } from "../../context/Context";
import "./searchVinyl.css";

const DISCOGS_URL = process.env.REACT_APP_DISCOGS_URL;
const DISCOGS_KEY = process.env.REACT_APP_DISCOGS_KEY;

const SearchVinyl = () => {
  const {
    searchVinylResults,
    loading,
    dispatch,
    filterState: { filter_products_formats, filter_products_category },
    filterDispatch,
    filterState,
  } = useGlobalContext();

  // search query
  const [query, setQuery] = useState("");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [vinylPostsPerPage, setVinylPostsPerPage] = useState(10);
  const lastPostIndex = currentPage * vinylPostsPerPage;
  const firstPostIndex = lastPostIndex - vinylPostsPerPage;
  const currentPosts = searchVinylResults.slice(firstPostIndex, lastPostIndex);

  // api call
  const searchData = async () => {
    try {
      const response = await axios(
        `${DISCOGS_URL}/database/search?&q=${query}&genre=reggae&format=vinyl&token=${DISCOGS_KEY}`
      );
      const data = response.data.results;

      if (data) {
        dispatch({ type: "SEARCH_VINYL_DATA", payload: data });
      }

      // console.log(response.data.result);
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

  const newOne = (data, property) => {
    let newVal = data.map((cuElem) => {
      return cuElem[property][1];
    });
    // console.log(newVal);
    return (newVal = ["All", ...new Set(newVal)]);
    // console.log(newVal);
  };

  const categoryOnlyData = newOne(searchVinylResults, "format");

  useEffect(() => {
    searchData();
  }, [
    dispatch,
    filterDispatch,
    filter_products_category,
    filter_products_formats,
  ]);

  return (
    <div className="search-vinyl-container">
      <div className="left">
        <FilterSearch currentPosts={currentPosts} />
      </div>
      <div className="right">
        <div className="search-vinyl-input">
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search artists, albums..."
              onChange={handleInput}
              value={query}
            />
          </Form>
        </div>
        <div>
          {loading ? <Loading /> : <SearchResults data={currentPosts} />}

          <PaginationCustom
            totalVinylPosts={searchVinylResults.length}
            vinylPostsPerPage={vinylPostsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchVinyl;
