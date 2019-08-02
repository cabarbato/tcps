import React from 'react';
import Menu from './Menu';
import Slideshow from './Slideshow';

const Header = () => {
    return (
        <header>
            <Slideshow />
            <div id="hero" className="ui container"></div>
            <h1 className="ui header" >Lorem Ipsum</h1>
            <Menu />
        </header >
    );
};

export default Header;