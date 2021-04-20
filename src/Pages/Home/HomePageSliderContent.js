import styled from "styled-components";
import PricingCard from "../../Components/PricingCard/PricingCard";
import headerSliderImg from "../../images/Group 18.png"

export const SliderItem = styled.div`
    width: 100%;
    height: 540px;
    background: url("${(props) => props.background}") no-repeat center;
    background-size: cover;
    margin:auto;

    .header-slider-content-container{
        width:100%;
        height:100%;
        position:relative;
        .big-header{
            font-size:100px;
            font-family:serif;
            color:white;
            font-weight:bolder;
            line-height:60px;
        }
        .color-theme{
            margin-top:10px;
            font-size:60px;
        }

    }
`;


const sliderItems = [1, 2, 4].map(item=> {
    return (
        <div className="container p-0 mx-auto">
            <SliderItem className="slider-item" background={headerSliderImg}>
                <div className="header-slider-content-container">
                    <div className="row p-5">
                        <div className="col-lg-6 ps-4 pt-5">
                            <h1 className="big-header m-0"> Saloon</h1>
                            <h1 className="big-header ps-5  m-0"> & spa</h1>
                            <h1 className=" color-theme ps-5  m-0"> Welcome</h1>
                        </div>
                    </div>

                    <div className="text-center">
                        <h1 className="text-light">Lorem ipsum dolor sit amet.</h1>
                        <button className="btn-brand btn-rounded px-5">Book Now</button>
                    </div>
                </div>
            </SliderItem>
        </div>
    );
})



const pricingSlidercontent = [1, 2, 4].map((item) => {
    return (
        <div style={{ width: "360px" }} className="pricing-card-item">
            <PricingCard />
        </div>
    );
});


export {sliderItems,pricingSlidercontent};