import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Let's chat.</h2>
            <form name= "contact" action="#" method="get">
                <label for="name">Name *</label>
                <input type="text" id="name" name="name" placeholder="Name" />
                
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="Email Address" />
                
                <label for="workplace">Subject *</label>
                <input type="text" id="subject" name="Subject" placeholder="Subject" />
                
                <label for="comments">Message *</label>
                <textarea name="comments" id="comments" placeholder="Questions, comments, concerns, etc..." />
                <input class="submit" type="submit" name="Submit" value="submit" onClick="submitForm(event)" />
            </form>
        </div>
    )
}

export default Contact;