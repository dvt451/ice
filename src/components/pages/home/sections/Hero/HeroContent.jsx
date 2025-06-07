import React from 'react'
import CircleLink from '../../../../../widgets/links/CircleLink'

export default function HeroContent() {
	return (
		<div className="hero-content__content">
			<p>No, girl, I don't like all these ice creams and frozen juices... When I was a kid I liked it, of course, but I don't know what else I liked... let's have the usual, white chocolate-covered... And what's that lilac soap you have? mr.pops? I'll take the bright yellow one, what's that? Mango-maracuya? Oh, it's cold! And what's that crunching on your teeth? Bones... cool! And can I bring this pink one, too!</p>
			<CircleLink href={'/'} text={'Flavours'} nameClass={'hero__link'} />
		</div>
	)
}
