import React from 'react';
import styled from 'styled-components';
import Slider from '../../Components/Slider/Slider';
import quote_icon from "../../images/Screenshot_7.png"
import manImage from "../../images/guybentley.png"

const TestomonialSlider = () => {



      const TestomonialSliderCarddiv = styled.div`
          padding: 40px;
          .review-text {
              background: #e95f84;
              border-radius:40px;
              padding:20px 10px;
              color:white;
          }
          .reviewed-user{
              img{
                  width:180px;
                  height:180px;
              }
          }
      `;

    const testomonialSliderCardItems = [1,2,3,4,5,5].map(item => {
        return(

            <TestomonialSliderCarddiv>
                <div className="row align-items-center">
                    <div className="col-lg-8 review-text">
                        <div className="row p-4" >
                            <div className="col-2">
                                <img className="img-fluid" src={quote_icon} alt=""/>
                            </div>
                            <div className="col-10">
                                <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis iusto quod voluptatibus nulla saepe asperiores dolores doloribus earum pariatur aut temporibus, in dolore praesentium laboriosam aliquam nostrum cum a reprehenderit. Quaerat, obcaecati magni hic in aliquam nam doloremque quam!</p>

                                <div className="p-2"></div>
                                <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, molestiae?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center">
                        <div className="reviewed-user">
                            <img src={manImage} alt="" className="img-fluid p-3 rounded-circle"/>
                            <div className="name">
                                <h6>Michel JackSon</h6>
                                <p className="small">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </TestomonialSliderCarddiv>



        )
    })





  



    return (
        <Slider items={testomonialSliderCardItems}/>
    );
};

export default TestomonialSlider;