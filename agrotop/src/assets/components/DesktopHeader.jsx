import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
                <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/listed-properties" activeclassname="active">Listed Properties</NavLink></li>
                <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
                <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
            </ul>

            <div className="header-buttons">
                <button type="button" className="login">Log in</button>
                <button type="button" className="sign-up">Sign up</button>
            </div>
        </nav>
    );
};

export default DesktopHeader;