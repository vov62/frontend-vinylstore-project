import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/Context';
import DataList from '../../Component/DataList/DataList';
import PaginationCustom from '../../Component/Pagination/PaginationCustom';
import Loading from '../../Component/Loading';

const Hits = () => {

    // pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [vinylPostsPerPage, setVinylPostsPerPage] = useState(5);
    const { data, loading, error } = useGlobalContext();
    // console.log(data);

    // pagination
    const lastVinylIndex = currentPage * vinylPostsPerPage;
    const firstVinylIndex = lastVinylIndex - vinylPostsPerPage;
    const currentVinyl = data.slice(firstVinylIndex, lastVinylIndex)

    return (
        <div className="vinyl-section">
            <div className="vinyl-section-title">
                <h4> 1980 Reggae Hits</h4>
                {loading && <Loading />}
                {error && <h2>{error}</h2>}
                <div className="vinyl-selection-list">
                    <DataList data={currentVinyl} />
                    <PaginationCustom
                        totalVinylPosts={data.length}
                        vinylPostsPerPage={vinylPostsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                    <div className="vinyl-link">
                        <Link to='/search'>
                            Search more hits &gt;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hits