import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IonIcon } from '@ionic/react'; 
import { menu, close, } from 'ionicons/icons'; 
import notificationIcon from '../images/notification-icon.png';
import Notification from './Notification';


const MobileHeader = ({ logo }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn");

    // Set header-buttons to display none if logged in
    const headerButtonsClass = isLoggedIn ? 'header-buttons hidden' : 'header-buttons';

    return (
        <nav className="mobile-navbar">
            <div className="navbar-header">
                <NavLink to="/" className="nav-logo">
                    <img src={logo} alt="agrotop logo" />
                </NavLink>
                <button onClick={handleToggle} className="navbar-toggler">
                    <IonIcon icon={isOpen ? close : menu} />
                </button>
            </div>

            <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <ul className="navbar-links">
                    <li><NavLink to="/" activeclassname="active" onClick={() => setIsOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/listings" activeclassname="active" onClick={() => setIsOpen(false)}>Listings</NavLink></li>
                    <li><NavLink to="/about" activeclassname="active" onClick={() => setIsOpen(false)}>About</NavLink></li>
                    <li><NavLink to="/contact" activeclassname="active" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
                </ul>

                <div className={headerButtonsClass}>
                    {isLoggedIn ? (
                        <div className='account-notification'>
                            <Link to='/user-account'>My Account</Link>
                            <Notification />
                        </div>
                    ) : (
                        <>
                            <Link to="/login">
                                <button type="button" className="login">Log in</button>
                            </Link>
                            <Link to="/signup">
                                <button type="button" className="sign-up">Sign up</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default MobileHeader;