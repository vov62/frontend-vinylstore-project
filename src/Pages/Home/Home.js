import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { imageData } from "../../images/image";
import DubSection from "../../Component/DubSection/DubSection";
import Hits from "../../Component/Hits-section/Hits";
import "./Home.css";
import Example from "../../Component/Example";
import DancehallSection from "../../Component/DancehallSection";

const Home = () => {
  return (
    <div>
      {/* <Carousel
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
            >
                {imageData.map((img, i) => (
                    <div className="carousel-card" key={i}>
                        <img src={img.imgLink} alt="headerImg" width='100%' height='400' />
                    </div>
                ))}
            </Carousel> */}
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
      <Example />
      {/* <Hits /> */}
      <DubSection />
      <DancehallSection />
    </div>
  );
};

export default Home;
