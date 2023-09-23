import React from 'react';
import '../styles/Navbar.css';
const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};
function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">About Me</a>
      <a href="/">Work</a>
      <a hred="/">Resume</a>
      <a hred="/">Contact Info</a>
    </nav>
  );
}

export default Navbar;