import React from 'react';

const Footer = (props) => {
    return (
        <footer className="footer">
            <ul className="footer__ul">
                <li className="footer__li"><a href="https://www.linkedin.com/in/kelsny/"><img src="images/linkedin.svg" alt="LinkedIn icon" className="footer__icon" /></a></li>
                <li className="footer__li"><a href="https://github.com/kellyasnyder"><img src="images/github.svg" alt="Github icon" className="footer__icon" /></a></li>
                <li className="footer__li"><a href="https://www.instagram.com/d.kfma/"><img src="images/instagram.svg" alt="Instagram icon" className="footer__icon" /></a></li>
            </ul>
        </footer>
    )
}

export default Footer;