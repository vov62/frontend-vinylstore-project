import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/Context';
import DataList from '../DataList/DataList';
import Loading from '../Loading';

const Labels = () => {
    const { dubData, loading, error } = useGlobalContext();
    // console.log(dubData);

    return (
        <section className='vinyl-section'>
            <div className="vinyl-section-title">
                <h4>Shop Dub Hits</h4>
                {loading && <Loading />}
                {error && <h2>{error}</h2>}
                <div className='vinyl-selection-list'>
                    <DataList data={dubData} />
                    <div className="vinyl-link">
                        <Link to='/search'>
                            More Dub Hits &gt;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Labels