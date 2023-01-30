import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Hits from "../../Component/Hits-section/Hits";
import DubSection from "../../Component/DubSection/DubSection";
import DancehallSection from "../../Component/DancehallSection";
import TurnTableSection from "../../Component/TurnTableSection/TurnTableSection";
import "./Home.css";
import SkaSection from "../../Component/SkaSection/SkaSection";
import HeroSection from "../../Component/Hero-section/HeroSection";

const Home = () => {
  return (
    <>
      <header>
        <HeroSection />
      </header>
      <main>
        <Hits />
        <DubSection />
        <DancehallSection />
        <SkaSection />
        <TurnTableSection />
      </main>
    </>
  );
};

export default Home;
