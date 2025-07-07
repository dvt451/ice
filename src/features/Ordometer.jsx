import gsap from 'gsap';
import React, { useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '@studio-freight/react-lenis';
import { MyContext } from '../shared/hooks/MyContextProvider';

export default function Ordometer() {
	const counter3 = useRef(null);
	const loadinScreenRef = useRef(null)
	const lenis = useLenis();
	const location = useLocation().pathname
	const _ = useContext(MyContext);

	useEffect(() => {
		const animate = (counter, duration, delay = 0) => {
			const numHeight = counter.querySelector('.num').clientHeight;
			const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;
			gsap.to(counter, {
				y: -totalDistance,
				duration: duration,
				delay: delay,
				ease: "power2.inOut"
			});
			gsap.to(loadinScreenRef.current, {
				duration: 1,
				transform: 'translateY(25%)',
				clipPath: "circle(0% at 50% 100%)",
				delay: location === '/' ? 3.5 : 1.5,
				ease: "Power3.easeOut",
			})
		};

		const loader = () => {
			for (let i = 0; i < 9; i++) {
				for (let j = 0; j < 10; j++) {
					const div = document.createElement('div');
					div.className = "num";
					div.textContent = j;
					counter3.current.appendChild(div);
				}
			}
			const finalDiv = document.createElement('div');
			finalDiv.className = "num";
			finalDiv.textContent = "0";
			counter3.current.appendChild(finalDiv);
			if (location === '/') {
				animate(counter3.current, 3);
				animate(document.querySelector(".counter-2"), 3);
				animate(document.querySelector(".counter-1"), 1, 2);
			} else {
				animate(document.querySelector(".counter-1"), 0.5, 0.5);
				animate(counter3.current, 1);
				animate(document.querySelector(".counter-2"), 1);
			}

			if (_.loadingState) {
				setTimeout(() => {
					document.body.style.overflow = 'auto';
				}, location === '/' ? 3000 : 1900);
			};
		};

		loader();
		if (lenis) {
			lenis && lenis.scrollTo(0, { immediate: true });
		}
		if (_.loadingState) {
			document.body.style.overflow = 'hidden';
		};

		// Clean up function to remove any remaining elements when unmounting
		return () => {
			// counter3.current.innerHTML = "";
			if (_.loadingState) {
				document.body.style.overflow = 'auto';
			};
			if (lenis) {
				lenis && lenis.scrollTo(0, { immediate: true });
			}
		};
	}, [lenis]);

	return (
		<div ref={loadinScreenRef} style={{ display: _.loadingState ? 'flex' : 'none' }} className='loading-screen'>
			<div className="loading-screen__content">
				<div className="loading-screen__text">Loading</div>
				<div className="counter">
					<div className="counter-1 digit">
						<div className="num">0</div>
						<div className="num num1offset1">1</div>
					</div>
					<div className="counter-2 digit">
						{Array.from({ length: 10 }, (_, index) => (
							<div key={index} className={index === 1 ? "num num1offset2" : "num"}>{index}</div>
						))}
						<div className="num">0</div>
					</div>
					<div ref={counter3} className="counter-3 digit">
					</div>
					<div className="symbol">%</div>
				</div>
			</div>
		</div>
	);
}
