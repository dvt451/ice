import React, { useEffect, useRef, useState } from 'react'

export default function Marque({ text, direction }) {
	const firstText = useRef(null);
	const [wrapperWidth, setWrapperWidth] = useState(0);

	useEffect(() => {
		const measureWidth = () => {
			if (firstText.current) {
				setWrapperWidth(firstText.current.offsetWidth);
			}
		};
		setTimeout(() => {
			requestAnimationFrame(measureWidth);
		}, 100);
	}, []);

	// console.log(wrapperWidth);
	return (
		<div className={`marquee marquee_${direction}`} style={{ "--wrapper-width": `${wrapperWidth}px` }}>
			<div className="marquee__wrapper">
				<div ref={firstText} className="marquee__item">
					<span>{text}</span>
					<span>{text}</span>
				</div>
				<div className="marquee__item">
					<span>{text}</span>
					<span>{text}</span>
				</div>
			</div>
			<div className="marquee__wrapper">
				<div className="marquee__item">
					<span>{text}</span>
					<span>{text}</span>
				</div>
				<div className="marquee__item">
					<span>{text}</span>
					<span>{text}</span>
				</div>
			</div>
		</div>
	);
}