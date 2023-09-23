import React from 'react';
import resume from '../../images/ResumeWebDev.png';

function Resume (){
    return (
        <div>
            <img src = {resume} alt= "an image of my resume"><a href="https://docs.google.com/document/d/1ZvQYaVgtbv-BooZcyFAzRZvnxkfWRHvb_CtiWZiLnKA/edit?usp=sharing"></a></img>
        </div>
    )
}

export default Resume;