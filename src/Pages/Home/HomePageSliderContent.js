import styled from "styled-components";
import PricingCard from "../../Components/PricingCard/PricingCard";
import headerSliderImg from "../../images/Group 18.png"

export const SliderItem = styled.div`
    width: 100%;
    height: 700px;
    background: url("${(props) => props.background}") no-repeat center;
    background-size: cover;
    margin:auto;
`;


const sliderItems = [1, 2, 4].map(item=> {
    return(
        <div className="container mx-auto">
            <SliderItem className="slider-item" background={headerSliderImg}/>
        </div>
    )
})



const pricingSlidercontent = [1, 2, 4].map((item) => {
    return (
        <div className="pricing-card-item" >
           <PricingCard/>
        </div>
    );
});


export {sliderItems,pricingSlidercontent};