import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IonIcon } from '@ionic/react'; 
import { menu, close, person } from 'ionicons/icons'; 

const MobileHeader = ({ logo }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

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
                    <li><NavLink to="/listed-properties" activeclassname="active" onClick={() => setIsOpen(false)}>Listed Properties</NavLink></li>
                    <li><NavLink to="/about" activeclassname="active" onClick={() => setIsOpen(false)}>About</NavLink></li>
                    <li><NavLink to="/contact" activeclassname="active" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
                </ul>

                <div className="header-buttons">
                    <button type="button" className="login">Log in</button>
                    <button type="button" className="sign-up">Sign up</button>
                </div>
            </div>
        </nav>
    );
};

export default MobileHeader;