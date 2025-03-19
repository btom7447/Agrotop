import React from "react";
import { IonIcon } from "@ionic/react";
import { menu, close } from "ionicons/icons";

const DashboardHeaderMobile = ({ userData, toggleSidebar, isSidebarOpen }) => {
    return (
        <div className="dashboard-header-mobile">
            <div className="user-profile">
                <img
                    src="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?uid=R107376497&ga=GA1.1.1763716520.1741551944&semt=ais_hybrid"
                    alt={userData.name}
                />
                <h6>Hi, {userData.name.split(" ")[0]}</h6>
            </div>

            <button onClick={toggleSidebar} className="sidebar-toggle">
                <IonIcon icon={isSidebarOpen ? close : menu} />
            </button>
        </div>
    );
};

export default DashboardHeaderMobile;