import React from 'react'
import DataCard from '../DataCard/DataCard';
import './dataList.css';


const DataList = ({ data }) => {
    return (
        <>
            <div className="cardList">
                {data.map((item, i) => {
                    return (
                        <DataCard
                            key={i}
                            image={item.cover_image}
                            title={item.title}
                            id={item.id}
                        />
                    )
                }
                )}
            </div>
        </>
    )
}

export default DataList