import React, { useState } from 'react';
import coffeeImage from '../images/ContactInfoImage.jpg';
import { validateEmail } from '../utils/helpers';
import '../styles/ContactInfo.css';
//imports pieces to be used in the function and returned html

function ContactInfo() {
    //here States are created for user data which is error checked and returns html elements
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else { }
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or name invalid');
            return;
        } else if (!message) {
            setErrorMessage('Please type a message :)');
        }
        alert(`Hello ${userName}`);
        setEmail('');
        setUserName('');
        setMessage('');
        setErrorMessage('');
    }

    return (
        <section className='formSection'>
            <p id="contactInfoCaption">Please Enter your name and email for visitor records.</p>
            <form className='form'>
                <section id='nameSection'>
                    <label>Name: </label>
                    <input
                        value={userName}
                        name="userName"
                        onChange={handleInputChange}
                        type="text"
                    />
                </section>
                <section id='emailSection'>
                    <label>Email: </label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"

                    />
                </section>
                <section id='msgSection'>
                    <label>Message: </label>
                    <textarea rows="4" colums="40"></textarea>
                </section>
                <button type="button" onClick={handleFormSubmit} id="btn">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className='errorText'>{errorMessage}</p>
                </div>
            )}
            <section className='coffeeImageSection'>
                <img src={coffeeImage} alt='coffee and notebook' id='coffeeImage'></img>

            </section>
        </section>
    )
}
export default ContactInfo;

