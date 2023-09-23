import React from 'react';
import '../styles/Header.css';

const styles = {
    headerStyle: {
        background: 'blue',
    },
    headingStyle: {
        fontSize: '100px',
        color: 'green'
    },
};
function Header() {
    return (
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>Welcome to Sams Site! </h1>
            <h2>Where employers find delight!</h2>
        </header>
    );
}

export default Header;