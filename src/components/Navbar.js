import React from 'react';
import '../styles/Navbar.css';

function Navbar(props) {
  const { setNewItem } = props;
  return (
    <nav className="navbar">
      <a href="#" id="bioAnchor" onClick={() => setNewItem("Bio")}>About Me </a>
      <a href="#" id="workAnchor" onClick={() => setNewItem("Work")}> Work  </a>
      <a hred="#" id="resumeAnchor" onClick={() => setNewItem("Resume")}>  Resume </a>
      <a hred="#" id="contactInfoAnchor" onClick={() => setNewItem("ContactInfo")}> Contact Info </a>
    </nav>
  );
}

export default Navbar;