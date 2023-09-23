import React from 'react';
import '../styles/Navbar.css';
const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};
function Navbar(props) {
  const { setNewItem } = props;
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="#" onClick={() => setNewItem("Bio")}>About Me</a>
      <a href="#" onClick={() => setNewItem("Work")}>Work</a>
      <a hred="#" onClick={() => setNewItem("Resume")}>Resume</a>
      <a hred="#" onClick={() => setNewItem("ContactInfo")}>Contact Info</a>
    </nav>
  );
}

export default Navbar;