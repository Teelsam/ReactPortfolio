import React from 'react';
import '../styles/Header.css';


function Header() {
    return (
        <header  className="header">
            <h1 id='siteTitle'>Welcome to Sams Site! </h1>
            <h2 id="siteCaption">Where employers find delight!</h2>
        </header>
    );
}

export default Header;