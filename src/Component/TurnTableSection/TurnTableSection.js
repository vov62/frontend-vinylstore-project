import React from "react";
import TurnTableList from "../TurnTableList/TurnTableList";
import { imageData } from "../../images/image";
import { v4 as uuid } from "uuid";
import "./turnTableSection.css";

const TurnTableSection = () => {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  return (
    <>
      <div className="turnTable-container">
        <div className="turnTable-wrapper">
          <h2>Our Best TurnTables</h2>
          <div className="turnTable-data">
            {imageData.map((item, i) => {
              return <TurnTableList item={item} key={i} small_id={small_id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TurnTableSection;
