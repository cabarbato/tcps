import React from 'react';
import Contact from './Contact';

const Footer = () => {
    return (
        <footer>
            <div className="ui fifteen wide column doubling stackable grid container middle aligned ">
                <div className="column five wide">
                    <img src="assets/images/logo-b.png" alt="TCPS" className="logo" />
                </div>
                <div className="column ten wide">
                    <Contact />
                </div>
            </div>
        </footer>
    );
};

export default Footer;