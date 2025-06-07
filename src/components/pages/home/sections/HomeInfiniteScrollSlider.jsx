import React from 'react'
import InfiniteScrollSlider from '../../../../widgets/components/InfiniteScrollSlider'

export default function HomeInfiniteScrollSlider() {
	const images = [
		'/img/marquee_1.webp',
		'/img/marquee_2.webp',
		'/img/marquee_3.webp',
		'/img/marquee_4.webp',
	]
	return (
		<div className='home__marquee'>
			<InfiniteScrollSlider images={images} />
		</div>
	)
}
