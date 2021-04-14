import React from 'react';
import Slider from '../../Components/Slider/Slider';
import { sliderItems } from './HomePageSliderContent';
import "./Home.css"
import Servicesbox from '../../Components/ServicesBox/Servicesbox';
import Services from './Services';
import PricingSlider from './PricingSlider';

const Home = () => {

    


    return (
        <div id="homePage">
            <header id="header-section">
                <Slider items={sliderItems} />
            </header>
            <Services/>
            <PricingSlider/>
        </div>
    );
};

export default Home;