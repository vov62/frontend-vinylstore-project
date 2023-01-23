import React from "react";
import { useParams } from "react-router-dom";
import { imageData } from "../../images/image";

const SingleTurnTable = () => {
  const { id } = useParams();
  return (
    <div>
      SingleTurnTable {id}
      <div>
        {imageData.map((item, i) => (
          <h1>{item.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default SingleTurnTable;
