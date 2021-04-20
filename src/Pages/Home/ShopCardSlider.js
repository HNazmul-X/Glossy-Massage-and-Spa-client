import React from 'react';
import styled from 'styled-components';
import Slider from '../../Components/Slider/Slider';
import sliderdummyImge from "../../images/stylish-barber-grooming-a-mans-beard-in-a-saloon-ZDEE-3.png"

const ShopCardSlider = () => {

    const ShopSliderCarddiv = styled.div`
    width:365px;
    background:white;
    padding:20px;
    cursor: pointer;
    transition:0.3s;
    &:hover{
        img{
            transform:scale(0.9)
        }
    }
    img{
        width:100%;
        height:220px;
        object-fit:cover;
        border-radius:20px;
        transition:0.3s;

    }

    
    `




    const featureShopSlideritems = [2, 3, 4, 5,6].map(item=> {
        return (
            <ShopSliderCarddiv className="feature-shop-slider-item">
                <img src={sliderdummyImge} alt=""/>
                <div className="text py-2">
                    <h5>Lorem ipsum dolor sit amet.
                    </h5>
                    <p className="small">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, ad?</p>
                </div>
            </ShopSliderCarddiv>
        )
    })





    return (
                <Slider items={featureShopSlideritems} />
        
    );
};

export default ShopCardSlider;