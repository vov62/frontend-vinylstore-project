import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";
import DataList from "./DataList/DataList";
import Loading from "./Loading";
import Error from "../Component/Error";
import ErrorMessage from "./Error";

const DancehallSection = () => {
  const { dancehallData, loading, error } = useGlobalContext();
  // console.log(data);

  return (
    <div className="vinyl-section">
      <div className="vinyl-section-title">
        <h4> Shop Dancehall Hits</h4>
        {loading && <Loading />}
        {error && (
          <ErrorMessage variant="danger">
            {error}
            <p>please refresh the page or check your network connection...</p>
          </ErrorMessage>
        )}
        <div className="vinyl-selection-list">
          <DataList data={dancehallData} />
          <div className="vinyl-link">
            <Link to="/SearchVinyl">More Dancehall Hits &gt;</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DancehallSection;
