import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Work from "./components/Work";
import Resume from "./components/Resume";
import ContactInfo from "./components/ContactInfo";



function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Bio />
      <Work />
      <Resume />
      <ContactInfo />
    </div>
  );
}
export default App;
