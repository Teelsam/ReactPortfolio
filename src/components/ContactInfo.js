import React from 'react';
import coffeeImage from '../images/ContactInfoImage.jpg';
import '../styles/ContactInfo.css'; 
function ContactInfo() {
    return (
        <section className='formSection'>
            <p id="contactInfoCaption">Please Enter your name and email for visitor records.</p>
            <form className='form'>
                <section id='nameSection'>
                    <label>Name</label>
                    <input />
                </section>
                <section id='emailSection'>
                    <label>Email</label>
                    <input />
                </section>
                <button id="Btn">Submit</button>
            </form>
            <img src={coffeeImage} alt='coffee and notebook' id='coffeeImage'></img>
        </section>
    )
}
export default ContactInfo;

//checks that email is fitting email format, needs a useRef(?) or useState to alert that its a success 