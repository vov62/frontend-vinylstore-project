import React, { useContext, useState } from 'react';
import { imageData } from '../../images/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container } from 'react-bootstrap';
import './Home.css';
import DataList from '../../Component/DataList/DataList';
import { useGlobalContext } from '../../context/Context';
import PaginationCustom from '../../Component/Pagination/PaginationCustom';


const Home = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [vinylPostsPerPage, setVinylPostsPerPage] = useState(5);


    const { state: { data } } = useGlobalContext();
    // console.log(data);

    // pagination
    const lastVinylIndex = currentPage * vinylPostsPerPage;
    const firstVinylIndex = lastVinylIndex - vinylPostsPerPage;
    const currentVinyl = data.slice(firstVinylIndex, lastVinylIndex)

    return (
        <>
            <Carousel
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}
            >
                {imageData.map((img, i) => (
                    <div className="carousel-card" key={i}>
                        <img src={img.imgLink} alt="headerImg" />
                    </div>
                ))}
            </Carousel>


            <div className="vinyl-section">
                <div className="vinyl-section-title">
                    <h4> 1980 Hits</h4>
                    <div className="vinyl-selection-list">
                        <DataList data={currentVinyl} />
                        <PaginationCustom
                            totalVinylPosts={data.length}
                            vinylPostsPerPage={vinylPostsPerPage}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>


        </>



    )
}

export default Home