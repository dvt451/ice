import '../../../scss/style.scss';
import React from 'react';
import Header from '../../../widgets/header/Header';
import MainContent from './MainContent';
import Footer from '../../../widgets/footer/Footer';

export default function Home() {


	return (
		<>
			<Header />
			<main className="home">
				<MainContent />
			</main>
			<Footer />
		</>
	);
}
