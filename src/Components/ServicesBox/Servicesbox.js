import React from 'react';
import styled from 'styled-components';




const ServicesBoxDiv = styled.div`
padding:20px;
text-align:center;
    img{
        background:${props => props.imageBg || "white"};
        height:${props => props.height || "100px"};
        width:${props => props.width || "100px"};
        padding:10px;
        border-radius:50%;
    }
    h6{
        padding:5px;
    }



`


const Servicesbox = ({image, text, imageBg, imgWidth, imgHeight, className}) => {

    return (
        <ServicesBoxDiv className={className} imageBg={imageBg} imgHeight={imgHeight} imgWidth={imgWidth}>
            <img className="theme-shodow-sm" src={image} alt="" />
            <h6>{text}</h6>
        </ServicesBoxDiv>
    );
};

export default Servicesbox;