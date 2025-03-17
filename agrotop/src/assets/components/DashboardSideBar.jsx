import React from "react";
import logo from '../images/logo.png';
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { appsOutline, mailOutline, swapHorizontalOutline, homeOutline, personOutline, logOutOutline } from "ionicons/icons";

const DashboardSidebar = ({ className }) => {
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userData");
        localStorage.removeItem("token");
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("userData");
        sessionStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <div className={`dashboard-sidebar ${className}`}>
            <nav>
                <NavLink to="/">
                    <img src={logo} alt="agrotop logo" />
                </NavLink>

                <ul className="sidebar-links">
                    <li>
                        <NavLink to="/user-dashboard" end activeclassname="active">
                            <IonIcon icon={appsOutline} className="nav-icons" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-inbox" activeclassname="active">
                            <IonIcon icon={mailOutline} className="nav-icons" />
                            Inbox
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-transaction" activeclassname="active">
                            <IonIcon icon={swapHorizontalOutline} className="nav-icons" />
                            Transactions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-listings" activeclassname="active">
                            <IonIcon icon={homeOutline} className="nav-icons" />
                            Manage Listings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-account" activeclassname="active">
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