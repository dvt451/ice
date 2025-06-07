// Hero.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HeroTitle from './HeroTitle';
import HeroContent from './HeroContent';
import HomeMarque from '../../sections/HomeMarque'

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ children }) {
	const imageRef = useRef(null);
	const heroRef = useRef(null);
	const isMobile = window.innerWidth <= 768;

	useEffect(() => {
		const img = imageRef.current;
		const heroSection = heroRef.current;

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
					trigger: heroSection,
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
			},
			{
				transform: 'translate3d(0, -50%, 0)',
				scrollTrigger: {
					trigger: heroSection,
					start: '46% top',
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

	return (
		<div ref={heroRef} className='hero-wrapper'>
			<section style={children ? null : { paddingTop: '100vh' }} className='hero'>
				<div className="hero__image-container">
					<div className="hero__image">
						<img
							ref={imageRef}
							src="/img/main-image.jpg"
							alt="Image"
						/>
					</div>
				</div>
				{children}
			</section>
			<HomeMarque />
		</div>
	);
}
