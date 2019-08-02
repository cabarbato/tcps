import React from 'react';
import $ from 'jquery';

export default class Header extends React.Component {
    state = {
        count: 8,
        style: {
            slide1: { backgroundImage: 'url(./assets/images/header/sample1.jpg)' },
            slide2: { backgroundImage: 'url(./assets/images/header/sample2.jpg)' },
            slide3: { backgroundImage: 'url(./assets/images/header/sample3.jpg)' },
            slide4: { backgroundImage: 'url(./assets/images/header/sample4.jpg)' },
            slide5: { backgroundImage: 'url(./assets/images/header/sample5.jpg)' },
            slide6: { backgroundImage: 'url(./assets/images/header/sample6.jpg)' },
            slide7: { backgroundImage: 'url(./assets/images/header/sample7.jpg)' },
            slide8: { backgroundImage: 'url(./assets/images/header/sample8.jpg)' },
        }
    }

    componentDidMount() {
        var i = 1;
        setInterval(() => {
            if (i < this.state.count) {
                i++
            }
            else {
                i = 1;
            }
            $('.slide').removeClass('show')
            $('#slide' + i).addClass('show')
        }, 8000);
    }

    render() {
        return (
            <div id="slideshow">
                <div id="slide1" className="slide show" style={this.state.style['slide1']}></div>
                <div id="slide2" className="slide" style={this.state.style['slide2']}></div>
                <div id="slide3" className="slide" style={this.state.style['slide3']}></div>
                <div id="slide4" className="slide" style={this.state.style['slide4']}></div>
                <div id="slide5" className="slide" style={this.state.style['slide5']}></div>
                <div id="slide6" className="slide" style={this.state.style['slide6']}></div>
                <div id="slide7" className="slide" style={this.state.style['slide7']}></div>
                <div id="slide8" className="slide" style={this.state.style['slide8']}></div>
            </div>
        )
    }
}