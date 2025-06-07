import React from 'react'
import Marque from '../../../../widgets/Marque'

export default function HomeMarque() {
	return (
		<div className='marquee-wrapper'>
			<div className='marquee-container'>
				<Marque direction={"left"} text={"A BRIGHT MAP OF TASTES"} />
				<Marque direction={"right"} text={"NATURAL PRODUCTS"} />
				<Marque direction={"left"} text={"WE ALWAYS CHECK THE QUALITY"} />
			</div>
		</div>
	)
}
