import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

    const loadOrdersData = () => {
        fetch("https://glossy-massage-spa-assingment.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    };

    useEffect(() => {
        loadOrdersData();
    }, []);


     const deleteOrder = (id) => {
         console.log(id)
         fetch(`https://glossy-massage-spa-assingment.herokuapp.com/delete-order/${id}`, {
             method: "DELETE",
             headers: {
                 "content-type": "application/json",
             },
         })
             .then((res) => res.json())
             .then((data) => data && loadOrdersData());
     };


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
                                <th>Service Name</th>
                                <th>User Email</th>
                                <th>Payment Type</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map((service, index) => {
                                console.log(service);
                                const { buyerEmail, serviceName, price, paymentMethod, _id } = service;
                                return (
                                    <tr className="">
                                        <td>{index}</td>
                                        <td>{buyerEmail}</td>
                                        <td>{serviceName}</td>
                                        <td>{paymentMethod.type}</td>
                                        <td>${price}</td>
                                        <td>
                                            <i onClick={()=> deleteOrder(`${_id}`)}  class="fas fa-trash p-3 text-danger alert-danger rounded-circle"></i>
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
   

    
                        }

export default ManageOrder;