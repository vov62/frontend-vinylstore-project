import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";


const Loading = ({ color = '' }) => {

    return (
        <>
            <div style={{
                position: 'absolute',
                top: '30%',
                left: '45%'

            }}>
                <ClipLoader color='red' size={50} />
                <div>Loading...</div>
            </div>
        </>
    )
}

export default Loading