import React from 'react';
import { useParams } from 'react-router';
import AddServices from '../AdminContent/AdServices/AddServices';
import "./AdminLayout.css"
import SitebarItems from './SitebarItems';

const AdminLayout = () => {

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
                            <h3 className="text-light">User Name</h3>
                        </div>
                        <div className="col-md-4 text-end">
                            <img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" style={{ width: "50px" }} className="img-fluid rounded bg-light border-2 rounded-circle" alt="" />
                        </div>
                    </div>
                </div>

                {/* admin content will rendar the condition of url parameters */}
                {panelId === "addservice" && <AddServices />}
                {panelId === "manage-order" && <AddServices />}
            </main>
        </div>
    );
};

export default AdminLayout;