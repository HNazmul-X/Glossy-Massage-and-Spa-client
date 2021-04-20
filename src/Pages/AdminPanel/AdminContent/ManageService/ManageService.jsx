import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([])


    const loadServiceData = ()=>{
        fetch("https://glossy-massage-spa-assingment.herokuapp.com/services").then(res=> res.json())
        .then(data => setServices(data))
    }

    useEffect(()=> {
        loadServiceData()
    },[])



    const deleteService = (id)=> {

        fetch(`https://glossy-massage-spa-assingment.herokuapp.com/delete-service/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => data && loadServiceData());
    }

    return (
        <div>
            <div className="service-manager-box bg-light shadow-sm mt-5 col-10 mx-auto p-3 border border-2">
                <div className="px-2 pb-2 text-center">
                    <h5 className="fw-bolder ">Manage Your Order</h5>
                    <hr />
                </div>
                <div className="service-manager-table">
                    <table className="table table-hover  table-striped ">
                        <thead>
                            <tr>
                                <th>No:</th>
                                <th>Icon</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {services.map(service => {
                                console.log(service)
                                const {name, price, imge,_id} = service
                                return (
                                    <tr className="">
                                        <td>1</td>
                                        <td>
                                            <img src={imge} className=" rounded border border-aqua border-2 rounded-circle" style={{ width: "40px", height: "40px", objectFit: "cover" }} alt="" />
                                        </td>
                                        <td>{name}</td>
                                        <td>${price}</td>
                                        <td>
                                            <i onClick={()=> deleteService(`${_id}`)} class="fas fa-trash p-3 text-danger alert-danger rounded-circle"></i>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;