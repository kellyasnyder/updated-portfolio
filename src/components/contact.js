import React from 'react';

const Contact = () => {
    return (
        <div class="contact">
        <h3>Let's chat.</h3>
        <form name= "contact" action="#" method="get" class="contact">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" placeholder="First Name (Required)" />
            
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" placeholder="Last Name (Required)" />
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email Address (Required)" />
            
            <label for="workplace">Place of Work:</label>
            <input type="text" id="workplace" name="workplace" placeholder="Place of Work (Required)" />
            
            <label for="comments">Comments:</label>
            <textarea name="comments" id="comments" placeholder="Questions, comments, concerns, etc..." />
            <input class="submit" type="submit" name="Submit" value="submit" onClick="submitForm(event)" />
        </form>
    </div>
    )
}

export default Contact;