import React from 'react';
import { Link } from 'react-router-dom';

const SitebarItems = () => {
    return (
        <div id="sitebarItems">
            <div className="logo py-4">
                <h3 className="text-center text-light">massage and spa</h3>
            </div>
            <ul className="list-group">
                <li>
                    <Link to="/admin/addservice" className="list-group-item  bg-transparent mb-3">Add Service</Link>
                </li>
                <li>
                    <Link to="/admin/manage-order" className="list-group-item  bg-transparent mb-3">Manage</Link>
                </li>
                <li>
                    <Link to="admin/add-admin" className="list-group-item  bg-transparent mb-3">Add Admin</Link>
                </li>
                <li>
                    <Link to="admin/order-list" className="list-group-item  bg-transparent mb-3">Order List</Link>
                </li>
            </ul>
        </div>
    );
};

export default SitebarItems;