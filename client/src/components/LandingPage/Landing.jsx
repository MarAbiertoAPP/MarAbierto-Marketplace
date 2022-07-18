import React from "react";

import landing from "../LandingPage/landing.module.css";
import nftData from "../LandingPage/SliderNftData";
import EmblaCarousel from "./Carousel/EmblaCarousel";

const SLIDE_COUNT = nftData.length;
const slides = Array.from(Array(SLIDE_COUNT).keys());
const Landing = () => {
  return (
    <div className={landing.Container}>
      <EmblaCarousel slides={slides} />
    </div>
  );
};

export default Landing;
