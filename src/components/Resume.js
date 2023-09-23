import React from 'react';
import resume from '../images/ResumeWebDev.png';

function Resume() {

    return (
        <div>
            <a id="resumeImg" href="https://docs.google.com/document/d/1ZvQYaVgtbv-BooZcyFAzRZvnxkfWRHvb_CtiWZiLnKA/edit?usp=sharing"><img src={resume} alt="an image of my resume" /></a>
            <p>Click on my resume to be taken to </p>

        </div>
    )

};

export default Resume;