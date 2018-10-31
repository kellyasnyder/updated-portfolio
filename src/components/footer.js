import React from 'react';

const Footer = (props) => {
    return (
        <footer className="footer">
            <ul className="footer__ul">
                <li className="footer__li"><a href="https://www.linkedin.com/in/kelsny/" target="_blank" rel="noopener noreferrer"><img src="images/linkedin.svg" alt="LinkedIn icon" className="footer__icon" /></a></li>
                <li className="footer__li"><a href="https://github.com/kellyasnyder" target="_blank" rel="noopener noreferrer"><img src="images/github.svg" alt="Github icon" className="footer__icon" /></a></li>
                <li className="footer__li"><a href="https://www.instagram.com/d.kfma/" target="_blank" rel="noopener noreferrer"><img src="images/instagram.svg" alt="Instagram icon" className="footer__icon" /></a></li>
                <li className="footer__li"><a href="images/resume.pdf" download><img src="images/resume.svg" alt="Resume icon" className="footer__icon" /></a></li>
            </ul>
        </footer>
    )
}

export default Footer;