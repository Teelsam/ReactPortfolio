import React from 'react';//imports react functionality
import '../styles/Bio.css';//imports css designs
import me from '../images/meBearded.jpg'//imports image of me


function Bio() { //function returns the html of my bio section of an image and a caption
    return (
        <section className="bioSection">
            <img id='imageMe' src={me} alt='picture of me'></img>
            <section id="bioCapSection">
                <p id="bioCaption">Hello! My name is Sam Teel and thank you for taking the time to visit my site! I am a full stack developer with an interest in all things code. I graduated from a coding bootcamp run by Carleton University, which was a 24 week long course. Please explore my site! </p>
            </section>
        </section>
    );
}

export default Bio;