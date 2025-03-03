import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const DesktopHeader = ({ logo }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

            <div className="header-buttons">
                <Link to="/login">
                    <button type="button" className="login">Log in</button>
                </Link>
                <Link to="/signup">
                    <button type="button" className="sign-up">Sign up</button>
                </Link>
            </div>
        </nav>
    );
};

export default DesktopHeader;