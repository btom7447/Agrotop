import React from "react";
import logo from '../images/logo.png';
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { appsOutline, mailOutline, swapHorizontalOutline, homeOutline, personOutline, logOutOutline } from "ionicons/icons";

const DashboardSidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userData");
        localStorage.removeItem("token");
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("userData");
        sessionStorage.removeItem("token");
        window.location.reload();
    };

    // Function to handle NavLink clicks
    const handleNavLinkClick = () => {
        if (isSidebarOpen) {
            toggleSidebar(); 
        }
    };

    return (
        <div className={`dashboard-sidebar ${isSidebarOpen ? "open" : ""}`}>
            <nav>
                <NavLink to="/">
                    <img src={logo} alt="agrotop logo" />
                </NavLink>

                <ul className="sidebar-links">
                    <li>
                        <NavLink to="/user-dashboard" end activeclassname="active" onClick={handleNavLinkClick}>
                            <IonIcon icon={appsOutline} className="nav-icons" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-inbox" activeclassname="active" onClick={handleNavLinkClick}>
                            <IonIcon icon={mailOutline} className="nav-icons" />
                            Inbox
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-transactions" activeclassname="active" onClick={handleNavLinkClick}>
                            <IonIcon icon={swapHorizontalOutline} className="nav-icons" />
                            Transactions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-listings" activeclassname="active" onClick={handleNavLinkClick}>
                            <IonIcon icon={homeOutline} className="nav-icons" />
                            Manage Listings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-account" activeclassname="active" onClick={handleNavLinkClick}>
                            <IonIcon icon={personOutline} className="nav-icons" />
                            Account Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <button type="button" className="logout-btn" onClick={() => handleLogout()}>
                <IonIcon icon={logOutOutline} className="nav-icons" />
                Logout
            </button>
        </div>
    );
};

export default DashboardSidebar;