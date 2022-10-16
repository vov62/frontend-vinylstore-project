import React, { useState } from 'react'
import './paginationStyle.css';


const PaginationCustom = ({ totalVinylPosts, vinylPostsPerPage, setCurrentPage, currentPage }) => {

    // pagination page limit
    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalVinylPosts / vinylPostsPerPage); i++) {
        pages.push(i)

    }

    const renderPageNumbers = pages.map((page, i) => {
        if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
            return (
                <button
                    key={i}
                    onClick={() => setCurrentPage(page)}
                    className={page === currentPage ? 'active' : ''}
                >
                    {page}
                </button>
            )

        } else {
            return null
        }
    });

    const handleNexBtn = () => {
        setCurrentPage(currentPage + 1)

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1)

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    return (
        <div className='pagination-container'>
            <button
                onClick={handlePrevBtn}
                disabled={currentPage === pages[0] ? true : false}
                className='arrow-btn'
            >
                &lt;&lt;
            </button>
            {renderPageNumbers}
            <button
                onClick={handleNexBtn}
                disabled={currentPage === pages[pages.length - 1] ? true : false}
                className='arrow-btn'
            >
                &gt;&gt;
            </button>
        </div>
    )
}

export default PaginationCustom