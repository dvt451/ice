import { useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';

import Marque from '../Marque'
import { motion } from 'framer-motion';
import { MyContext } from '../../shared/hooks/MyContextProvider';

export default function ImageResize({ children, image }) {
	const imageRef = useRef(null);
	const pictureRef = useRef(null);
	const sectionRef = useRef(null);
	const isMobile = window.innerWidth <= 768;
	const _ = useContext(MyContext)

	useEffect(() => {
		const img = imageRef.current;
		const section = sectionRef.current;

		// Create animations with ScrollTriggers
		const scaleAnim = gsap.fromTo(
			img,
			{
				width: '100vw',
				height: '100%',
			},
			{
				width: isMobile ? '80vw' : '40vw',
				height: isMobile ? '70%' : '90%',
				scrollTrigger: {
					trigger: section,
					start: 'top top',
					end: '46% top',
					scrub: true,
					// markers: true,
				},
				transformOrigin: 'center center',
			}
		);

		const moveAnim = gsap.fromTo(
			img,
			{
				transform: 'translateY(0)',
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"

			},
			{
				clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 70%)",
				transform: 'translate3d(0, 30%, 0)',
				scrollTrigger: {
					trigger: section,
					start: '52% top',
					end: 'bottom top',
					scrub: true,
				},
				transformOrigin: 'center center',
			}
		);

		// ✅ Clean up animations and triggers
		return () => {
			scaleAnim.scrollTrigger?.kill();
			moveAnim.scrollTrigger?.kill();
			scaleAnim.kill();
			moveAnim.kill();
		};
	}, [isMobile]); // Add dependencies if needed
	useEffect(() => {
		if (!_.loadingState) return;
		gsap.fromTo(
			pictureRef.current,
			{ scale: 1.4 },
			{
				scale: 1,
				duration: 3,
				delay: 3.6,
				ease: 'power1.out', // аналог ease-out
			}
		);
	}, [])

	return (
		<div ref={sectionRef} className='image-resize'>
			<div className='sticky-container'>
				<div className="image-resize__image-container">
					<div ref={imageRef} className='image-resize__image-wrapper'>
						<img ref={pictureRef} src={image} alt={'wallpeper'} />;
					</div>
				</div>
			</div>
			<div className="image-resize__section">
				{children}
			</div>
			<div className="image-resize__section">
				<div className='marquee-wrapper'>
					<div className="marquee-container">
						<Marque direction={"left"} text={"NATURAL PRODUCTS"} />
						<Marque direction={"right"} text={"NATURAL PRODUCTS"} />
						<Marque direction={"left"} text={"NATURAL PRODUCTS"} />
					</div>
				</div>

			</div>
		</div>
	)
}
