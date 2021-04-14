import React from 'react';
import Slider from '../../Components/Slider/Slider';
import {pricingSlidercontent} from "./HomePageSliderContent"

const PricingSlider = () => {







    return (
        <section id="pricing-card-section" className="container">
            <Slider items={pricingSlidercontent}></Slider>
        </section>
    );
};

export default PricingSlider;