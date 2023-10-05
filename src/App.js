import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Work from "./components/Work";
import Resume from "./components/Resume";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
//imports for functionality



function App() {// this function forms the master plan of how React will use component files.
  const [newItem, setNewItem] = useState("Bio");
  function displayPage() {//checks state of newItem to decided what component to load.
    if (newItem === "Bio") {
      return <Bio />
    }
    if (newItem === "Work") {
      return <Work />
    }
    if (newItem === "Resume") {
      return <Resume />
    }
    if (newItem === "ContactInfo") {
      return <ContactInfo />
    }
  }
  return (
    <div>
      <Header />
      <Navbar setNewItem={setNewItem} />
      {displayPage()}
      <Footer />
    </div>
  );
}
export default App;
