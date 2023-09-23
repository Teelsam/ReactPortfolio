import React from 'react';

function ContactInfo() {
    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input/>
                </div>
                <div>
                    <label>Email</label>
                    <input/>
                </div>
                <button>Submit</button> 
            </form>
        </div>
    )
}
 export default ContactInfo;

 //checks that email is fitting email format, needs a useRef(?) or useState to alert that its a success 