import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../Components/Contextapi/CustomContext';
import AddAdmin from '../AdminContent/AddAdmin/AddAdmin';
import AddServices from '../AdminContent/AdServices/AddServices';
import ManageOrder from '../AdminContent/AdServices/ManageOrder';

import ManageService from '../AdminContent/ManageService/ManageService';
import "./AdminLayout.css"
import SitebarItems from './SitebarItems';

const AdminLayout = () => {
    const {loggedInUser} = useContext(UserContext)
    const {panelId} = useParams()
    console.log(panelId)


    return (
        <div id="admin">
            <aside className="sitebar border-right">
                <SitebarItems />
            </aside>
            <main className="main-content">
                <div className="row">
                    <div className="row border-bottom align-items-center" style={{ background: "#210b11" }}>
                        <div className="col-md-4"></div>
                        <div className="col-md-4 text-center">
                            <h3 className="text-light">{loggedInUser.displayName}</h3>
                        </div>
                        <div className="col-md-4 text-end">
                            <img src={loggedInUser.photoURL} style={{ width: "50px" }} className="img-fluid rounded bg-light border-2 rounded-circle" alt="" />
                        </div>
                    </div>
                </div>

                {/* admin content will rendar the condition of url parameters */}
                {panelId === "addservice" && <AddServices />}
                {panelId === "manage-order" && <ManageService />}
                {panelId === "order-list" && <ManageOrder />}
                {panelId === "add-admin" && <AddAdmin />}
            </main>
        </div>
    );
};

export default AdminLayout;