import React from 'react';
import Menu from './Menu';

const Header = () => {
    return (
        <header>
            <div id="headerImg"></div>
            <div id="hero" className="ui container"></div>
            <h1 className="ui header" >Lorem Ipsum</h1>
            <Menu />
        </header >
    );
};

export default Header;