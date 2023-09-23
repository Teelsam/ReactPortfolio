import React from 'react';
import '../styles/Bio.css';
import me from '../images/meBearded.jpg'


function Bio() {
    return (
        <section className="bioSection">
            <img id='imageMe' src={me} alt='picture of me'></img>
            <p id="bioCaption">Hello! My name is Sam Teel and thank you for taking the time to visit my site! I am a full stack developer with an interest in all things code. I graduated from a coding bootcamp run by Carleton University, which was a 24 week long course. Please explore my site! </p>
        </section>
    );
}

export default Bio;