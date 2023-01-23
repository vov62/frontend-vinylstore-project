import React from "react";
import DataCard from "../DataCard/DataCard";
import Slider from "react-slick";
import leftArrow from "../../assets/lerft-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import noImage from "../../assets/no image.jpeg";
import "./DataListStyle.css";

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
    slidesToShow: 5,
    slidesToScroll: 3,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {data.map((item, i) => {
          return (
            <DataCard
              key={i}
              image={item.cover_image ? item.cover_image : noImage}
              title={item.title}
              label={item.label[0]}
              id={item.id}
              format={item.format[1]}
              country={item.country}
            />
          );
        })}
      </Slider>
    </>
  );
};

export default DataList;
