import React from 'react';
import '../styles/Bio.css';
import me from '../images/meBearded.jpg'

const styles = {
    bioStyles: {
        background: 'buckwheat',
    },
};

function Bio() {
    return (
        <section style={styles.bioStyles} className="section">
            <img src={me} alt='picture of me'></img>
            <h2>Hello! My name is Sam Teel and thank you for taking the time to visit my site! I am a full stack developer with an interest in all things code. I graduated from a coding bootcamp run by Carleton University, which was a 24 week long course.</h2>
        </section>
    );
}

export default Bio;