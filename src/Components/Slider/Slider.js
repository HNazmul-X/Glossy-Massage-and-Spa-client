import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Slider.css"
const Slider = ({ items }) => {
    return <AliceCarousel autoPlay autoPlayControls autoPlayStrategy="none" autoPlayInterval={5000} animationDuration={900} animationType="fadeout" infinite autoWidth  mouseTracking items={items} />;
};

export default Slider;
