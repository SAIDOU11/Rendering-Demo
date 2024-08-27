"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@/components/theme-provider";

const ClientRoutePage = () => {
  const theme = useTheme();

  const settings = {
    dots: true,
  };
  return (
    <div className="h-screen ">
      <div
        className="image-slider-container 
   "
      >
        <h1 style={{ color: theme.colors.secondary }}>Client Route Page</h1>
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
