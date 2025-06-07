import React from 'react'
import Hero from './sections/Hero/Hero'
import HomeAbout from './sections/HomeAbout'
import HomeInfiniteScrollSlider from './sections/HomeInfiniteScrollSlider'
import HeroTitle from './sections/Hero/HeroTitle'
import HeroContent from './sections/Hero/HeroContent'
import ImageResize from '../../../widgets/components/ImageResize'
import CatalogBlock from './sections/CatalogBlock'

export default function MainContent() {
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
			<div className='home-top-block'>
				<ImageResize image={'/img/main-image.jpg'}>
					<div className="hero-content" >
						<div className="hero-content__container">
							<HeroTitle />
							<HeroContent />
						</div>
					</div>
				</ImageResize>
			</div>
			<div className='home-middle-block'>
				<HomeAbout />
				<CatalogBlock products={iceCreams} />
				<HomeInfiniteScrollSlider />
			</div>
			<div className="home-bottom-block">
				<ImageResize image={'/img/trailing.webp'} />
			</div>
			{/* <div style={{ position: 'relative', zIndex: '2', background: 'var(--colBackground)' }}><HomeCatalog /></div> */}
		</>
	)
}
