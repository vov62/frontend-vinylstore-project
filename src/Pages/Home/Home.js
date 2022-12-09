import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Hits from "../../Component/Hits-section/Hits";
import DubSection from "../../Component/DubSection/DubSection";
import DancehallSection from "../../Component/DancehallSection";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header>
        <div>
          <img
            src="https://images.unsplash.com/photo-1542208998-f6dbbb27a72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            width="100%"
            height="300"
            alt=""
          />
        </div>
      </header>
      <Hits />
      <DubSection />
      <DancehallSection />
    </div>
  );
};

export default Home;
