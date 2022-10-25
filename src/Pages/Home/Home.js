import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { imageData } from '../../images/image'
import DubSection from '../../Component/DubSection/DubSection';
import Hits from '../../Component/Hits-section/Hits';
import './Home.css';
import Example from '../../Component/Example';

const Home = () => {

    return (
        <div>
            <Carousel
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
            >
                {imageData.map((img, i) => (
                    <div className="carousel-card" key={i}>
                        <img src={img.imgLink} alt="headerImg" />
                    </div>
                ))}
            </Carousel>
            <Example />
            {/* <Hits /> */}
            <DubSection />
        </div>
    )
}

export default Home