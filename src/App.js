import React from 'react';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';
import { loadReCaptcha } from 'react-recaptcha-google';

export default class App extends React.Component {
	componentDidMount() {
		loadReCaptcha();
	}
	render() {
		return (
			<main>
				<Header />
				<Article />
				<Footer />
			</main>
		);
	}
};
