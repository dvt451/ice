import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

export default function InfiniteScrollSlider({ images }) {
	const sliderRef = useRef(null);

	const screenWidth = window.innerWidth;
	const isTablet = screenWidth <= 991.98;
	const isMobileSmall = screenWidth <= 479.98;

	const multiplier = isMobileSmall ? 4 : isTablet ? 2 : 1;
	let xPercent = 100 * multiplier;
	let direction = -1;
	const speed = 0.3 + (multiplier / 10);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(sliderRef.current, {
			scrollTrigger: {
				trigger: sliderRef.current,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 0.25,
				onUpdate: (self) => {
					direction = self.direction * -1;
				},
			},
			x: `-=${1000 / multiplier}px`,
		});

		requestAnimationFrame(animate);
	}, [multiplier]);

	const animate = () => {
		if (xPercent <= -100 * multiplier) xPercent = 0;
		if (xPercent > 0) xPercent = -100 * multiplier;

		gsap.set(sliderRef.current, { xPercent });
		xPercent += speed * direction;

		requestAnimationFrame(animate);
	};

	return (
		<div ref={sliderRef} className="slider">
			<div className="slider__block">
				{images.map((item, i) => (
					<div key={`a-${i}`} className="slider__slide">
						<img src={item} alt="slide" />
					</div>
				))}
			</div>
			<div className="slider__block">
				{images.map((item, i) => (
					<div key={`b-${i}`} className="slider__slide">
						<img src={item} alt="slide" />
					</div>
				))}
			</div>
			{<div className="slider__block">
				{images.map((item, i) => (
					<div key={`c-${i}`} className="slider__slide">
						<img src={item} alt="slide" />
					</div>
				))}
			</div>}
		</div>
	);
}
