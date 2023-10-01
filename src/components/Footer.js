import React from 'react';
import '../styles/Footer.css';
import github from '../images/github-mark-white.png';
import linkedin from '../images/In-White-96.png';

function Footer() {
    return (
        <div className='footerSection'>
            <p id="footerCaption">Thanks for Visiting!</p>
            <a href="https://github.com/Teelsam?tab=repositories" id="myGit"><img src={github} id="gitCat" alt=" github logo"></img></a>
            <a href="https://www.linkedin.com/in/samuel-teel-11044b198/" id="myLinked"><img src={linkedin} id="linkedIn" alt=" linkedinlogo"></img></a>
        </div>
    )
}

export default Footer;