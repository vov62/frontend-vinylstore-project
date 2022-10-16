import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";


const Loading = ({ color = 'brown' }) => {

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <ScaleLoader color={color} />
        </div>
    )
}

export default Loading