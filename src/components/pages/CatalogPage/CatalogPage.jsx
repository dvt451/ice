import React from 'react'
import Header from '../../../widgets/header/Header'
import Footer from '../../../widgets/footer/Footer'
import Catalog from '../../../widgets/components/Catalog'

export default function CatalogPage() {
	const iceCreams = [
		{
			title: 'Raspberry Mochi',
			weight: '80g',
			price: '10',
			image: '/img/cream1.png',
			id: 1,
		},
		{
			title: 'Mango - Passion Fruit Mochi',
			weight: '80g',
			price: '10',
			image: '/img/cream2.png',
			id: 2,
		},
		{
			title: 'Pistachio-Raspberry Mochi',
			weight: '80g',
			price: '10',
			image: '/img/cream3.png',
			id: 3,
		},
		{
			title: 'Chocolate Mochi',
			weight: '80g',
			price: '10',
			image: '/img/cream4.png',
			id: 4,
		},
		{
			title: 'Brownies with apricots and prunes',
			weight: '80g',
			price: '10',
			image: '/img/cream5.png',
			id: 5,
		},
		{
			title: 'Brownies salted caramel',
			weight: '80g',
			price: '10',
			image: '/img/cream6.png',
			id: 6,
		},
		{
			title: 'Toffee',
			weight: '80g',
			price: '10',
			image: '/img/cream7.png',
			id: 7,
		},
		{
			title: 'Lavender',
			weight: '80g',
			price: '10',
			image: '/img/cream8.png',
			id: 8,
		}
	]
	return (
		<>
			<Header />
			<main className='cataloge-page'>
				<div className='home__catalog home-catalog'>
					<div className="home-catalog__container">
						<h2 className="home-catalog__title">Catalog</h2>
					</div>
					<Catalog products={iceCreams} />
				</div>
			</main>
			<Footer />
		</>
	)
}
