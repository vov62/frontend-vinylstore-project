import React from 'react'
import DataCard from '../DataCard/DataCard';
import './DataListStyle.css';
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import leftArrow from '../../assets/lerft-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';


const DataList = ({ data }) => {

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={leftArrow} alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={rightArrow} alt="nextArrow" {...props} />
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className="cardList">
                <Slider {...settings}>
                    {data.map((item, i) => {
                        return (
                            <DataCard
                                key={i}
                                image={item.cover_image}
                                title={item.title}
                                label={item.label[0]}
                                id={item.id}
                                item={item}
                            />
                        )
                    }
                    )}
                </Slider>
            </div>
        </>
    )
}

export default DataList