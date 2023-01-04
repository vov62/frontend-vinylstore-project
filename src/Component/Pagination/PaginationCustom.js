import React, { useState } from "react";
import "./paginationStyle.css";

const PaginationCustom = ({
  totalVinylPosts,
  vinylPostsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  // pagination page limit
  const [pageNumberLimit, setPageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(50);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVinylPosts / vinylPostsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((page, i) => {
    if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
      return (
        <button
          key={i}
          onClick={() => setCurrentPage(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      );
    } else {
      return null;
    }
  });

  const handleNexBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div className="pagination-container">
      <button
        onClick={handlePrevBtn}
        disabled={currentPage === pageNumbers[0] ? true : false}
        className="arrow-btn"
      >
        &lt;&lt;
      </button>
      {renderPageNumbers}
      <button
        onClick={handleNexBtn}
        disabled={
          currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
        }
        className="arrow-btn"
      >
        &gt;&gt;
      </button>

      {/* <ul>
        {pageNumbers.map((page) => (
          <li key={page}>
            <a href="!#"> {page}</a>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default PaginationCustom;
