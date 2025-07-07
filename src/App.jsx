import { BrowserRouter, Link, useLocation, Route, Router, Routes } from 'react-router-dom'
import MyContextProvider from './shared/hooks/MyContextProvider';
import { ReactLenis } from "@studio-freight/react-lenis";
import Home from './components/pages/home/Home';
import About from './components/pages/About/About';
import DvtBadge from './widgets/buttons/DvtBadge';
import CatalogPage from './components/pages/CatalogPage/CatalogPage';
import Footer from './widgets/footer/Footer';
import Header from './widgets/header/Header';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();
	return (
		<ReactLenis root options={{
			lerp: 0.1,
			duration: 1,
			smoothTouch: false, //smooth scroll for touch devices
			smooth: true,
		}
		}>

			<MyContextProvider>
				<Header />
				<AnimatePresence mode='wait'>
					<DvtBadge />
					<Routes location={location} key={location.pathname}>
						<Route element={<Home />} path='/' />
						<Route element={<About />} path='/about' />
						<Route element={<CatalogPage />} path='/catalog' />
					</Routes>
				</AnimatePresence>
				<Footer />
			</MyContextProvider>
		</ReactLenis>
	);
}

export default App;