import React from "react";
import TurnTableList from "./Component/TurnTableList/TurnTableList";
import { imageData } from "./images/image";
import { v4 as uuid } from "uuid";

const TurnTableSection = () => {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  return (
    <div
      className="turnTable-container"
      style={{
        marginTop: "30px",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eef2f3",
      }}
    >
      <div className="turnTable-wrapper">
        <h2
          style={{
            color: "#2e2e2e",
            fontWeight: "600",
            fontSize: "30px",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          Our Best TurnTables
        </h2>
        <div
          className="turnTable-data"
          style={{
            // border: "1px solid #000",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "10px",
          }}
        >
          {imageData.map((item) => {
            return <TurnTableList item={item} id={small_id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TurnTableSection;
