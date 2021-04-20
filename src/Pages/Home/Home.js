import React from "react";
import Slider from "../../Components/Slider/Slider";
import { sliderItems } from "./HomePageSliderContent";
import "./Home.css";
import Services from "./Services";
import PricingSlider from "./PricingSlider";
import ShopCardSlider from "./ShopCardSlider";
import TestomonialSlider from "./TestomonialSlider";
import men_img from "../../images/guybentley.png"
import MyNavbar from "../../Components/MyNavbar/MyNavbar";

const Home = () => {
    return (
        <div id="homePage">
            <MyNavbar />
            <header id="header-section">
                <Slider items={sliderItems} />
            </header>

            <section id="services">
                <Services />
            </section>

            <section id="pricing">
                <div className="title pt-5 p-3 text-center">
                    <h1>Pricing </h1>
                    <p className="small w-75 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, similique?</p>
                </div>
                <PricingSlider />
                <div className="p-5"></div>
            </section>

            {/* <div id="feature-shop" className="py-5">
                <div className="text-center p-4">
                    <h1 className="fw-bold">Feature Shop</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>

                <div className="container">
                    <ShopCardSlider />
                </div>
            </div>

            <div id="feature-shop" className="py-5">
                <div className="text-center p-4">
                    <h1 className="fw-bold"> Shop NereBy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>

                <div className="container">
                    <ShopCardSlider />
                </div>
            </div> */}

            <div id="customer-Review">
                <div className="text-center p-3">
                    <h1 className="fw-bold"> Customer Safty is our Priority</h1>
                    <p>What's Our Client Saying About our Safety standards</p>
                </div>

                <div className="container">
                    <TestomonialSlider />
                </div>
            </div>
        </div>
    );
};

export default Home;
