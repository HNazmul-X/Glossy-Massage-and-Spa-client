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
                    <Link to="/admin/addservice" className="list-group-item  bg-transparent mb-3">
                        <i class="fas fa-plus-circle p-2 rounded-circle text-danger me-2 bg-light"></i> Add Service
                    </Link>
                </li>
                <li>
                    <Link to="/admin/manage-order" className="list-group-item  bg-transparent mb-3">
                        <i class="fas fa-tools p-2 rounded-circle text-danger me-2 bg-light"></i> Manage Service
                    </Link>
                </li>
                <li>
                    <Link to="/admin/add-admin" className="list-group-item  bg-transparent mb-3">
                        <i class="fas fa-user-plus p-2 rounded-circle text-danger me-2 bg-light"></i> Add Admin
                    </Link>
                </li>
                <li>
                    <Link to="/admin/order-list" className="list-group-item  bg-transparent mb-3">
                        <i class="fas fa-stream p-2 rounded-circle text-danger me-2 bg-light"></i> Order List
                    </Link>
                </li>
                <li>
                    <Link to="/" className="list-group-item  bg-transparent mb-3">
                        <i class="fas fa-share p-2 rounded-circle text-danger me-2 bg-light"></i> Go to Home
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SitebarItems;