import React, { useState } from "react";
import logo from '../images/logo.png';
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { appsOutline, mailOutline, swapHorizontalOutline, homeOutline, personOutline, logOutOutline, radioButtonOffOutline, chevronDownOutline, chevronUpOutline, radioButtonOnOutline, person } from "ionicons/icons";

const DashboardSidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const [isListingsOpen, setIsListingsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);


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

    const toggleListingsAccordion = () => {
        setIsListingsOpen(!isListingsOpen);
    };

    const toggleProfileAccordion = () => {
        setIsProfileOpen(!isProfileOpen);
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
                    <li className="accordion-item">
                        <div className="accordion-header" onClick={toggleListingsAccordion}>
                            <div className="accordion-title">
                                <IonIcon icon={homeOutline} className="nav-icons" />
                                Manage Listings
                            </div>
                            <IonIcon 
                                icon={isListingsOpen ? chevronUpOutline : chevronDownOutline} 
                                className="accordion-icon" 
                            />
                        </div>
                        {isListingsOpen && (
                            <ul className="accordion-content">
                                <li>
                                    <NavLink 
                                        to="/create-listings" 
                                        activeclassname="active" 
                                        onClick={handleNavLinkClick}
                                    >
                                        <IonIcon icon={radioButtonOffOutline} className="nav-icons" />
                                        Create Listings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/user-favorites" 
                                        activeclassname="active" 
                                        onClick={handleNavLinkClick}
                                    >
                                        <IonIcon icon={radioButtonOffOutline} className="nav-icons" />
                                        My Favorites
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/user-listings" 
                                        activeclassname="active" 
                                        onClick={handleNavLinkClick}
                                    >
                                        <IonIcon icon={radioButtonOffOutline} className="nav-icons" />
                                        My Properties
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="accordion-item">
                        <div className="accordion-header" onClick={toggleProfileAccordion}>
                            <div className="accordion-title">
                                <IonIcon icon={personOutline} className="nav-icons" />
                                Account Settings
                            </div>
                            <IonIcon 
                                icon={isListingsOpen ? chevronUpOutline : chevronDownOutline} 
                                className="accordion-icon" 
                            />
                        </div>
                        {isProfileOpen && (
                            <ul className="accordion-content">
                                <li>
                                    <NavLink 
                                        to="/user-profile" 
                                        activeclassname="active" 
                                        onClick={handleNavLinkClick}
                                    >
                                        <IonIcon icon={radioButtonOffOutline} className="nav-icons" />
                                        My Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/change-password" 
                                        activeclassname="active" 
                                        onClick={handleNavLinkClick}
                                    >
                                        <IonIcon icon={radioButtonOffOutline} className="nav-icons" />
                                        Change Password
                                    </NavLink>
                                </li>
                            </ul>
                        )}
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