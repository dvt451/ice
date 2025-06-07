import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../card/ProductCard'

export default function Catalog({ products }) {
	return (
		<div className='catalog'>
			<div className="catalog__container">
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}
