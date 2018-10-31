import React from 'react';

const Contact = () => {
    return (
        <main className="contact">
            <h3 className="contact__h3">Let's chat.</h3>
            <form name= "contact" action="#" method="get">
                <label for="name">Name *</label>
                <input type="text" id="name" name="name" placeholder="Name" />
                
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="Email Address" />
                
                <label for="workplace">Subject *</label>
                <input type="text" id="subject" name="Subject" placeholder="Subject" />
                
                <label for="comments">Message *</label>
                <textarea name="comments" id="comments" placeholder="Questions, comments, concerns, etc..." />
                <input className="submit" type="submit" name="Submit" value="submit" />
            </form>
        </main>
    )
}

export default Contact;