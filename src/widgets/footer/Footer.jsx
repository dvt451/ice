import React, { useEffect, useRef } from 'react'
import FooterContent from './FooterContent';

export default function Footer() {
	const footerRef = useRef(null);          // The fixed outer footer
	const footerInnerRef = useRef(null);     // The inner content
	const widthLimit = window.innerWidth > 359;
	const heightLimit = window.innerHeight > 560;

	const conditionalStyle =
		widthLimit && heightLimit
			? { position: 'fixed', bottom: 0 }
			: {};
	// Update the footer and helper height dynamically
	useEffect(() => {
		const updateFooterHeight = () => {
			if (footerRef.current && footerInnerRef.current) {
				const height = footerInnerRef.current.offsetHeight;
				footerRef.current.style.height = `${height}px`;
				footerInnerRef.current.style.height = `${height}px`;
			}
		};
		setTimeout(() => {
			updateFooterHeight();
		}, 300);
		window.addEventListener('resize', updateFooterHeight);

		return () => {
			window.removeEventListener('resize', updateFooterHeight);
		};
	}, []);
	return (
		<footer ref={footerRef} className="footer">
			<div style={conditionalStyle} ref={footerInnerRef} className="footer__stick">
				<FooterContent />
			</div>
		</footer>
	)
}
