import '../../../scss/style.scss';
import React from 'react';
import Header from '../../../widgets/header/Header';
import MainContent from './MainContent';
import Footer from '../../../widgets/footer/Footer';
import Ordometer from '../../../features/Ordometer';
import Transition from '../../../features/Transition';


const Home = () => {
	return (
		<>
			<Ordometer />
			<main className="home">
				<MainContent />
			</main>
		</>
	);
}

export default Transition(Home);
