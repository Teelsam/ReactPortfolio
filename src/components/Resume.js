import React from 'react';
import resume from '../images/ResumeWebDev.png';
import '../styles/Resume.css';

function Resume() {

    return (
        <div className='resumeSection'>
            <a href="https://docs.google.com/document/d/1ZvQYaVgtbv-BooZcyFAzRZvnxkfWRHvb_CtiWZiLnKA/edit?usp=sharing"><img id="resumeImg" src={resume} alt="an image of my resume" /></a>
            <p id="resumeCaption">Click on my resume to see it in full!  </p>

        </div>
    )

};

export default Resume;