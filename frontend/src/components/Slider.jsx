import React, { Component } from "react";
import Slider from "react-slick";
import './css/Slider.css'
function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows:false,
    centerMode:true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img></img>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;
