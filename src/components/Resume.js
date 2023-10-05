import React from 'react';
import resume from '../images/ResumeWebDev.png';
import '../styles/Resume.css';

function Resume() {

    return (
        <div className='resumeSection'>
            <p id="resumeCaption">Click on my resume to see it in full!  </p>
            <a href="https://docs.google.com/document/d/1ZvQYaVgtbv-BooZcyFAzRZvnxkfWRHvb_CtiWZiLnKA/edit?usp=sharing"><img id="resumeImg" src={resume} alt="my resume" /></a>
            <div>
                <h3 id="workTitle">Developer's Proficiencies </h3>
                <ul id="workList">
                    <li>Backend Development</li>
                    <li>SQL Databases</li>
                    <li>MongoDb Databases</li>
                    <li>ExpressJS and NodeJS</li>
                    <li>RESTful APIs, Server-Side and Third-Party.</li>
                </ul>
            </div>

        </div>
    )

};

export default Resume;