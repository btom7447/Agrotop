import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Notification from './Notification';


const DesktopHeader = ({ logo }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn");

        // Set header-buttons to display none if logged in
        const headerButtonsClass = isLoggedIn ? 'header-buttons hidden' : 'header-buttons';


    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="nav-logo">
                <NavLink to="/">
                    <img src={logo} alt="agrotop logo" />
                </NavLink>
            </div>

            <ul className="navbar-links">
                <li><NavLink to="/" end activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/listings" end activeclassname="active">Listings</NavLink></li>
                <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
                <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
            </ul>

            <div className={headerButtonsClass}>
                {isLoggedIn ? (
                    <div className='account-notification'>
                        <Link to='/user-profile'>My Account</Link>
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
        </nav>
    );
};

export default DesktopHeader;