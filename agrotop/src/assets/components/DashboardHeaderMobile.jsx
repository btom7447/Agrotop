import React from "react";
import { IonIcon } from "@ionic/react";
import { menu, close } from "ionicons/icons";
import notificationIcon from '../images/notification-icon.png';
import Notification from "./Notification";

const DashboardHeaderMobile = ({ userData, toggleSidebar, isSidebarOpen }) => {
    const placeholder = "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?uid=R107376497&ga=GA1.1.1763716520.1741551944&semt=ais_hybrid";
    return (
        <div className="dashboard-header-mobile">
            <div className="user-profile">
                <img
                    src={!userData.image ? placeholder : userData.image}
                    alt={userData.name}
                />
                <h6>Hi, {userData.name.split(" ")[0]}</h6>
            </div>

            <div className="user-profile">
                <Notification />
                <button onClick={toggleSidebar} className="sidebar-toggle">
                    <IonIcon icon={isSidebarOpen ? close : menu} />
                </button>
            </div>
        </div>
    );
};

export default DashboardHeaderMobile;