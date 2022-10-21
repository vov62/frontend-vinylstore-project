import React from 'react'

const IDsection = ({ data }) => {
    return (
        <div>{data.map((item) => {
            <p>item.id</p>
        })}</div>
    )
}

export default IDsection