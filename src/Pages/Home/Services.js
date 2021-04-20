import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Servicesbox from '../../Components/ServicesBox/Servicesbox';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=> {
        fetch("https://glossy-massage-spa-assingment.herokuapp.com/services").then(res => res.json())
        .then(data => setServices(data) )
    },[])

    return (
        <div>
            <div id="service">
                <div id="home-services" className="pt-5">
                    <div className="container p-4">
                        <div className="services-container serviceBox-cover-shadow  p-3">
                            <div className="p-3 text-center">
                                <h2 className="text-center fw-bold">Home Services</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, exercitationem!</p>
                            </div>

                            <div className="row row-cols-6 justify-content-center">
                                {services.map((service) => (
                                    <Servicesbox id={service._id} text={service.name} image={service.imge}></Servicesbox>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5"></div>
            </div>
        </div>
    );
};

export default Services;