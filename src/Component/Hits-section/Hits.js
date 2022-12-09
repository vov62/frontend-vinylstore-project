import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";
import DataList from "../DataList/DataList";
import Loading from "../Loading";
import Error from "../Error";

const Hits = () => {
  const { data, loading, error } = useGlobalContext();
  // console.log(data);

  return (
    <div className="vinyl-section">
      <div className="vinyl-section-title">
        <h4> Shop 1980 Reggae Hits</h4>
        {loading && <Loading />}
        {error && <Error variant="danger">{error}</Error>}
        <div className="vinyl-selection-list">
          <DataList data={data} />
          <div className="vinyl-link">
            <Link to="/search">Search more hits &gt;</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hits;
