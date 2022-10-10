import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import './paginationStyle.css';


const PaginationCustom = ({ totalVinylPosts, vinylPostsPerPage, setCurrentPage, currentPage }) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalVinylPosts / vinylPostsPerPage); i++) {
        pages.push(i)

    }

    return (
        <div className='pagination-container'>
            {pages.map((page, i) =>
                <button
                    key={i}
                    onClick={() => setCurrentPage(page)}
                    className={page === currentPage ? 'active' : ''}
                >
                    {page}
                </button>
            )}
        </div>
    )
}

export default PaginationCustom