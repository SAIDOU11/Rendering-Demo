"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientRoutePage = () => {
  console.log("Client route rendered");

  const settings = {
    dots: true,
  };
  return (
    <div className="h-screen">
      <div
        className="image-slider-container 
   "
      >
        <h1 className="font-bold text-3xl mb-8">Client Route Page</h1>
        <Slider {...settings}>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
        </Slider>
      </div>{" "}
    </div>
  );
};

export default ClientRoutePage;
