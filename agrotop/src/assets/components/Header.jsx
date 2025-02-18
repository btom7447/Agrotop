import React from "react";
import logo from '../images/logo.png';
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";


const Header = () => {
    return (
        <header className="header">
            <DesktopHeader logo={logo} />
            <MobileHeader logo={logo} />
        </header>
    )
};

export default Header;