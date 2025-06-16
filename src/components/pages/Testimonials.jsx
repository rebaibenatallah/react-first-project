import React from "react";
import { testimonials } from "../data/dummydata";
import { FormatQuote } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="testimonials hero">
        <div className="container">
          <Slider {...settings}>
            {testimonials.map((val, i) => (
              <div className="box" key={i}>
                <i>
                  <FormatQuote />
                  <p>{val.text}</p>
                  <div className="img">
                    <img src={val.image} alt="" />
                  </div>
                  <h3>{val.name}</h3>
                  <label htmlFor="">{val.post}</label>
                </i>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
