import { useRef, useEffect, useContext } from 'react'
import CircleLink from '../../../../../widgets/links/CircleLink'
import gsap from 'gsap'
import { MyContext } from '../../../../../shared/hooks/MyContextProvider'

export default function HeroContent() {
	const contentRef = useRef(null)
	const _ = useContext(MyContext)
	useEffect(() => {
		if (!_.loadingState) return;
		gsap.fromTo(
			contentRef.current,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1,
				delay: 4,
				ease: 'power1.out', // аналог ease-out
			}
		)
	}, [])
	return (
		<div ref={contentRef} className="hero-content__content">
			<p>No, girl, I don't like all these ice creams and frozen juices... When I was a kid I liked it, of course, but I don't know what else I liked... let's have the usual, white chocolate-covered... And what's that lilac soap you have? mr.ice? I'll take the bright yellow one, what's that? Mango-maracuya? Oh, it's cold! And what's that crunching on your teeth? Bones... cool! And can I bring this pink one, too!</p>
			<CircleLink href={'/'} text={'Flavours'} nameClass={'hero__link'} />
		</div>
	)
}
