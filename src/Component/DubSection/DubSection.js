import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/Context';
import DataList from '../DataList/DataList';
import Loading from '../Loading';
import PaginationCustom from './../Pagination/PaginationCustom';
import './DubSectionStyle.css';


const Labels = () => {
    const { state: { dubData, loading, error } } = useGlobalContext();
    // console.log(dubData);

    const [currentPage, setCurrentPage] = useState(1);
    const [vinylPostsPerPage, setVinylPostsPerPage] = useState(5);

    // pagination
    const lastVinylIndex = currentPage * vinylPostsPerPage;
    const firstVinylIndex = lastVinylIndex - vinylPostsPerPage;
    const currentVinyl = dubData.slice(firstVinylIndex, lastVinylIndex)

    return (
        <section className='vinyl-section'>
            <div className="vinyl-section-title">
                <h4>Shop Dub Reggae</h4>
                {loading && <Loading />}
                {error && { error }}
                <div className='vinyl-selection-list'>
                    <DataList data={currentVinyl} />
                    <PaginationCustom
                        totalVinylPosts={dubData.length}
                        vinylPostsPerPage={vinylPostsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                    <div className="vinyl-link">
                        <Link to='/search'>
                            Search more Dub reggae &gt;
                        </Link>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default Labels