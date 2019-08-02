import React from 'react';
import Contact from './Contact';

const Footer = () => {
    return (
        <footer>
            <div className="ui stackable grid container">
                <div id="footerLogoContainer" className="column five wide">
                    <img src="assets/images/logo/logo.png" alt="TCPS" className="logo" />
                </div>
                <div id="footerContactContainer" className="column eleven wide">
                    <Contact />
                </div>
            </div>
        </footer>
    );
};

export default Footer;