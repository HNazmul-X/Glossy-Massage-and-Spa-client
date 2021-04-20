import React from 'react';
import styled from 'styled-components';
import cardImg from "../../images/tropical-spa-resort-concept-plumeria-hot-stones-to-N-1.png"






const PricingCard = () => {


const PricingCardDiv = styled.div`
    background: linear-gradient(131deg, white, pink);
    padding: 10px;
    box-sizing: border-box;
    height: 200px;
    overflow: hidden;
    border:2px double pink;
    transition:0.3s;
    cursor: pointer;
    &:hover {
        transform:translateY(-20px);
        box-shadow: 10px 30px 50px -20px pink;
    }
    .desc {
        h6,
        p {
            font-size: 12px;
        }
    }

    .img {
        img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            transform: rotate(45deg) translateY(-40px);
            border-radius: 80px;
        }
    }
`;




    return (
        <PricingCardDiv className="">
            <div className="row align-items-center">
                <div className="col-md-6 desc ps-3">
                    <h6>Lorem, ipsum.</h6>
                    <p>
                        Pricing: <span className="color-theme">$405</span>
                    </p>
                </div>
                <div className="col-md-6 img">
                    <img className="img-fluid" src={cardImg} alt="" />
                </div>
            </div>
        </PricingCardDiv>
    );
};

export default PricingCard;