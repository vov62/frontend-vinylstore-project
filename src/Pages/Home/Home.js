import React from 'react';
import { imageData } from '../../images/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container } from 'react-bootstrap';
import './Home.css';


const Home = () => {


    return (
        <>
            <Carousel
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}
            >
                {imageData.map(img => (
                    <div className="card">
                        <img src={img.imgLink} alt="headerImg" />
                    </div>
                ))}
            </Carousel>

            <Container>
                <div className="vinyl-section">
                    <div className="vinyl-section-title">
                        <h3> 1980 Hits</h3>
                        <div className="vinyl-selection-list">

                        </div>
                    </div>
                </div>

            </Container>

        </>



    )
}

export default Home