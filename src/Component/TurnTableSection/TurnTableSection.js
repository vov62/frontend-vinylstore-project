import React from "react";
import TurnTableList from "../TurnTableList/TurnTableList";
import { imageData } from "../../images/image";
import { v4 as uuid } from "uuid";
import { useGlobalContext } from "../../context/Context";
import "./turnTableSection.css";

const TurnTableSection = () => {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const { data } = useGlobalContext();

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
      {/* <div className="vinyl-label-animation">
        {data.map((vinyl) => (
          <>
            <div className="inner">
              <h6>{vinyl.label[0]}</h6>
            </div>
          </>
        ))}
      </div> */}
    </>
  );
};

export default TurnTableSection;
