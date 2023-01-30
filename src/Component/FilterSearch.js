import React, { useState } from "react";
import { useGlobalContext } from "../context/Context";
import { Button } from "react-bootstrap";

const FilterSearch = () => {
  const { searchVinylResults, filterDispatch } = useGlobalContext();

  //  link active
  const [activeSelected, setActiveSelected] = useState(0);

  // filter by category
  const categoryFilterResult = (cartItem) => {
    const result = searchVinylResults.filter((tempData) => {
      // console.log(tempData.style[0]);
      setActiveSelected(cartItem);
      return tempData?.style[0] === cartItem;
    });

    filterDispatch({ type: "FILTER_BY_CATEGORY", payload: [...result] });

    // console.log("filter:", result);
  };

  // filter by format
  const formatFilterResult = (cartItem) => {
    const result = searchVinylResults.filter((tempData) => {
      setActiveSelected(cartItem);
      if (tempData.format[1] === "All") {
        filterDispatch({
          type: "CLEAR_FILTERS",
        });
      }
      return tempData?.format[1] === cartItem;
    });

    filterDispatch({
      type: "FILTER_BY_FORMATS",
      payload: result,
    });
  };

  return (
    <>
      <div className="filterItem">
        <h6> Filter by style</h6>
        <div className="filter-btn-list">
          <button
            onClick={() =>
              filterDispatch({
                type: "CLEAR_FILTERS",
              })
            }
            className={`filter-btn ${
              activeSelected ? activeSelected : "active"
            }`}
          >
            All
          </button>
          <button
            onClick={() => categoryFilterResult("Reggae")}
            className={`filter-btn ${
              activeSelected === "Reggae" ? "active" : null
            }`}
          >
            Reggae
          </button>
          <button
            onClick={() => categoryFilterResult("Dancehall")}
            className={`filter-btn ${
              activeSelected === "Dancehall" ? "active" : null
            }`}
          >
            Dancehall
          </button>
          <button
            onClick={() => categoryFilterResult("Dub")}
            className={`filter-btn ${
              activeSelected === "Dub" ? "active" : null
            }`}
          >
            Dub
          </button>
        </div>
      </div>

      <div className="filterItem">
        <h6>Filter by formats</h6>
        <div className="filter-btn-list">
          <button
            onClick={() => formatFilterResult('7"')}
            className={`filter-btn ${
              activeSelected === '7"' ? "active" : null
            }`}
          >
            7 Inch
          </button>
          <button
            onClick={() => formatFilterResult("LP")}
            className={`filter-btn ${
              activeSelected === "LP" ? "active" : null
            }`}
          >
            LP
          </button>
          <button
            onClick={() => formatFilterResult('12"')}
            className={`filter-btn ${
              activeSelected === '12"' ? "active" : null
            }`}
          >
            12 Inch
          </button>
          <button
            onClick={() => formatFilterResult('10"')}
            className={`filter-btn ${
              activeSelected === '10"' ? "active" : null
            }`}
          >
            10 Inch
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            backgroundColor: "grey",

            border: "none",
          }}
          // variant="success"
          onClick={() =>
            filterDispatch(
              {
                type: "CLEAR_FILTERS",
              },
              setActiveSelected(!activeSelected)
            )
          }
        >
          Clear Filters
        </Button>
      </div>
    </>
  );
};

export default FilterSearch;
