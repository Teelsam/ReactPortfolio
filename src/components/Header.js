import React from 'react';
import '../styles/Header.css';
//imports for functionality

function Header() { //a simple header space with text elements
    return (
        <header className="header">
            <h1 id='siteTitle'>Welcome to Sams Site! </h1>
            <h2 id="siteCaption">Where employers find delight!</h2>
        </header>
    );
}

export default Header;